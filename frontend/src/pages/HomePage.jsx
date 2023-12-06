import React, { useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import * as postActions from '../actions/postAction.js';
import { TextField, Chip } from '@mui/material'
import { LOGINHREF } from '../constants.js';

import images from '../data/ImageData'
import '../styles/Home.css'

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const HomePage = () => {
    const hashtags = [
        'Travel',
        'Food',
        'Nature',
        'Photography',
        'Fitness',
        'Art',
        'Fashion',
        'Technology',
        'Music',
        'Sports',
        'Pravel',
        'Pood',
        'Pature',
        'Photography',
        'Pitness',
        'Prt',
        'Pashion',
        'Pechnology',
        'Pusic',
        'Pports',
    ];

    const [selectedTag, setSelectedTag] = React.useState(null);

    useEffect(() => {
        async function updateFeed() {
            await postActions.getFeed();
        }

        updateFeed()
    }, []);

    return (
        <div>
            <div className="hashtags">
                <div className="hashtag-scroll">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">
                            {/* #{tag} */}
                            <Chip
                                label={tag}
                                clickable
                                color={selectedTag === tag ? 'primary' : 'default'}
                                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                            />
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ height: "85vh", padding: "20px" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                // gutter="20px"
                >
                    <Masonry>
                        {images.map((image, i) => (
                            <div key={i} style={{ margin: "10px 10px" }}>
                                <img
                                    src={image}
                                    style={{
                                        width: "100%",
                                        display: "block",
                                        // borderRadius: "8px",
                                        // padding: "10px",
                                        // margin: "5px 5px 5px 5px",
                                        // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    }}
                                    alt="img"
                                />
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
};

export default HomePage;
