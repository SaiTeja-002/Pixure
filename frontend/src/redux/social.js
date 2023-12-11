import { FETCH_SOCIAL, FOLLOW, UNFOLLOW } from "../constants";

export default (social = { following: [], followers: [] }, action) => {
    switch (action.type) {
        case FETCH_SOCIAL:
            return action.payload;

        case FOLLOW:
            return {
                ...social,
                following: [...social.following, action.payload]
            };

        case UNFOLLOW:
            const updatedFollowing = social.following.filter(item => item !== action.payload);
            return {
                ...social,
                following: updatedFollowing
            };

        default:
            return social;
    }
}