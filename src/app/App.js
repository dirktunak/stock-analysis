import React from 'react'

import { usersListOfTickers } from './common/testData'
import WatchList from './watchlist/watchlist'
import Login from './profile/login'
import Signup from './profile/signup'
import Logout from './profile/logout'

function App() {
    return (
        <div className='App'>
            {/* <WatchList listOfTicker={usersListOfTickers} /> */}
            <Login />
            <Signup />
            <Logout />
        </div>
    )
}

export default App
