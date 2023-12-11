import * as api from '../api/userAPI.js';
import {
    COOKIE, EDIT_POST, FETCH_CONTENT,
    FETCH_PROFILE, FETCH_SOCIAL, FOLLOW_REQUEST, LOGINHREF,
    REMOVE_CONTENT, UNFOLLOW, UPDATE_METADATA, FOLLOW
} from '../constants.js';

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

//Fetch Users Followers & Following
export const fetchSocial = () => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.fetchSocial(cookie);
        dispatch({ type: FETCH_SOCIAL, payload: data });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}

//Unfollow User
export const unfollowUser = (name) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.unfollowUser(cookie, { account: name });
        dispatch({ type: UNFOLLOW, payload: name });
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}

//follow User
export const followUser = (name) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.followUser(cookie, { account: name });
        dispatch({ type: FOLLOW, payload: name });
        dispatch({ type: FOLLOW_REQUEST, payload: {} })
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}

//Updates Title
export const editPost = (index, title) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.editPost(cookie, index, { title: title });
        dispatch({ type: EDIT_POST, payload: { index: index, title: title } })
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}

//Removes Post
export const removePost = (index) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.removePost(cookie, index);
        dispatch({ type: REMOVE_CONTENT, payload: { index: index } })
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
}