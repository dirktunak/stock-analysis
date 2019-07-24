import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import wrappedFetch from '../common/wrappedFetch'
import { backendURL } from '../common/constants'

import { setJWT } from './authentication.action'

const Form = props => {
    const [username, setUsername] = useState('testuser')
    const [password, setPassword] = useState('testuserpassword')
    const dispatch = useDispatch()

    const handleSubmit = evt => {
        evt.preventDefault()
        const data = {
            username,
            password
        }
        wrappedFetch(`${backendURL}/${props.page}`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(body => {
            const { jwt, error } = body

            if (jwt) {
                dispatch(setJWT(jwt))
            }
            if (error) {
                // eslint-disable-next-line no-console
                console.log('error', error)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type='text'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <input type='submit' value={props.page} />
        </form>
    )
}

Form.propTypes = {
    page: PropTypes.string.isRequired
}

export default Form
