import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../styles/ProfilePage.css';

import PostLayout from '../components/PostLayout';
import AddPost from '../components/AddPost';
import ProfileInfo from '../components/ProfileInfo';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../actions/userAction';
import UserCard from '../components/UserCard';
import users from '../data/UserData';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    dispatch(userActions.fetchPosts());
  }, [dispatch])

  let posts = useSelector((state) => state.posts);
  let userInfo = useSelector((state) => state.user);
  const feedWithOwnerAndPhoto = posts.map(post => {
    return {
      ...post,
      owner: userInfo.name,
      photo: userInfo.photo
    };
  });

  return (
    <div><Header />
      <div className="profile-page-container">
        <div className="profile-details">
          <ProfileInfo />
          <AddPost />
        </div>


        <div className="tabs-container">
          <Tabs
            variant="fullWidth"
            value={tabValue}
            onChange={(event, val) => {
              setTabValue(val);
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#008000',
              },
            }}
          >
            <Tab label="posts" />
            <Tab label="followers" />
            <Tab label="following" />
          </Tabs>
        </div>

        <div className="tab-content">
          {tabValue === 0 && (
            <PostLayout feed={feedWithOwnerAndPhoto} />
          )}

          {tabValue === 1 && <div>
            {users.map((user, index) => (
              <UserCard key={index} user={user} showDeleteButton={false} />
            ))}
          </div>}

          {tabValue === 2 && <div>
            {users.map((user, index) => (
              <UserCard key={index} user={user} showDeleteButton={true} />
            ))}
          </div>}
        </div>
      </div></div>
  );
};

export default ProfilePage;
