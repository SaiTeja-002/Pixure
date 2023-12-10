import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useLocation } from 'react-router-dom';
import { HOMEHREF } from '../constants';
import ImageComponent from '../components/ImageComponent'

const PostLayout = ({ feed }) => {
    const location = useLocation();
    const path = location.pathname;
    const design = path == HOMEHREF ? { height: "85vh", padding: "20px" } : { paddingTop: '40px' }
    const avatarUrl = 'https://wallpapercave.com/wp/wp4308980.jpg';
    const username = 'Levi Chan';
    const [showUser, setShowUser] = useState(Array(feed.length).fill(false));

    return (
        <div style={design}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry>
                    {feed.map((post, i) => (
                        <ImageComponent
                            key={i}
                            src={post.image}
                            title="Hello"
                            showUser={showUser[i]}
                            setShowUser={(value) => {
                                const updatedShowUser = [...showUser];
                                updatedShowUser[i] = value;
                                setShowUser(updatedShowUser);
                            }}
                            avatarUrl={avatarUrl}
                            username={username}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default PostLayout;