import React from 'react'

import { frontendURL } from '../../common/constants'
import history from '../../history'
import StyledButton from '../styled/StyledButton'

function SignOut() {
    function signout() {
        window.localStorage.removeItem('jwt')
        history.push(frontendURL.HOME)
    }
    return (
        <StyledButton className='button' onClick={signout}>
            Sign Out
        </StyledButton>
    )
}

export default SignOut
