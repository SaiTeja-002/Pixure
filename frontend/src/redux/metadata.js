import {UPDATE_METADATA} from '../constants.js' ;

export default (state = { metadata: {} }, action) => {
    switch (action.type) {
        case UPDATE_METADATA:
            return {
                ...state,
                metadata: { ...state, ...action.payload }
            };
        default:
            return state;
    }
}