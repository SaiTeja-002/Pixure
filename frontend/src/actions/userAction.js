import * as api from '../api/userAPI.js';
import { COOKIE, FETCH_PROFILE, LOGINHREF} from '../constants.js';

//Gets User Feed
export const fetchProfile = (name) => async (dispatch) => {
    try {
        let cookie = window.sessionStorage.getItem(COOKIE);
        let { data, status } = await api.fetchProfile(cookie,name);
        dispatch({type : FETCH_PROFILE,payload : data});
    } catch (error) {
        let { data, status } = error.response;
        console.log(data.message);
        (status == 401) && (window.location.href = LOGINHREF);
    }
};