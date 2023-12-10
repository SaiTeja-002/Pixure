import * as api from '../api/tagsAPI.js';
import { COOKIE, LOGINHREF, UPDATE_FEED } from '../constants.js';

//Gets User Feed
export const searchByTag = (tag) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.searchByTag(cookie,tag);
        dispatch({ type: UPDATE_FEED, payload: data.posts });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};
