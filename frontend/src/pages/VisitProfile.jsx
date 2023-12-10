import React, { useEffect } from 'react';
import PostLayout from '../components/PostLayout';
import images from '../data/ImageData';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import '../styles/VisitProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../actions/userAction.js';

const VisitProfile = ({ name, isFollowing }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UserActions.fetchProfile(name));
    }, [dispatch])

    let profile = useSelector((state) => state.profile);

    // return (
    //     <div>
    //         <div style={{ height: "100vh", padding: "15px" }}>
    //             <div className="profile-container">
    //                 <img src={profile.photo} alt="Profile Picture" className="profile-image" />
    //             </div>

    //             <div style={{ textAlign: 'center', marginBottom: '50px' }}>
    //                 <h2>{profile.name}</h2>
    //                 <h3>{profile.bio}</h3>

    //                 <button className="button">
    //                     Follow
    //                 </button>
    //             </div>
    //             <PostLayout feed={profile.posts.map(post => ({
    //                 ...post,
    //                 owner: profile.name,
    //                 photo: profile.photo,
    //             }))} />
    //         </div>
    //     </div>
    // );

    const profileImageUrl = 'https://wallpapercave.com/wp/wp4308980.jpg';

    return (
        <div>
            <div style={{ height: "100vh", padding: "15px" }}>
                <div className="profile-container">
                    <div className="left-column">
                        <div className="profile-info">
                            <img src={profileImageUrl} alt="Profile Picture" className="profile-image" />
                            <h2>Levi Chan</h2>
                            <h3>We can't always carry our fallen comrades home, but we carry their memory.</h3>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="counts-section">
                            <div className="count-group">
                                <div className="count-item">
                                    <p>50</p>
                                    <h3>Posts</h3>
                                </div>
                                <div className="count-item">
                                    <p>509</p>
                                    <h3>Followers</h3>
                                </div>
                                <div className="count-item">
                                    <p>615</p>
                                    <h3>Following</h3>
                                </div>
                            </div>
                            {isFollowing ? (
                                <button className="unfollow-button">Unfollow</button>
                            ) : (
                                <button className="button">Follow</button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="image-gallery">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry>
                            {images.map((image, i) => (
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
                </div>
            </div>
        </div>
    );
};

export default VisitProfile;
