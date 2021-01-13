import {combineReducers} from 'redux'

import loggedReducer from './isLogged';
import accessTokenReducer from './accessTokenReducer';

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    accessToken: accessTokenReducer
});

export default rootReducer;