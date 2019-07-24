import React from 'react'

import wrappedFetch from '../common/wrappedFetch'
import { backendURL } from '../common/constants'

function Logout() {
    function logout() {
        wrappedFetch(`${backendURL}/logout`, { method: 'POST' }).then(response =>
            // eslint-disable-next-line no-console
            console.log(response)
        )
    }
    return (
        <button className='button' onClick={logout}>
            Logout
        </button>
    )
}

export default Logout
