import React from 'react'
import PropTypes from 'prop-types'

function Signup(props) {
    return <div>asdf</div>
}

function testRestConnection() {
    fetch('http://localhost:3000/signup', { credentials: 'omit', method: 'GET' })
        .then(res => {
            if (res.ok) {
                return res.json()
            }

            throw new Error('Network res was not ok.')
        })
        .then(myBlob => {
            console.log(myBlob)
        })
        .catch(error => {
            console.log('error', error)
        })
}

export default Signup
