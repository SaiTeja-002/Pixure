import React, { useEffect, useRef, useState } from 'react';
import TagBar from '../components/TagBar.jsx';
import Header from '../components/Header.jsx';
import '../styles/Home.css';

import * as postActions from '../actions/postAction.js';
import * as tagsActions from '../actions/tagsAction.js';
import { useDispatch, useSelector } from 'react-redux';
import PostLayout from '../components/PostLayout.jsx';
import VisitProfile from './VisitProfile.jsx';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const searchActive = useRef(false);
    const [profileName, setProfilName] = useState(null);

    let name;
    const location = useLocation();
    if (location.state) {
        name = location.state.name;
        window.history.replaceState({}, document.title);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        if (name) {
            setProfilName(name);
        }
        else {
            dispatch(postActions.getFeed());
        }
    }, [dispatch]);

    //Handles Feed When A Hastag is Selected
    const handleTagChange = (selectedTag) => {
        if (selectedTag != null) {
            dispatch(tagsActions.searchByTag(selectedTag));
            console.log('tag clicked');
        }
        else {
            dispatch(postActions.getFeed());
            console.log('random feed')
        }
    };

    //Handles Feed When A Search is Selected
    const handleSearchChange = (type, data) => {
        if (type == "person" && data != "") {
            setProfilName(data);
            searchActive.current = true;
        }
        else if (type == "title" && data != "") {
            dispatch(postActions.searchPost(data));
            searchActive.current = true;
        }
        else if (type == "random") {
            dispatch(postActions.getFeed());
            searchActive.current = false;
            setProfilName(null);
        }
    }

    //Fetch The Updated Feed From The State
    let feed = useSelector((state) => state.feed);

    return (
        <div>
            <Header onSearchSubmit={handleSearchChange} searchBarText = {name}/>
            <TagBar onTagChange={handleTagChange} searchActive={searchActive.current} />
            {profileName == null ? <PostLayout feed={feed} /> : <VisitProfile name={profileName} />}
        </div>
    );
};

export default HomePage;
