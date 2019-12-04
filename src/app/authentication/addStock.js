import React, { useState } from 'react'
import styled from 'styled-components'

import history from '../../history'
import wrappedFetch from '../../common/wrappedFetch'
import { backendURL } from '../../common/constants'

const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: none;
    border-radius 3px;
    background-color: #121212;
    color: rgba(255, 255, 255, 0.7);
`

const StyledButton = styled.button`
    font-size: 0.5em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: #121212;
    color: rgba(255, 255, 255, 0.7);
`

function AddStock() {
    const [stock, setStock] = useState('')
    const { jwt } = window.localStorage

    const onClick = () => {
        const data = {
            stock
        }
        wrappedFetch(`${backendURL}/addStock`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: jwt
            }
        })
            .then(body => {
                // eslint-disable-next-line no-console
                console.log(body)
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.error(error)
            })
    }

    if (jwt) {
        return (
            <div>
                <StyledInput value={stock} onChange={e => setStock(e.target.value)}></StyledInput>
                <StyledButton onClick={onClick}>Add Stock</StyledButton>
            </div>
        )
    }

    history.push('/login')
    return null
}

export default AddStock
