import React from 'react'
import PropTypes from 'prop-types'

import Stock from '../common/stock'

function WatchList(props) {
    const createWatchList = data => {
        const table = []
        Object.keys(data).forEach(ticker => {
            table.push(<Stock key={ticker} ticker={ticker} />)
        })
        return table
    }

    return <div className='watchList'>{createWatchList(props.listOfTicker)}</div>
}

WatchList.propTypes = {
    listOfTicker: PropTypes.object.isRequired
}

export default WatchList
