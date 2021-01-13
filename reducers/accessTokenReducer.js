const accessTokenReducer = (state=null, action) => {
    switch(action.type) {
        case 'SET_ACCESS_TOKEN':
            const {accessToken} = action.payload;
            return accessToken;
        case 'INVALIDATE_ACCESS_TOKEN':
            return null;
        default:
            return state;
    }
}

export default accessTokenReducer;