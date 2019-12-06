const isProd = () => {
    return process.env.NODE_ENV === 'production'
}

const stockAnalysis = '/stock-analysis'

export const decimalPlaces = 2

export const devBackendURL = 'https://localhost:3000'
export const prodBackendURL = 'https://ec2-3-17-141-8.us-east-2.compute.amazonaws.com:3000'

export const backendURL = isProd() ? prodBackendURL : devBackendURL

const HOME = '/'
const SIGN_IN = '/signin'
const SIGN_UP = '/signup'
const SIGN_OUT = '/signout'
const ADD_STOCK = '/addstock'

export const frontendURL = {
    HOME: isProd() ? `${stockAnalysis}${HOME}` : HOME,
    SIGN_IN: isProd() ? `${stockAnalysis}${SIGN_IN}` : SIGN_IN,
    SIGN_UP: isProd() ? `${stockAnalysis}${SIGN_UP}` : SIGN_UP,
    SIGN_OUT: isProd() ? `${stockAnalysis}${SIGN_OUT}` : SIGN_OUT,
    ADD_STOCK: isProd() ? `${stockAnalysis}${ADD_STOCK}` : ADD_STOCK
}
