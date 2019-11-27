import React from 'react'

import { usersListOfTickers } from '../common/testData'
import WatchList from '../watchlist/watchlist'
import Login from '../authentication/login'

function App() {
    return (
        <div className='App'>
            <Login />
            <WatchList listOfTicker={usersListOfTickers} />
        </div>
    )
}

export default App
