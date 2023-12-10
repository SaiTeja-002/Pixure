import * as api from '../api/userAPI.js';
import { COOKIE, FETCH_CONTENT, FETCH_PROFILE, LOGINHREF, UPDATE_METADATA } from '../constants.js';

//Gets User Info
export const fetchInfo = () => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.fetchInfo(cookie);
        dispatch({ type: UPDATE_METADATA, payload: data });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}

//Gets User Feed
export const fetchProfile = (name) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.fetchProfile(cookie, name);
        dispatch({ type: FETCH_PROFILE, payload: data });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};

//Edit User Info
export const updateInfo = (info) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.updateInfo(cookie, info);
        dispatch({ type: UPDATE_METADATA, payload: data });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}

//Fetch Users Posts
export const fetchPosts = () => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.fetchPosts(cookie);
        dispatch({ type: FETCH_CONTENT, payload: data.posts });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}