import React, { useEffect, useState } from 'react';
import PostLayout from '../components/PostLayout';
import '../styles/VisitProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../actions/userAction.js';
import { FOLLOW } from '../constants.js';

const VisitProfile = ({ name }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.fetchProfile(name));
    }, [dispatch])

    let profile = useSelector((state) => state.profile);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(profile.posts.map(post => {
            return {
                ...post,
                owner: profile.name,
                photo: profile.photo
            };
        }).reverse());
    }, [profile]);


    const followUser = () => {
        dispatch(userActions.followUser(name));
    }

    return (
        <div>
            <div style={{ height: "100vh", padding: "15px" }}>
                <div className="profile-container">
                    <div className="left-column">
                        <div className="profile-info">
                            <img src={profile.photo} alt="Profile Picture" className="profile-image" />
                            <h2>{profile.name}</h2>
                            <h3>{profile.bio}</h3>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="counts-section">
                            <div className="count-group">
                                <div className="count-item">
                                    <p>{posts.length}</p>
                                    <h3>Posts</h3>
                                </div>
                                <div className="count-item">
                                    <p>{profile.followerCount}</p>
                                    <h3>Followers</h3>
                                </div>
                                <div className="count-item">
                                    <p>{profile.followingCount}</p>
                                    <h3>Following</h3>
                                </div>
                            </div>
                            {profile.isFollowing ? (
                                <button className="unfollow-button">Following</button>
                            ) : (
                                <button className="button" onClick={followUser}>Follow</button>
                            )}
                        </div>
                    </div>
                </div>

                <PostLayout feed={posts} />

            </div>
        </div>
    );
};

export default VisitProfile;


{/* <div className="image-gallery">
<ResponsiveMasonry
    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
>
    <Masonry>
        {profile.posts.map((image, i) => (
            <div key={i} style={{ margin: "10px 10px" }}>
                <img
                    src={image}
                    style={{
                        width: "100%",
                        display: "block",
                    }}
                    alt="img"
                />
            </div>
        ))}
    </Masonry>
</ResponsiveMasonry>
</div> */}
