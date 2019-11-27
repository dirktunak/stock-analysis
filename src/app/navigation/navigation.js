import React from 'react'
import { Link, Route } from 'react-router-dom'

import Login from '../authentication/login'
import Signup from '../authentication/signup'

function Navigation() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Route path='/' exact component ={Index}/>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
        </div>
    )
}

export default Navigation
