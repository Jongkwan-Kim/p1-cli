import * as types from './types';
import { settingService } from "../services/settingService";
import CONSTANT from '../constant';

async function getCategory(data) {
    let res = await settingService.searchCategory(data);
    if (res.data.success === true) {
        return res.data;
    } else {
        throw res;
    }
};

export const searchCategory = (data) => ({
    type: types.setting.SEARCH_CATEGORY,
    payload: getCategory(data)
});

async function postCategory(data) {
    let res = await settingService.postCategory(data);
    if (res.data.success === true) {
        return res.data;
    } else {
        throw res;
    }
}

async function postCategoryAndRefresh(data) {
    await postCategory(data);
    let res = await settingService.searchCategory(data);
    if (res.data.success === true) {
        return res.data;
    } else {
        throw res;
    }
}

export const createCategory = (data) => ({
    type: types.setting.SEARCH_CATEGORY,
    payload: postCategoryAndRefresh(data)
});