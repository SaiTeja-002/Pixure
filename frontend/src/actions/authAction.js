import * as api from '../api/authAPI.js';

//Login Function : Saves Cookie To Window
export const login = async (name, password) => {
    try {
        let loginInfo = { name: name, password: password };
        let { data} = await api.login(loginInfo);
        window.localStorage.setItem('cookie', data.cookie);
        return "Success";
    } catch (error) {
        console.log(error.response.data.message);
        return "Failure : ${error.response.data.message}"
    }
}

//SignUP Function : Saves Cookie To Window
export const signup = async (email, name, password) => {
    try {
        let signupInfo = { mail: email, name: name, password: password };
        let { data } = await api.signup(signupInfo);
        window.localStorage.setItem('cookie', data.cookie);
        return "Success";
    } catch (error) {
        console.log(error.response.data.message);
        return `Failure: ${error.response.data.message}`;
    }
};




