import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ChangePercent from '../watchlist/changePercent'
import Ticker from './ticker'
import Chart from '../watchlist/chart'
import { testData } from './testData'
import { numberColor } from '../watchlist/services'

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
