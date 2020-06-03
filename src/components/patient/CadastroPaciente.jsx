import React, { Component } from 'react'
import axios from 'axios'
import Main from '../templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Pacientes',
    subtitle: 'Área para cadastrar seus pacientes!'
}

const baseURL = 'http://localhost:3001/patients'
const initialState = {
    patient: {
        name: '',
        birthDate: '',
        endereco: '',
        telephone: '',
        anamnese: ''
    }
}

export default class CadastroPaciente extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ patient: initialState.patient })
    }

    save() {
        const patient = this.state.patient
        axios.post(baseURL, patient)
            .then(response => {
                alert('Paciente adicionado com sucesso')
                this.setState({ patient: initialState.patient })
            })
    }

    updateField(event) {
        const patient = { ...this.state.patient }
        patient[event.target.name] = event.target.value
        this.setState({ patient })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name"
                                value={this.state.patient.name}
                                onChange={e => this.updateField(e)}
                                placeholder='Digite o nome do paciente' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Data de Nascimento</label>
                            <input type="text" className="form-control" name="birthDate"
                                value={this.state.patient.birthDate}
                                onChange={e => this.updateField(e)}
                                placeholder='Insira a data de nascimento do paciente' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Endereço</label>
                            <input type="text" className="form-control" name="endereco"
                                value={this.state.patient.endereco}
                                onChange={e => this.updateField(e)}
                                placeholder='Insira o endereço do paciente' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control" name="telephone"
                                value={this.state.patient.telephone}
                                onChange={e => this.updateField(e)}
                                placeholder='Insira a data de nascimento do paciente' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label>Anamnese</label>
                            <br/>
                            <textarea name="anamnese" cols="100" rows="5" className='form-control'
                                value={this.state.patient.anamnese}
                                onChange={e => this.updateField(e)}
                                placeholder='Insira aqui a anamnese do seu paciente' />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>Cancelar</button>
                    </div>

                </div>
            </div>
        )
    }
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }

}