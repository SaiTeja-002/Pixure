import axios from 'axios';

//Base URL for User Related API Calls
const baseURL = "http://localhost:5000";

//User Self Related
export const fetchInfo = (cookie) => axios.get(`${baseURL}/user/info`, { params: { cookie: cookie } });
export const fetchPosts = (cookie) => axios.get(`${baseURL}/user/posts`, { params: { cookie: cookie } });
export const fetchSocial = (cookie) => axios.get(`${baseURL}/user/social`, { params: { cookie: cookie } });

//User Update Info
export const updateInfo = (cookie, body) => axios.patch(`${baseURL}/update`, body, { params: { cookie: cookie } });
export const followUser = (cookie, body) => axios.patch(`${baseURL}/follow`, body, { params: { cookie: cookie } });
export const unfollowUser = (cookie, body) => axios.patch(`${baseURL}/unfollow`, body, { params: { cookie: cookie } });

//Profile Query
export const fetchProfile = (cookie, name) => axios.get(`${baseURL}/url/profile:{name}`, { params: { cookie: cookie } });