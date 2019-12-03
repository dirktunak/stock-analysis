import React from 'react'
import PropTypes from 'prop-types'
import FlexText from '../styled/FlexText'

import { addPlusIfPositive } from './services'

function ChangePercent(props) {
    return <FlexText>{addPlusIfPositive(props.changePercent)}</FlexText>
}

ChangePercent.propTypes = {
    changePercent: PropTypes.number
}

export default ChangePercent
