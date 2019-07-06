import React from 'react'

import { usersListOfTickers } from './common/testData'
import WatchList from './watchlist/watchlist'
import Login from './profile/login'
import Signup from './profile/signup'

function App() {
    return (
        <div className='App'>
            {/* <WatchList listOfTicker={usersListOfTickers} /> */}
            <Login />
            <Signup />
        </div>
    )
}

export default App
