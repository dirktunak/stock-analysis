export const decimalPlaces = 2

export const devBackendURL = 'http://localhost:3000'
export const prodBackendURL = 'http://ec2-3-17-141-8.us-east-2.compute.amazonaws.com:3000/'

export const backendURL = process.env.NODE_ENV === 'production' ? prodBackendURL : devBackendURL
