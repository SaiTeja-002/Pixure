import {UPDATE_FEED} from '../constants.js' ;

export default (feed = [], action) => {
    switch (action.type) {
        case UPDATE_FEED :
            return action.payload;

        default:
            return feed;
    }
}