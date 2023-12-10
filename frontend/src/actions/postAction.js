import * as api from '../api/postAPI.js';
import { COOKIE, LOGINHREF, UPDATE_FEED } from '../constants.js';

//Gets User Feed
export const getFeed = () => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.getFeed(cookie);
        dispatch({ type: UPDATE_FEED, payload: data.posts });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};

//Searches Post By title
export const searchPost = (title) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.getPost(cookie, title);
        dispatch({ type: UPDATE_FEED, payload: data.posts });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};

//Adds Post to DB
export const addPost = (image, title, tags) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let postInfo = { image, title, tags };
        let { status } = await api.addPost(cookie, postInfo);
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};