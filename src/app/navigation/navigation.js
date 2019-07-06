import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../profile/login'
import Signup from '../profile/signup'

function Navigation() {
    return (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
        </div>
    )
}

export default Navigation
