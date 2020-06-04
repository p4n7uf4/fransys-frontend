import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Main from '../templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Pacientes',
    subtitle: 'Listagem de pacientes'
}

const baseUrl = 'http://localhost:3005/patients'
const initialState = {
    patient: {
        nome: '',
        dataNascimento: '',
        endereco: '',
        telefone: '',
        anamnase: ''
    },
    list: []
}

export default class ConsultarPaciente extends Component {
    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    getUpdatedList(patient, add = true) {
        const list = this.state.list.filter(p => p.id !== patient.id)
        if (add) list.unshift(patient)
        return list
    }

    remove(patient) {
        axios.delete(`${baseUrl}/${patient.id}`).then(resp => {
            const list = this.getUpdatedList(patient, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(patient => {
            return (
                <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.nome}</td>
                    <td>{patient.datanascimento}</td>
                    <td>{patient.telefone}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.remove(patient)}>
                            <i className="fa fa-trash"></i>
                        </button>

                        <Link to={{
                            pathname: "/patientReg",
                            state: patient
                        }} className="btn btn-secondary ml-2">
                        <i className="fa fa-pencil"></i>
                        </Link>

                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps} >
                {this.renderTable()}
            </Main>
        )
    }
}

