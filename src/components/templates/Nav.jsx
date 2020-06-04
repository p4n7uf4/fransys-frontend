import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem to='/' icon='home' name='Início' />
            <NavItem to='/patients' icon='users' name='Consultar Pacientes' />
            <NavItem to='/patientReg' icon='users' name='Cadastrar Paciente' />
            
        </nav>
    </aside>