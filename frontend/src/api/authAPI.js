import axios from 'axios';
import { BASEURL } from '../constants';

//Auth Functions
export const signup = (body) => axios.post(`${BASEURL}/auth/signup`, body);
export const login = (body) => axios.post(`${BASEURL}/auth/login`, body);