import { FETCH_PROFILE } from "../constants";

export default (profile = { name: "", bio: "", photo: "", posts: [],followerCount : 0,followingCount : 0 }, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            return action.payload;

        default:
            return profile;
    }
}