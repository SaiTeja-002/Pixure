import { combineReducers } from "redux";
import feed from './feed.js';
import user from './feed.js';
import post from './content.js';
import social from './social.js';
import profile from './profile.js';

export default combineReducers({
    feed, user, post, social, profile
});