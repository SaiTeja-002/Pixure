import axios from 'axios';
import { BASEURL } from '../constants';

//Add,Update & Delete API calls
export const addPost = (cookie, body) => axios.post(`${BASEURL}/post/add/?cookie=${cookie}`, body);

//Suggestions & Search Based API Calss
export const getFeed = (cookie) => axios.get(`${BASEURL}/post/feed/?cookie=${cookie}`);
export const getPost = (cookie,title) => axios.get(`${BASEURL}/post/search/${title}/?cookie=${cookie}`);