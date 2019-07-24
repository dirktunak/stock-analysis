import { authenticationActions } from './authentication.constant'

const initialState = {}

function authenticationReducer(state = initialState, { type, jwt }) {
    switch (type) {
        case authenticationActions.SET_JWT:
            return {
                ...state,
                jwt
            }
        default:
            return state
    }
}

export default authenticationReducer
