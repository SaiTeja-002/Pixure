import {UPDATE_FEED} from '../constants.js' ;

export default (state = { feed: [] }, action) => {
    switch (action.type) {
        case UPDATE_FEED :
            return {
                ...state,
                feed: action.payload
            };

        default:
            return state;
    }
}