export const switchLogin = () => {
    return {
        type: 'SWITCH_LOG_IN'   
    }
}

export const setAccessToken = (accessToken) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        payload: {
            accessToken: accessToken
        }
    }
}