import React, { useState } from 'react';

const UpdateProfilePage = () => {
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);
    const [editingUsername, setEditingUsername] = useState(false);
    const [editingBio, setEditingBio] = useState(false);

    const followers = [
        'Follower 1',
        'Follower 2',
        'Follower 3',
        'Follower 4',
    ];

    const following = [
        'Following 1',
        'Following 2',
        'Following 3',
        'Following 4',
    ];

    const profileImageUrl =
        'https://images.unsplash.com/photo-1701308450512-d3a2aeeff787?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D';
    let initialUserName = 'John Doe';
    let initialUserBio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    const [userName, setUserName] = useState(initialUserName);
    const [userBio, setUserBio] = useState(initialUserBio);

    const toggleFollowers = () => {
        setShowFollowers(!showFollowers);
        setShowFollowing(false);
    };

    const toggleFollowing = () => {
        setShowFollowing(!showFollowing);
        setShowFollowers(false);
    };

    const handleEditUsername = () => {
        setEditingUsername(!editingUsername);
    };

    const handleEditBio = () => {
        setEditingBio(!editingBio);
    };

    const handleSaveUsername = () => {
        initialUserName = userName;
        setEditingUsername(false);
    };

    const handleSaveBio = () => {
        initialUserBio = userBio;
        setEditingBio(false);
    };

    const styles = `
    .profile-container {
        display: flex;
        justify-content: space-between;
      }
  
      .left-column {
        flex: 1;
        padding: 20px;
        border-right: 1px solid #ccc;
      }
  
      .dropdown {
        margin-bottom: 20px;
      }
  
      .right-column {
        flex: 2;
        padding: 20px;
      }
  
      .user-profile {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
  
      .user-profile img {
        border-radius: 50%;
        margin-right: 20px;
        width: 80px; /* Adjust image width */
        height: 80px; /* Adjust image height */
      }

    .dropdown-toggle {
      cursor: pointer;
      display: inline-block;
      margin-right: 10px;
    }

    .followers-list,
    .following-list {
      display: ${showFollowers || showFollowing ? 'block' : 'none'};
      position: absolute;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 10px;
      z-index: 1;
    }
  `;

    return (
        <div>
            <style>{styles}</style>

            <div className="profile-container">
                <div className="left-column">
                    <div>
                        <span className="dropdown-toggle" onClick={toggleFollowers}>
                            Followers
                        </span>
                        <span className="followers-list">
                            {showFollowers &&
                                followers.map((follower, index) => (
                                    <div key={index}>{follower}</div>
                                ))}
                        </span>
                    </div>
                    <div>
                        <span className="dropdown-toggle" onClick={toggleFollowing}>
                            Following
                        </span>
                        <span className="following-list">
                            {showFollowing &&
                                following.map((followed, index) => (
                                    <div key={index}>{followed}</div>
                                ))}
                        </span>
                    </div>
                </div>

                <div className="right-column">
                    <div className="user-profile">
                        <div>
                            <img src={profileImageUrl} alt="Profile" />
                            <h2>
                                {editingUsername ? (
                                    <>
                                        <input
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                        <button onClick={handleSaveUsername}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        {userName}
                                        <button onClick={handleEditUsername}>Edit</button>
                                    </>
                                )}
                            </h2>
                            <p>
                                {editingBio ? (
                                    <>
                                        <textarea
                                            value={userBio}
                                            onChange={(e) => setUserBio(e.target.value)}
                                        />
                                        <button onClick={handleSaveBio}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        {userBio}
                                        <button onClick={handleEditBio}>Edit</button>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
