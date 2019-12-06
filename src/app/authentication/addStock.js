import React, { useState } from 'react'

import history from '../../history'
import { wrappedJWTFetch } from '../../common/wrappedFetch'
import { backendURL, frontendURL } from '../../common/constants'

import StyledButton from '../styled/StyledButton'
import StyledInput from '../styled/StyledInput'

function AddStock() {
    const [stock, setStock] = useState('')
    const { jwt } = window.localStorage

    const onClick = () => {
        const data = {
            stock
        }
        wrappedJWTFetch(`${backendURL}/addStock`, data)
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

    history.push(frontendURL.SIGN_IN)
    return null
}

export default AddStock
