import React from 'react'
import PropTypes from 'prop-types'

function ChangePercent(props) {
    const addPlusIfPositive = number => {
        if (number > 0) {
            return `+${number}%`
        }
        return `${number}%`
    }

    return <div>{addPlusIfPositive(props.changePercent)}</div>
}

ChangePercent.propTypes = {
    changePercent: PropTypes.number
}

export default ChangePercent
