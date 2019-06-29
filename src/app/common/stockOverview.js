import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ChangePercent from './changePercent'
import Ticker from './ticker'
import Chart from './chart'
import { testData } from './testData'

function StockOverview(props) {
    const [changePercent, setChangePercent] = useState(null)

    useEffect(() => {
        const result = testData[props.ticker]
        console.log(result)
        setChangePercent(result.changePercent)
    })

    return (
        <div className='StockOverview'>
            <Ticker ticker={props.ticker} />
            <Chart></Chart>
            <ChangePercent changePercent={changePercent} />
        </div>
    )
}

StockOverview.propTypes = {
    ticker: PropTypes.string
}

export default StockOverview
