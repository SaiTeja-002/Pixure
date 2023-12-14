import React, { useRef, useState, useEffect } from 'react';
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import * as userActions from '../actions/userAction';

function UserCard({ user, showDeleteButton }) {
    const userTileStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        marginBottom: '10px',
        width: '50vw',
        margin: '2vh auto',
        position: 'relative',
    };

    const avatarStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
    };

    const userDetailsStyle = {
        margin: '0',
    };

    const userBioStyle = {
        marginLeft: '20px',
        marginRight: '30px',
        fontStyle: 'italic'
    }

    const deleteButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: 'red',
        borderRadius: '30%',
        padding: '5px',
        fontSize: '20px',
        backgroundColor: 'transparent',
    };

    const dispatch = useDispatch();
    const bioLength = 60;

    // const userTileRef = useRef(null);
    // const [bioLength, setBioLength] = useState(20); // Default bio length

    // useEffect(() => {
    //     function handleResize() {
    //         if (userTileRef.current) {
    //             const tileWidth = userTileRef.current.offsetWidth;
    //             if (tileWidth < 300) {
    //                 setBioLength(10);
    //             } else if (tileWidth < 400) {
    //                 setBioLength(15);
    //             } else {
    //                 setBioLength(20);
    //             }
    //         }
    //     }

    //     window.addEventListener('resize', handleResize);

    //     // Initial calculation on component mount
    //     handleResize();

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [userTileRef]);

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
