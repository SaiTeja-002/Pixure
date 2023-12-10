import React, { useEffect,useRef } from 'react';
import TagBar from '../components/TagBar.jsx';
import Header from '../components/Header.jsx';
import '../styles/Home.css';

import * as postActions from '../actions/postAction.js';
import * as tagsActions from '../actions/tagsAction.js';
import { useDispatch, useSelector } from 'react-redux';
import PostLayout from '../components/PostLayout.jsx';

const HomePage = () => {
    const searchActive = useRef(false);

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
        searchActive.current = true;
        if(type == "person" && data != ""){
            //Profile Search Left
            console.log(`person search : ${data}`);
        }
        else if (type == "title" && data != ""){
            dispatch(postActions.searchPost(data));
        }
        else if (type == "random"){
            dispatch(postActions.getFeed());
            searchActive.current = false;
        }
    }

    //Fetch The Updated Feed From The State
    let feed = useSelector((state) => state.feed);

    return (
        <div>
            <Header onSearchSubmit={handleSearchChange}/>
            <TagBar onTagChange={handleTagChange} searchActive={searchActive.current}/>
            <PostLayout feed={feed}/>
        </div>
    );
};

export default HomePage;
