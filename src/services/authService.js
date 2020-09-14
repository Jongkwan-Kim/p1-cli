import { serviceConfig } from './serviceConfig';
import axios from 'axios';

export const authService = {
    register: register,
    login: login,
    logout: logout
};

const api = {
    register: ['post', '/api/register'],
    login: ['post', '/api/login'],
    logout: ['get', '/api/logout']
};


function register(data) {
    let [method, url] = api.register;
    let body = {
        email: data.email,
        password: data.password,
        name: data.name,
        // phone: data.phone
    };

    let requestConfig = serviceConfig.makeRequestConfig(method, url, body);
    return axios.request(requestConfig);
}

function login(data) {
    let [method, url] = api.login;
    let body = {
        email: data.email,
        password: data.password
    };

    let requestConfig = serviceConfig.makeRequestConfig(method, url, body);
    return axios.request(requestConfig);
}

function logout(data) {
    let [method, url] = api.logout;

    let requestConfig = serviceConfig.makeRequestConfig(method, url);
    return axios.request(requestConfig);
}
