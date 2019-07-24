import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app/app'
import configureStore from './configureStore'

function init() {
    const store = configureStore()
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    )
}

init()
