
import React, { useState } from 'react';
import images from '../data/ImageData';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { alignProperty } from '@mui/material/styles/cssUtils';
import '../styles/ProfilePage2.css'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const ProfilePage2 = () => {
    const profileImageUrl = 'https://wallpapercave.com/wp/wp4308980.jpg';

    return (
        <div>
            <div style={{ height: "100vh", padding: "15px" }}>
                <div className="profile-container">
                    <img src={profileImageUrl} alt="Profile Picture" className="profile-image" />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2>Levi Chan</h2>
                    <h3>We can't always carry our fallen comrades home, but we carry their memory.</h3>

                    <button className="button">
                        Follow
                    </button>
                </div>

                <div style={{ paddingTop: '40px' }}>
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

export default ProfilePage2;
