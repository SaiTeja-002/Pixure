import * as api from '../api/postAPI.js';
import { COOKIE, LOGINHREF } from '../constants.js';

//Gets User Feed
export const getFeed = async () => {
    try {
        let cookie = window.localStorage.getItem(COOKIE);
        let { data, status} = await api.getFeed(cookie);
        console.log(data.posts);
    } catch (error) {
        let {data,status} = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};

//Searches Post By title
export const searchPost = async (title) => {
    try {
        let cookie = window.localStorage.getItem(COOKIE);
        let { data, status} = await api.getPost(cookie,title);
        console.log(data.posts);
    } catch (error) {
        let {data,status} = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};

//Adds Post to DB
export const addPost = async (image,title,tags) => {
    try {
        let cookie = window.localStorage.getItem(COOKIE);
        let postInfo = {image,title,tags};
        let {status} = await api.addPost(cookie,postInfo);
    } catch (error) {
        let {data,status} = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};