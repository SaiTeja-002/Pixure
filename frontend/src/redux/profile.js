import { FETCH_PROFILE,FOLLOW_REQUEST } from "../constants";

export default (profile = { name: "", bio: "", photo: "", posts: [],followerCount : 0,followingCount : 0, isFollowing : true }, action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            return action.payload;

        case FOLLOW_REQUEST:
            return {...profile,isFollowing : true};


        default:
            return profile;
    }
}