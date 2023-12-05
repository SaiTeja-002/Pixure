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
import '../styles/ProfilePage.css'

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
          <h2>Levi Chan</h2>
          <h3>We can't always carry our fallen comrades home, but we carry their memory.</h3>
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
          }}>
          <Tab label="posts" />
          <Tab label="followers" />
          <Tab label="following" />
        </Tabs>

        {tabValue === 0 && (
          <div style={{ paddingTop: '40px' }}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {images.map((image, i) => (
                  <div key={i} style={{ margin: "10px 10px" }}>
                    <img
                      src={image}
                      style={{
                        width: "100%",
                        display: "block",
                      }}
                      alt="img"
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        )}

        {tabValue === 1 && (
          <div>
            followers
          </div>
        )}

        {tabValue === 2 && (
          <div>
            following
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
