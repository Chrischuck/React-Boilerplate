import { combineReducers } from 'redux';

import auth from './reducers/auth'
import notifications from './reducers/notifications'

export default function createReducer(asyncReducers) {
    return combineReducers({
        auth,
        notifications,
        ...asyncReducers
    });
}