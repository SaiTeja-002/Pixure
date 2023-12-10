import * as api from '../api/authAPI.js';
import { fetchInfo } from '../api/userAPI.js';
import { COOKIE, HOMEHREF } from '../constants.js';

//Login Function : Saves Cookie To Window
export const login = async (name, password) => {
    try {
        let loginInfo = { name: name, password: password };
        let { data, status } = await api.login(loginInfo);
        window.sessionStorage.setItem(COOKIE, data.cookie);
        (status == 200) && (window.location.href = HOMEHREF);
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
    }
}

//SignUP Function : Saves Cookie To Window
export const signup = async (email, name, password) => {
    try {
        let signupInfo = { email: email, name: name, password: password };
        let { data, status } = await api.signup(signupInfo);
        window.sessionStorage.setItem(COOKIE, data.cookie);
        (status == 201) && (window.location.href = HOMEHREF);
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
    }
};




