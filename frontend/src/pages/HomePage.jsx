import React, { useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import * as postActions from '../actions/postAction.js';
import { TextField } from '@mui/material'
import { LOGINHREF } from '../constants.js';

import images from '../data/ImageData'

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
    ];

    const styles = `
    .search-bar {
      padding: 20px;
      text-align: center;
    }

    .hashtags {
      overflow-x: auto;
      white-space: nowrap;
      padding: 10px;
    }

    .hashtag {
      display: inline-block;
      padding: 5px 10px;
      margin: 0 5px;
      font-size: 14px;
    }

    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;
      padding: 20px;
    }

    .grid-item {
      width: 100%;
      height: auto;
      max-width: 100%;
      border-radius: 8px;
    }
  `;

    useEffect(() => {
        async function updateFeed() {
            await postActions.getFeed();
        }

        updateFeed()
    }, []);

    return (
        <div>
            <style>{styles}</style>

            {/* <div className="search-bar">
                <TextField
                    fullWidth
                    label='Search'
                    variant='filled'

                    InputProps={{
                        style: {
                            borderRadius: "50px"
                        }
                    }}
                />
            </div> */}


            <div className="hashtags">
                <div className="hashtag-scroll">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">
                            #{tag}
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
