import React from 'react'
import PropTypes from 'prop-types'

import { addPlusIfPositive } from './services'

function ChangePercent(props) {
    return <div>{addPlusIfPositive(props.changePercent)}</div>
}

ChangePercent.propTypes = {
    changePercent: PropTypes.number
}

export default ChangePercent
