import { authenticationActions } from './authentication.constant'

export function setJWT(jwt) {
    return {
        type: authenticationActions.SET_JWT,
        jwt
    }
}
