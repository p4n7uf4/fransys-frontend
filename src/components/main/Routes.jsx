import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home/Home'
import CadastroPaciente from '../patient/CadastroPaciente'
import ConsultarPaciente from '../patient/ConsultarPaciente'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/patientReg' component={CadastroPaciente} />
        <Route exact path='/patients' component={ConsultarPaciente} />
        <Redirect from='*' to='/' />
    </Switch>