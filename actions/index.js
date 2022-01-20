export const switchLogin = () => {
    return {
        type: 'SWITCH_LOG_IN'   
    }
}

export const loginUser = () => {
    return {
        type: 'LOG_IN_USER'
    }
}

export const logoutUser = () => {
    return {
        type: 'LOG_OUT_USER'
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