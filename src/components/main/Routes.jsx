import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home/Home'
import CadastroPaciente from '../patient/CadastroPaciente'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/patientReg' component={CadastroPaciente} />
        <Redirect from='*' to='/' />
    </Switch>