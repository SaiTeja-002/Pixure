import { combineReducers } from "redux";
import feed from './feed.js';
import user from './metadata.js';
import posts from './content.js';
import social from './social.js';
import profile from './profile.js';

export default combineReducers({
    feed, user, posts, social, profile
});