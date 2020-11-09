import { serviceConfig } from './serviceConfig';
import axios from 'axios';

export const settingService = {
    searchCategory: searchCategory,
    postCategory: postCategory,
};

const api = {
    searchCategory: ['get', '/api/setting/category'],
    postCategory: ['post', '/api/setting/category'],
};

function searchCategory(data) {
    let [method, url] = api.searchCategory;

    let requestConfig = serviceConfig.makeRequestConfig(method, url);
    return axios.request(requestConfig);
}

function postCategory(data) {
    let [method, url] = api.postCategory;
    let { name, des } = data;
    let params = {
        name,
        des
    };

    let requestConfig = serviceConfig.makeRequestConfig(method, url, params);
    return axios.request(requestConfig);
}
