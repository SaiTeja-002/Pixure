import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useDispatch } from 'react-redux';
import * as userActions from '../actions/userAction';
import { userTileStyle, avatarStyle, userDetailsStyle, userBioStyle, deleteButtonStyle } from '../styles/UserCardStyles';
import { Link } from 'react-router-dom';
import { HOMEHREF } from '../constants';

function UserCard({ user, showDeleteButton }) {
    const dispatch = useDispatch();
    const bioLength = 60;

    const truncatedBio = user.bio.length > bioLength ? user.bio.slice(0, bioLength) + '...' : user.bio;
    return (
        <Link to={HOMEHREF} state={{name : user.name}} style={{ textDecoration: 'none', color: 'inherit' }} >
            <div style={userTileStyle} >
                <div style={avatarStyle}>
                    {user.photo !== ''
                        ? (<img src={user.photo} alt="User Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />)
                        : (<PersonRoundedIcon style={{ width: '100%', height: '100%', borderRadius: '50%' }} />)
                    }
                </div>
                <div style={userDetailsStyle}>
                    <h3>{user.name}</h3>
                </div>
                <div style={userBioStyle}>
                    {truncatedBio}
                </div>
                {showDeleteButton && (
                    <div style={deleteButtonStyle}>
                        <ImCross onClick={() => dispatch(userActions.unfollowUser(user.name))} data-testid="delete-button" />
                    </div>
                )}
            </div>
        </Link>
    );
}

export default UserCard;
