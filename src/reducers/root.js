import { combineReducers } from 'redux';
import { auth } from './auth';
import { setting } from './setting';

const appReducer = combineReducers({
    auth,
    setting
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        // state.auth = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;