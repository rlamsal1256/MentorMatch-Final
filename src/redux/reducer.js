import { combineReducers } from 'redux';
import authUser from './reducers/authUser';
import users from './reducers/users';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    authUser,
    users,
    router: routerReducer
})