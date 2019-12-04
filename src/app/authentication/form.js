import React, { useState } from 'react'
import PropTypes from 'prop-types'

import history from '../../history'

import { wrappedFetch } from '../../common/wrappedFetch'
import { backendURL } from '../../common/constants'

import LoginSignUp from '../styled/LoginSignUp'
import StyledButton from '../styled/StyledButton'
import StyledInput from '../styled/StyledInput'
import FlexText from '../styled/FlexText'
import FlexContainer from '../styled/FlexContainer'
import { colors } from '../styled/style.constants'

const borderRadius = '15px'

const Form = () => {
    const [username, setUsername] = useState('testuser')
    const [password, setPassword] = useState('testuserpassword')

    const onClick = page => {
        const data = {
            username,
            password
        }
        wrappedFetch(`${backendURL}/${page}`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(body => {
            const { jwt, error } = body

            if (jwt) {
                window.localStorage.setItem('jwt', jwt)
                history.push('/')
            }
            if (error) {
                // eslint-disable-next-line no-console
                console.log('error', error)
            }
        })
    }

    return (
        <LoginSignUp borderRadius='5px'>
            <FlexContainer
                flexDirection='column'
                padding='1em'
                backgroundColor={colors.WHITE}
                borderRadius={`${borderRadius} 0px 0px ${borderRadius}`}>
                <FlexText>Sign In</FlexText>
                <StyledInput
                    type='text'
                    name='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <StyledInput
                    type='text'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <StyledButton onClick={() => onClick('signin')}>Sign In</StyledButton>
            </FlexContainer>
            <FlexContainer
                flexDirection='column'
                padding='1em'
                backgroundColor={colors.GREEN}
                borderRadius={`0px ${borderRadius} ${borderRadius} 0px`}>
                <FlexText>Sign Out</FlexText>
                <StyledInput
                    type='text'
                    name='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <StyledInput
                    type='text'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <StyledButton onClick={() => onClick('signup')}>Sign Up</StyledButton>
            </FlexContainer>
        </LoginSignUp>
    )
}

Form.propTypes = {
    page: PropTypes.string.isRequired
}

export default Form
