import React from 'react'
import styled from 'styled-components'
import { Route, Router } from 'react-router-dom'
import { isUndefined } from 'lodash'

import history from '../history'

import FlexContainer from './styled/FlexContainer'
import StyledLink from './styled/StyledLink'
import AddStock from './authentication/addStock'
import Home from './home/home'
import SignIn from './authentication/signin'
import SignUp from './authentication/signup'
import SignOut from './authentication/signout'

const StyledApp = styled.div`
    text-align: center;
    min-height: 100vh;
    font-size: calc(18px + 2vmin);
    background-color: #282c34;
    padding: 4px 0px;
`

function App() {
    return (
        <StyledApp>
            <Router history={history}>
                <FlexContainer justifyContent={'space-evenly'}>
                    <StyledLink to='/stock-analysis'>Home</StyledLink>
                    {isUndefined(window.localStorage.jwt) ? (
                        <StyledLink to='/signin'>Sign In/Sign Up</StyledLink>
                    ) : (
                        <StyledLink to='/signout'>Sign Out</StyledLink>
                    )}
                    <StyledLink to='/addstock'>Add Stock</StyledLink>
                </FlexContainer>
                <Route path='/' exact component={Home} />
                <Route path='/stock-analysis' exact component={Home} />

                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signout' component={SignOut} />
                <Route path='/addstock' component={AddStock} />
            </Router>
        </StyledApp>
    )
}

export default App
