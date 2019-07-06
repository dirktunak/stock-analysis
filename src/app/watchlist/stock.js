import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ChangePercent from './changePercent'
import Chart from './chart'
import Ticker from './ticker'
import { testData } from '../common/testData'
import { numberColor } from './services'

function Stock(props) {
    const [changePercent, setChangePercent] = useState(null)

    useEffect(() => {
        const result = testData[props.ticker]
        setChangePercent(result.changePercent)
    })

    return (
        <div className='Stock' color={numberColor(changePercent)}>
            <Ticker ticker={props.ticker} />
            <Chart></Chart>
            <ChangePercent changePercent={changePercent} />
        </div>
    )
}

Stock.propTypes = {
    ticker: PropTypes.string
}

export default Stock
