import React, { useEffect,useRef, useState } from 'react';
import TagBar from '../components/TagBar.jsx';
import Header from '../components/Header.jsx';
import '../styles/Home.css';

import * as postActions from '../actions/postAction.js';
import * as tagsActions from '../actions/tagsAction.js';
import { useDispatch, useSelector } from 'react-redux';
import PostLayout from '../components/PostLayout.jsx';
import VisitProfile from './VisitProfile.jsx';

const HomePage = () => {
    const searchActive = useRef(false);
    const [profileName,setProfilName]  = useState(null); 

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postActions.getFeed())
    }, [dispatch]);

    //Handles Feed When A Hastag is Selected
    const handleTagChange = (selectedTag) => {
        if (selectedTag != null) {
            dispatch(tagsActions.searchByTag(selectedTag));
        }
        else {
            dispatch(postActions.getFeed());
        }
    };

    //Handles Feed When A Search is Selected
    const handleSearchChange = (type,data) => {
        if(type == "person" && data != ""){
            setProfilName(data);
            searchActive.current = true;
        }
        else if (type == "title" && data != ""){
            dispatch(postActions.searchPost(data));
            searchActive.current = true;
        }
        else if (type == "random"){
            dispatch(postActions.getFeed());
            searchActive.current = false;
            setProfilName(null);
        }
    }

    //Fetch The Updated Feed From The State
    let feed = useSelector((state) => state.feed);

    return (
        <div>
            <Header onSearchSubmit={handleSearchChange}/>
            <TagBar onTagChange={handleTagChange} searchActive={searchActive.current}/>
            {profileName == null ? <PostLayout feed={feed}/> : <VisitProfile name={profileName} />}
        </div>
    );
};

export default HomePage;
