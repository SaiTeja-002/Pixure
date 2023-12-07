import axios from 'axios';
import { BASEURL } from '../constants';

//User Self Related
export const fetchInfo = (cookie) => axios.get(`${BASEURL}/user/info/?cookie=${cookie}`);
export const fetchPosts = (cookie) => axios.get(`${BASEURL}/user/posts/?cookie=${cookie}`);
export const fetchSocial = (cookie) => axios.get(`${BASEURL}/user/social/?cookie=${cookie}`);

//User Update Info
export const updateInfo = (cookie, body) => axios.patch(`${BASEURL}/update/?cookie=${cookie}`, body);
export const followUser = (cookie, body) => axios.patch(`${BASEURL}/follow/?cookie=${cookie}`, body);
export const unfollowUser = (cookie, body) => axios.patch(`${BASEURL}/unfollow/?cookie=${cookie}`, body);

//Profile Query
export const fetchProfile = (cookie, name) => axios.get(`${BASEURL}/url/profile/${name}/?cookie=${cookie}`);