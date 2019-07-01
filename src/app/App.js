import React from 'react'
import WatchList from './watchlist/watchlist'

import { usersListOfTickers } from './common/testData'

function App() {
    return (
        <div className='App'>
            <WatchList listOfTicker={usersListOfTickers} />
        </div>
    )
}

export default App
