import React, { useState } from 'react';
import { Chip } from '@mui/material';
import '../styles/Home.css';

const TagBar = ({ onTagChange, searchActive}) => {
    const [selectedTag, setSelectedTag] = useState(null);

    const handleChipClick = (tag) => {
        if(!searchActive){
            setSelectedTag(tag === selectedTag ? null : tag);
        }

        if (onTagChange) {
            onTagChange(tag === selectedTag ? null : tag);
        }
    };

    const hashtags = [
        'Travel', 'Food', 'Nature', 'Photography', 'Fitness', 'Anime',
        'Art', 'Fashion', 'Technology', 'Music', 'Sports',
        'Adventure', 'Health', 'Science', 'Books', 'Gaming', 'Mindfulness', 'Creativity'
    ];

    if(searchActive && selectedTag){
        setSelectedTag(null);
    }

    return (
        <div className="hashtags">
            <div className="hashtag-scroll">
                {hashtags.map((tag, index) => (
                    <span key={index} className="hashtag">
                        <Chip
                            label={tag}
                            clickable
                            color={selectedTag === tag && !searchActive ? 'primary' : 'default'}
                            onClick={() => handleChipClick(tag)}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagBar;
