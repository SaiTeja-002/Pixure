import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useLocation } from 'react-router-dom';
import { HOMEHREF } from '../constants';

const PostLayout = ({ feed }) => {
    const location = useLocation();
    const path = location.pathname;
    const design = path == HOMEHREF ? { height: "85vh", padding: "20px" } : { paddingTop: '40px' }

    return (
        <div style={design}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {feed.map((post, i) => (
                        <div key={i} style={{ margin: "10px 10px" }}>
                            <img
                                src={post.image}
                                style={{
                                    width: "100%",
                                    display: "block",
                                }}
                                alt={post.title}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default PostLayout;