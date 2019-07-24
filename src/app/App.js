import React from 'react'

import { usersListOfTickers } from './common/testData'
import WatchList from './watchlist/watchlist'
import Login from './authentication/login'
import Signup from './authentication/signup'
import Logout from './authentication/logout'

function App() {
    return (
        <div className='App'>
            <WatchList listOfTicker={usersListOfTickers} />
            <Login />
            <Signup />
            <Logout />
        </div>
    )
}

export default App
