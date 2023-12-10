// import React from 'react';
// import { RiDeleteBinLine } from 'react-icons/ri';
// import '../styles/UserCard.css'; // Import the CSS file for styling

// function UserCard({ user, showDeleteButton }) {
//     return (
//         <div className="user-tile">
//             <div className="avatar">
//                 <img src={user.avatar} alt="User Avatar" className="avatar-img" />
//             </div>
//             <div className="user-details">
//                 <h3>{user.name}</h3>
//             </div>
//             {showDeleteButton && (
//                 <div className="delete-button">
//                     <RiDeleteBinLine />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UserCard;


import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

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

    const deleteButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        right: '5px',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: 'red',
        borderRadius: '30%',
        padding: '5px',
        fontSize: '20px',
        backgroundColor: 'transparent',
    };

    return (
        <div style={userTileStyle}>
            <div style={avatarStyle}>
                <img src={user.avatar} alt="User Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
            <div style={userDetailsStyle}>
                <h3>{user.name}</h3>
            </div>
            {showDeleteButton && (
                <div style={deleteButtonStyle}>
                    <RiDeleteBinLine />
                </div>
            )}
        </div>
    );
}

export default UserCard;