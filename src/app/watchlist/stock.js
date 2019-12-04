import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ChangePercent from './changePercent'
import Chart from './chart'
import Ticker from './ticker'
import { testData } from '../../common/testData'
import { numberColor } from './services'

const StyledStock = styled.div`
    display: flex;
    border-style: solid;
    border-width: 2px 4px;
    background-color: ${props => props.color};
`

function Stock(props) {
    const [changePercent, setChangePercent] = useState(null)

    useEffect(() => {
        const result = testData[props.ticker]
        setChangePercent(result.changePercent)
    })

    return (
        <StyledStock color={numberColor(changePercent)}>
            <Ticker ticker={props.ticker} />
            <Chart></Chart>
            <ChangePercent changePercent={changePercent} />
        </StyledStock>
    )
}

Stock.propTypes = {
    ticker: PropTypes.string
}

export default Stock
