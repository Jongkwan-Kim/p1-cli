import initialState from './initialState';
import * as types from '../actions/types';

export function setting(state = initialState.setting, action) {
    switch (action.type) {
        case types.setting.SEARCH_CATEGORY_SUCCESS:
            const { records } = action.payload;
            return {
                ...state,
                categoryList: records
            };
        default:
            return state;
    }
}