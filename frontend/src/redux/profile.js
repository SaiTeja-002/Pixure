import { FETCH_PROFILE } from "../constants";

export default (state = { profile: {} }, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            return {
                ...state,
                profile: action.payload
            };

        default:
            return state;
    }
}