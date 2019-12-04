import React from 'react'
import styled from 'styled-components'
import { Router, Link, Route } from 'react-router-dom'

import history from '../history'

import FlexContainer from './styled/FlexContainer'
import AddStock from './authentication/addStock'
import Home from './home/home'
import Login from './authentication/login'
import Signup from './authentication/signup'

const StyledApp = styled.div`
    text-align: center;
    min-height: 100vh;
    font-size: calc(18px + 2vmin);
    background-color: #282c34;
`

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: white;
`

function App() {
    return (
        <StyledApp>
            <Router history={history}>
                <FlexContainer justifyContent={'space-evenly'}>
                    <StyledLink to='/stock-analysis'>Home</StyledLink>
                    <StyledLink to='/login'>Login</StyledLink>
                    <StyledLink to='/signup'>Signup</StyledLink>
                    <StyledLink to='/addstock'>Add Stock</StyledLink>
                </FlexContainer>
                <Route path='/' exact component={Home} />
                <Route path='/stock-analysis' exact component={Home} />

                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/addstock' component={AddStock} />
            </Router>
        </StyledApp>
    )
}

export default App
