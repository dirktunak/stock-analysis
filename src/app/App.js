import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Home from './home/home'
import Login from './authentication/login'
import Signup from './authentication/signup'

function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </BrowserRouter>
        </div>
    )
}

export default Navigation
