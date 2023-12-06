import { FETCH_SOCIAL, FOLLOW, UNFOLLOW } from "../constants";

export default (state = { social: {} }, action) => {
    switch (action.type) {
        case FETCH_SOCIAL:
            return {
                ...state,
                social: action.payload
            };

        case FOLLOW:
            return {
                ...state,
                social: {
                    ...state.social,
                    following: [...state.social.following, action.payload]
                }
            };

        case UNFOLLOW:
            const updatedFollowing = state.social.following.filter(item => item !== action.payload);
            return {
                ...state,
                social: {
                    ...state.social,
                    following: updatedFollowing
                }
            };

        default:
            return state;
    }
}