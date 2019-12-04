import React from 'react'

import { usersListOfTickers } from '../../common/testData'
import WatchList from '../watchlist/watchlist'

function Home() {
    return (
        <div className='Home'>
            <WatchList listOfTicker={usersListOfTickers} />
        </div>
    )
}

export default Home
