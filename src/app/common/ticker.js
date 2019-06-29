import React from 'react'
import PropTypes from 'prop-types'

function Ticker(props) {
    return <div>{props.ticker}</div>
}

Ticker.propTypes = {
    ticker: PropTypes.string
}

export default Ticker
