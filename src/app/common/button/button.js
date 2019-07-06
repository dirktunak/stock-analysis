import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    return (
        <button className='button' onClick={props.onClick}>
            {props.name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
