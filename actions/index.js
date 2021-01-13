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

export const invalidateAccessToken = () => {
    return {
        type: 'INVALIDATE_ACCESS_TOKEN'
    }
}