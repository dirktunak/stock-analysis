import React from 'react'

import { usersListOfTickers } from '../../common/testData'
import WatchList from '../watchlist/watchlist'
import Login from '../authentication/login'

function Home() {
    return (
        <div className='Home'>
            <Login />
            <WatchList listOfTicker={usersListOfTickers} />
        </div>
    )
}

export default Home
