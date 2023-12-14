import React from 'react';
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import * as userActions from '../actions/userAction';
import { userTileStyle, avatarStyle, userDetailsStyle, userBioStyle, deleteButtonStyle } from '../styles/UserCardStyles';

function UserCard({ user, showDeleteButton }) {
    const dispatch = useDispatch();
    const bioLength = 60;

    const truncatedBio = user.bio.length > bioLength ? user.bio.slice(0, bioLength) + '...' : user.bio;

    return (
        <div style={userTileStyle}>
            <div style={avatarStyle}>
                <img src={user.photo} alt="User Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
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
    );
}

export default UserCard;
