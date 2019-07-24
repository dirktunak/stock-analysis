import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root.reducer'

const composeEnhancers = composeWithDevTools({})

const configureStore = initialState => {
    const middlewares = [thunk]
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))
}

export default configureStore
