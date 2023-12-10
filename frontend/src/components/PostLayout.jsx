import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const PostLayout = ({ feed }) => {
    return (
        <div style={{ height: "85vh", padding: "20px" }}>
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