import React from 'react'

function Logout() {
    function logout() {
        window.localStorage.removeItem('jwt')
    }
    return (
        <button className='button' onClick={logout}>
            Logout
        </button>
    )
}

export default Logout
