// import React from 'react'

// function HomePage() {
//   return (
//     <div>HomePage</div>
//   )
// }

// export default HomePage

// import React from 'react';

// const HomePage = () => {
//   const hashtags = [
//     'travel',
//     'food',
//     'nature',
//     'photography',
//     'fitness',
//     'art',
//     'fashion',
//     'technology',
//     'music',
//     'sports',
//     // Add more hashtags as needed
//   ];

//   const images = [
//     // Replace these with your image URLs
//     'image1.jpg',
//     'image2.jpg',
//     'image3.jpg',
//     'image4.jpg',
//     'image5.jpg',
//     'image6.jpg',
//     'image7.jpg',
//     'image8.jpg',
//     'image9.jpg',
//     'image10.jpg',
//     // Add more image URLs as needed
//   ];

//   return (
//     <div>
//       {/* Search Bar */}
//       <div className="search-bar">
//         <input type="text" placeholder="Search..." />
//         {/* Add search functionality */}
//       </div>

//       {/* Horizontal Scrollable Hashtags */}
//       <div className="hashtags">
//         <div className="hashtag-scroll">
//           {hashtags.map((tag, index) => (
//             <span key={index} className="hashtag">
//               #{tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Images Grid */}
//       <div className="image-grid">
//         {images.map((image, index) => (
//           <img key={index} src={image} alt={`Image ${index + 1}`} className="grid-item" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// /* Example CSS, adjust as needed */

// .search-bar {
//     padding: 20px;
//     text-align: center;
//   }

//   .hashtags {
//     overflow-x: auto;
//     white-space: nowrap;
//     padding: 10px;
//   }

//   .hashtag {
//     display: inline-block;
//     padding: 5px 10px;
//     margin: 0 5px;
//     font-size: 14px;
//   }

//   .image-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//     gap: 10px;
//     padding: 20px;
//   }

//   .grid-item {
//     width: 100%;
//     height: auto;
//     max-width: 100%;
//     border-radius: 8px;
//   }


import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { TextField } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const HomePage = () => {
    const hashtags = [
        'travel',
        'food',
        'nature',
        'photography',
        'fitness',
        'art',
        'fashion',
        'technology',
        'music',
        'sports',
        'travel',
        'food',
        'nature',
        'photography',
        'fitness',
        'art',
        'fashion',
        'technology',
        'music',
        'sports',
    ];

    const images = [
        'https://images.unsplash.com/photo-1682687982298-c7514a167088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1697980060888-60eceb7fa798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701274101625-d1328ac138dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701275610953-d6877e61b897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701273973387-8abff988bb88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1701226362119-cc86312846af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1701079169931-efac6c6847ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1700882759985-f1ffc657cb5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
    ];

    const styles = `
    .search-bar {
      padding: 20px;
      text-align: center;
    }

    .hashtags {
      overflow-x: auto;
      white-space: nowrap;
      padding: 10px;
    }

    .hashtag {
      display: inline-block;
      padding: 5px 10px;
      margin: 0 5px;
      font-size: 14px;
    }

    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;
      padding: 20px;
    }

    .grid-item {
      width: 100%;
      height: auto;
      max-width: 100%;
      border-radius: 8px;
    }
  `;

    return (
        <div>
            <style>{styles}</style>

            <div className="search-bar">
                {/* <input type="text" placeholder="Search..." /> */}
                <TextField
                    // sx={{ border: 'none', "& fieldset": { border: 'none' }, }}
                    // sx={{ border: 0 }}
                    fullWidth
                    label='Search'
                    // type='search'
                    variant='filled'

                    InputProps={{
                        style: {
                            borderRadius: "50px"
                        }
                    }}
                />
            </div>


            <div className="hashtags">
                <div className="hashtag-scroll">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ height: "85vh", overflowY: "scroll", padding: "20px" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                // gutter="20px"
                >
                    <Masonry>
                        {images.map((image, i) => (
                            <div key={i} style={{ margin: "10px 10px" }}>
                                <img
                                    src={image}
                                    style={{
                                        width: "100%",
                                        display: "block",
                                        // borderRadius: "8px",
                                        // padding: "10px",
                                        // margin: "5px 5px 5px 5px",
                                        // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    }}
                                    alt="img"
                                />
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
};

export default HomePage;
