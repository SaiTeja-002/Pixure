import React, { useEffect } from 'react';
import PostLayout from '../components/PostLayout';
import '../styles/VisitProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../actions/userAction.js';

const VisitProfile = ({name}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UserActions.fetchProfile(name));
    }, [dispatch])

    let profile = useSelector((state) => state.profile);

    return (
        <div>
            <div style={{ height: "100vh", padding: "15px" }}>
                <div className="profile-container">
                    <img src={profile.photo} alt="Profile Picture" className="profile-image" />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2>{profile.name}</h2>
                    <h3>{profile.bio}</h3>

                    <button className="button">
                        Follow
                    </button>
                </div>
                <PostLayout feed={profile.posts.map(post => ({
                    ...post,
                    owner: profile.name,
                    photo: profile.photo,
                }))} />
            </div>
        </div>
    );
};

export default VisitProfile;
