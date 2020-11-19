
const loggedReducer = (state=false, action) => {
    switch(action.type) {
        case 'SWITCH_LOG_IN':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;