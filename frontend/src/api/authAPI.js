import axios from 'axios';

//Base URL for Auth Related API Calls
const baseURL = "http://localhost:5000";

//Auth Functions
export const signup = (body) => axios.post(`${baseURL}/auth/signup`, body);
export const login = (body) => axios.post(`${baseURL}/auth/login`, body);