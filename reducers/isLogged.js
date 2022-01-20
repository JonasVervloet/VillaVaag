const loggedReducer = (state=false, action) => {
    switch(action.type) {
        case 'SWITCH_LOG_IN':
            return !state;
        case 'LOG_IN_USER':
            return true;
        case 'LOG_OUT_USER':
            return false;
        default:
            return state;
    }
}

export default loggedReducer;