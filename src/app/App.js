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

import { frontendURL } from '../common/constants'

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
                    <StyledLink to={frontendURL.HOME}>Home</StyledLink>
                    {isUndefined(window.localStorage.jwt) ? (
                        <StyledLink to={frontendURL.SIGN_IN}>Sign In/Sign Up</StyledLink>
                    ) : (
                        <StyledLink to={frontendURL.SIGN_OUT}>Sign Out</StyledLink>
                    )}
                    <StyledLink to={frontendURL.ADD_STOCK}>Add Stock</StyledLink>
                </FlexContainer>
                <Route path={frontendURL.HOME} exact component={Home} />

                <Route path={frontendURL.SIGN_IN} component={SignIn} />
                <Route path={frontendURL.SIGN_UP} component={SignUp} />
                <Route path={frontendURL.SIGN_OUT} component={SignOut} />
                <Route path={frontendURL.ADD_STOCK} component={AddStock} />
            </Router>
        </StyledApp>
    )
}

export default App
