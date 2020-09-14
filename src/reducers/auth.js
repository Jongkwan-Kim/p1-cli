import initialState from './initialState';
import * as types from '../actions/types';

export function auth(state = initialState.user, action) {
    switch (action.type) {
        case types.auth.REGISTER_SUCCESS:
            // const { email, name, phone } = action.payload;
            return {
                ...state,
                // email: email,
                // name: name,
                // token: accessToken
            };
        case types.auth.LOGIN_SUCCESS:
            const { email, name, accessToken } = action.payload;
            return {
                ...state,
                authenticated: true,
                email: email,
                name: name,
                token: accessToken
            };
        case types.auth.LOGOUT_SUCCESS:
            return initialState.user;
        default:
            return state;
    }
}