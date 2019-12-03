import React from 'react'
import PropTypes from 'prop-types'
import FlexText from '../styled/FlexText'

function Ticker(props) {
    return <FlexText>{props.ticker}</FlexText>
}

Ticker.propTypes = {
    ticker: PropTypes.string
}

export default Ticker
