// import React, { useState } from 'react';
// import images from '../data/ImageData';
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import { alignProperty } from '@mui/material/styles/cssUtils';
// import '../styles/ProfilePage.css'

// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// const ProfilePage = () => {
//   const profileImageUrl = 'https://wallpapercave.com/wp/wp4308980.jpg';

//   const [tabValue, setTabValue] = useState(0);

//   return (
//     <div>
//       <div style={{ height: "100vh", padding: "15px" }}>
//         <div className="profile-container">
//           <img src={profileImageUrl} alt="Profile Picture" className="profile-image" />
//         </div>

//         <div style={{marginBottom: '50px' }}>
//           <h2>Levi Chan</h2>
//           <h3>We can't always carry our fallen comrades home, but we carry their memory.</h3>
//         </div>

//         {/* Tabs here */}

//         <Tabs
//           variant="fullWidth"
//           value={tabValue}
//           onChange={(event, val) => { setTabValue(val) }}
//           TabIndicatorProps={{
//             style: {
//               backgroundColor: "#008000"
//             }
//           }}>
//           <Tab label="posts" />
//           <Tab label="followers" />
//           <Tab label="following" />
//         </Tabs>

//         {tabValue === 0 && (
//           <div style={{ paddingTop: '40px' }}>
//             <ResponsiveMasonry
//               columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
//             >
//               <Masonry>
//                 {images.map((image, i) => (
//                   <div key={i} style={{ margin: "10px 10px" }}>
//                     <img
//                       src={image}
//                       style={{
//                         width: "100%",
//                         display: "block",
//                       }}
//                       alt="img"
//                     />
//                   </div>
//                 ))}
//               </Masonry>
//             </ResponsiveMasonry>
//           </div>
//         )}

//         {tabValue === 1 && (
//           <div>
//             followers
//           </div>
//         )}

//         {tabValue === 2 && (
//           <div>
//             following
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



// Left aligned and upload image

import React, { useState } from 'react';
import images from '../data/ImageData';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { TextField, Button } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import '../styles/ProfilePage.css';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const ProfilePage = () => {
  const profileImageUrl = 'https://wallpapercave.com/wp/wp4308980.jpg';

  const [tabValue, setTabValue] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editUsername, setEditUsername] = useState(false);
  const [editBio, setEditBio] = useState(false);
  const [username, setUsername] = useState('Levi Chan');
  const [bio, setBio] = useState("We can't always carry our fallen comrades home, but we carry their memory.");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file ? file.name : null);
  };

  const handleUsernameEdit = () => {
    setEditUsername(!editUsername);
  };

  const handleBioEdit = () => {
    setEditBio(!editBio);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  return (
    <div className="profile-page-container">
      <div className="profile-details">
        <div className="profile-info">
          <div className="profile-image-container">
            <img src={profileImageUrl} alt="Profile Picture" className="profile-image" />
          </div>
          <div className="profile-text">
            <h2>Levi Chan</h2>
            <h3>We can't always carry our fallen comrades home, but we carry their memory.</h3>
          </div>
        </div>

        <div className="additional-content">
          <div className="upload-image">
            <label htmlFor="image-upload" className="image-upload-label">
              <Button variant="contained" color="primary" component="span">
                Upload Image
              </Button>
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {selectedImage && <p>{selectedImage}</p>}
          </div>
          <TextField label="Title" variant="outlined" fullWidth />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            style={{ marginTop: '10px' }}
          />
        </div>
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
          <div style={{ paddingTop: '40px' }}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry>
                {images.map((image, i) => (
                  <div key={i} style={{ margin: '10px 10px' }}>
                    <img
                      src={image}
                      style={{
                        width: '100%',
                        display: 'block',
                      }}
                      alt="img"
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        )}

        {tabValue === 1 && <div>followers</div>}

        {tabValue === 2 && <div>following</div>}
      </div>
    </div>
  );
};

export default ProfilePage;
