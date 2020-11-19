import {combineReducers} from 'redux'

import loggedReducer from './isLogged';

const rootReducer = combineReducers({
    isLogged: loggedReducer
});

export default rootReducer;