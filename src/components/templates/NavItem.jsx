import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={props.to}>
        <i className={`fa fa-${props.icon}`}></i> {props.name}
    </Link>