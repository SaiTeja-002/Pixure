// import React, { useState } from 'react';

// const UpdateProfilePage = () => {
//     const [showFollowers, setShowFollowers] = useState(false);
//     const [showFollowing, setShowFollowing] = useState(false);
//     const [editingUsername, setEditingUsername] = useState(false);
//     const [editingBio, setEditingBio] = useState(false);

//     const followers = [
//         'Follower 1',
//         'Follower 2',
//         'Follower 3',
//         'Follower 4',
//     ];

//     const following = [
//         'Following 1',
//         'Following 2',
//         'Following 3',
//         'Following 4',
//     ];

//     const profileImageUrl =
//         'https://images.unsplash.com/photo-1701308450512-d3a2aeeff787?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D';
//     let initialUserName = 'John Doe';
//     let initialUserBio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

//     const [userName, setUserName] = useState(initialUserName);
//     const [userBio, setUserBio] = useState(initialUserBio);

//     const toggleFollowers = () => {
//         setShowFollowers(!showFollowers);
//         setShowFollowing(false);
//     };

//     const toggleFollowing = () => {
//         setShowFollowing(!showFollowing);
//         setShowFollowers(false);
//     };

//     const handleEditUsername = () => {
//         setEditingUsername(!editingUsername);
//     };

//     const handleEditBio = () => {
//         setEditingBio(!editingBio);
//     };

//     const handleSaveUsername = () => {
//         initialUserName = userName;
//         setEditingUsername(false);
//     };

//     const handleSaveBio = () => {
//         initialUserBio = userBio;
//         setEditingBio(false);
//     };

//     const styles = `
//     .profile-container {
//         display: flex;
//         justify-content: space-between;
//       }

//       .left-column {
//         flex: 1;
//         padding: 20px;
//         border-right: 1px solid #ccc;
//       }

//       .dropdown {
//         margin-bottom: 20px;
//       }

//       .right-column {
//         flex: 2;
//         padding: 20px;
//       }

//       .user-profile {
//         display: flex;
//         align-items: center;
//         margin-bottom: 20px;
//       }

//       .user-profile img {
//         border-radius: 50%;
//         margin-right: 20px;
//         width: 80px; /* Adjust image width */
//         height: 80px; /* Adjust image height */
//       }

//     .dropdown-toggle {
//       cursor: pointer;
//       display: inline-block;
//       margin-right: 10px;
//     }

//     .followers-list,
//     .following-list {
//       display: ${showFollowers || showFollowing ? 'block' : 'none'};
//       position: absolute;
//       background-color: #fff;
//       border: 1px solid #ccc;
//       padding: 10px;
//       z-index: 1;
//     }
//   `;

//     return (
//         <div>
//             <style>{styles}</style>

//             <div className="profile-container">
//                 <div className="left-column">
//                     <div>
//                         <span className="dropdown-toggle" onClick={toggleFollowers}>
//                             Followers
//                         </span>
//                         <span className="followers-list">
//                             {showFollowers &&
//                                 followers.map((follower, index) => (
//                                     <div key={index}>{follower}</div>
//                                 ))}
//                         </span>
//                     </div>
//                     <div>
//                         <span className="dropdown-toggle" onClick={toggleFollowing}>
//                             Following
//                         </span>
//                         <span className="following-list">
//                             {showFollowing &&
//                                 following.map((followed, index) => (
//                                     <div key={index}>{followed}</div>
//                                 ))}
//                         </span>
//                     </div>
//                 </div>

//                 <div className="right-column">
//                     <div className="user-profile">
//                         <div>
//                             <img src={profileImageUrl} alt="Profile" />
//                             <h2>
//                                 {editingUsername ? (
//                                     <>
//                                         <input
//                                             type="text"
//                                             value={userName}
//                                             onChange={(e) => setUserName(e.target.value)}
//                                         />
//                                         <button onClick={handleSaveUsername}>Save</button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         {userName}
//                                         <button onClick={handleEditUsername}>Edit</button>
//                                     </>
//                                 )}
//                             </h2>
//                             <p>
//                                 {editingBio ? (
//                                     <>
//                                         <textarea
//                                             value={userBio}
//                                             onChange={(e) => setUserBio(e.target.value)}
//                                         />
//                                         <button onClick={handleSaveBio}>Save</button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         {userBio}
//                                         <button onClick={handleEditBio}>Edit</button>
//                                     </>
//                                 )}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateProfilePage;


// import React from 'react';
// import images from '../data/ImageData';

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// const ProfilePage = () => {
//   const profileImageUrl = 'https://via.placeholder.com/300';

//   const styles = `
//     .profile-container {
//       text-align: center;
//       padding: 20px;
//     }

//     .profile-image {
//       width: 150px;
//       height: 150px;
//       border-radius: 50%;
//       margin-bottom: 20px;
//     }

//     .image-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//       gap: 10px;
//       padding: 20px;
//     }

//     .grid-item {
//       width: 100%;
//       height: auto;
//       max-width: 100%;
//       border-radius: 8px;
//     }
//   `;

//   return (
//     <div>
//       <style>{styles}</style>

//       <div className="profile-container">
//         <img src={profileImageUrl} alt="Profile" className="profile-image" />

//         <div style={{ height: "85vh", overflowY: "scroll", padding: "20px" }}>
//           <ResponsiveMasonry
//             columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
//           // gutter="20px"
//           >
//             <Masonry>
//               {images.map((image, i) => (
//                 <div key={i} style={{ margin: "10px 10px" }}>
//                   <img
//                     src={image}
//                     style={{
//                       width: "100%",
//                       display: "block",
//                       // borderRadius: "8px",
//                       // padding: "10px",
//                       // margin: "5px 5px 5px 5px",
//                       // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                     }}
//                     alt="img"
//                   />
//                 </div>
//               ))}
//             </Masonry>
//           </ResponsiveMasonry>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState } from 'react';
import images from '../data/ImageData';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { alignProperty } from '@mui/material/styles/cssUtils';
import '../styles/UpdateProfile.css'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TextField } from '@mui/material'

const ProfilePage = () => {
    const profileImageUrl = 'https://wallpapercave.com/wp/wp4308980.jpg';

    const [tabValue, setTabValue] = useState(0);

    return (
        <div>
            <div style={{ height: "100vh", padding: "15px" }}>
                <div className="profile-container">
                    <img src={profileImageUrl} alt="Profile Picture" className="profile-image" />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '50px' }}>

                    <div style={{marginBottom: '50px' }}>
                        <TextField
                            defaultValue="LeviChan"
                            label="Username"
                            InputProps={{
                                style: {
                                    borderRadius: "10px"
                                }
                            }} />
                    </div>
                    <div style={{ margin: '0px 50vh' }}>
                        <TextField
                            defaultValue="We can't always carry our fallen comrades home, but we carry their memory."
                            // multiline
                            fullWidth
                            label="Bio"
                            multiline
                            InputProps={{
                                style: {
                                    borderRadius: "10px"
                                }
                            }} />
                    </div>
                    {/* <h2>Levi Chan</h2>
          <h3>We can't always carry our fallen comrades home, but we carry their memory.</h3> */}

                </div>

                {/* Tabs here */}

                <Tabs
                    variant="fullWidth"
                    value={tabValue}
                    onChange={(event, val) => { setTabValue(val) }}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#008000"
                        }
                    }}
                    style={{ margin: '0px 50vh' }}>
                    <Tab label="Followers" />
                    <Tab label="Following" />
                </Tabs>

                {tabValue === 0 && (
                    <div>
                        followers
                    </div>
                )}

                {tabValue === 1 && (
                    <div>
                        following
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
