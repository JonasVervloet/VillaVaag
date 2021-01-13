import axios from 'axios'

export const api = axios.create({
    baseURL: '/api/'
});

export const apiWithAuthentication = (accessToken) => {
    return axios.create({
        baseURL: '/api/',
        headers: {
            'auth-token': accessToken
        }
    })
}