import * as types from './types';
import {authService} from "../services/authService";
import { history } from '../utils';
import CONSTANT from '../constant';

async function doRegister(data) {
    let res = await authService.register(data);
    if (res.data.status === 200) {
        history.push(CONSTANT.URL.LOG_IN);
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
    if (res.data.status === 200) {
        history.push(CONSTANT.URL.DASH_BOARD);
        return res.data.record;
    } else {
        throw res;
    }
}

export const login = (data) => ({
    type: types.auth.LOGIN,
    payload: doLogin(data)
});