import React, { useState, useEffect } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Edit as EditIcon, PersonRounded as PersonIcon } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import '../styles/ProfilePage.css';

import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../actions/userAction';

const ProfileInfo = () => {
    const dispatch = useDispatch();
    const userMetaData = useSelector((state) => state.user);

    // Component States
    const [editUsername, setEditUsername] = useState(false);
    const [editBio, setEditBio] = useState(false);
    const [username, setUsername] = useState(userMetaData.name);
    const [bio, setBio] = useState(userMetaData.bio);
    const [profileImageUrl, setProfileImageUrl] = useState(userMetaData.photo);

    useEffect(() => {
      // Synchronize local state with Redux state after fetch operation is complete
      setUsername(userMetaData.name);
      setBio(userMetaData.bio);
      setProfileImageUrl(userMetaData.photo);
    }, [userMetaData]);

    useEffect(() => {
      // Fetch user info on component mount
      dispatch(userActions.fetchInfo());
    }, [dispatch]);

    const handleUsernameEdit = () => {
      setEditUsername(!editUsername);
    };

    const handleBioEdit = () => {
      setEditBio(!editBio);
    };

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
      dispatch(userActions.updateInfo({ fields: ['name'], values: [event.target.value] }));
    };

    const handleBioChange = (event) => {
      setBio(event.target.value);
      dispatch(userActions.updateInfo({ fields: ['bio'], values: [event.target.value] }));
    };

    const handleProfilePicChange = (event) => {
      const file = event.target.files[0];
      setProfileImageUrl(file ? file.name : null);
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              const base64 = reader.result;
              dispatch(userActions.updateInfo({ fields: ['photo'], values: [reader.result] }));
          };
          reader.readAsDataURL(file);
      }
    };

    return (
      <div className="profile-info">
        <div className="profile-image-container">
          <input
            type="file"
            id="profile-pic-upload"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="profile-pic-upload">
            {profileImageUrl ? (
              <img src={profileImageUrl} alt="Profile Picture" className="profile-image" />
            ) : (
              <PersonIcon fontSize="large" className="profile-image" />
            )}
          </label>
        </div>

        <div className="profile-text">
          <div className="text-with-icon">
            {editUsername ? (
              <>
                <TextField value={username} onChange={handleUsernameChange} fullWidth variant="outlined" autoFocus />
                <IconButton onClick={handleUsernameEdit}>
                  <DoneIcon />
                </IconButton>
              </>
            ) : (
              <>
                {username}
                <IconButton onClick={handleUsernameEdit} className="edit-icon">
                  <EditIcon />
                </IconButton>
              </>
            )}
          </div>
          <div className="text-with-icon">
            {editBio ? (
              <>
                <TextField value={bio} onChange={handleBioChange} fullWidth multiline rows={4} variant="outlined" />
                <IconButton onClick={handleBioEdit}>
                  <DoneIcon />
                </IconButton>
              </>
            ) : (
              <>
                {bio}
                <IconButton onClick={handleBioEdit} className="edit-icon">
                  <EditIcon />
                </IconButton>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default ProfileInfo;
