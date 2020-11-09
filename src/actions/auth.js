import * as types from './types';
import {authService} from "../services/authService";
import CONSTANT from '../constant';

async function doRegister(data) {
    let res = await authService.register(data);
    console.log(res)
    if (res.data.success === true) {
        return res.data.record;
    } else {
        throw res;
    }
}

export const register = (data) => ({
    type: types.auth.REGISTER,
    payload: doRegister(data)
});

async function doLogin(data) {
    let res = await authService.login(data);
    if (res.data.success === true) {
        return res.data;
    } else {
        throw res;
    }
}

export const login = (data) => ({
    type: types.auth.LOGIN,
    payload: doLogin(data)
});

async function doLogout(data) {
    let res = await authService.logout(data);
    if (res.data.success === true) {
        return res.data;
    } else {
        throw res;
    }
}

export const logout = (data) => ({
    type: types.auth.LOGOUT,
    payload: doLogout(data)
});