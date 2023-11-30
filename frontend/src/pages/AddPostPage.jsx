import React, { useState } from 'react';
import { TextField } from '@mui/material'
import '../styles/AddPost.css'

// const AddPost = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     const imageFile = event.target.files[0];

//     if (imageFile) {
//       const imageUrl = URL.createObjectURL(imageFile);
//       setSelectedImage(imageUrl);
//     }
//   };

//   return (
//     <div>
//       <div className="add-post-container">
//         <div className="left-column">
//           <div className="image-container">
//             {selectedImage && (
//               <img
//                 src={selectedImage}
//                 alt="Selected"
//                 className="selected-image"
//               />
//             )}
//           </div>

//           <input
//             type="file"
//             className="input-file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </div>

//         <div className="right-column">
//           <div className='textfield'>
//             <TextField
//               fullWidth
//               label='Title'
//               variant='outlined'

//               InputProps={{
//                 style: {
//                   borderRadius: "5px"
//                 }
//               }}
//             />
//           </div>

//           <div className='textfield'>
//             <TextField
//               fullWidth
//               label='#bike, #duke, #life'
//               variant='outlined'

//               InputProps={{
//                 style: {
//                   borderRadius: "5px"
//                 }
//               }}
//             />
//           </div>

//           <button className="post-button">Post</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddPost;


const AddPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <div className="center-text">
        <h2>Upload to Pixure</h2>
      </div>
      <div className="add-post-container">

        <div className="left-column">
          <div className="image-container">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="selected-image"
              />
            )}
          </div>

          <input
            type="file"
            className="input-file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="right-column">
          <div className='textfield'>
            <TextField
              fullWidth
              label='Title'
              variant='outlined'
              InputProps={{
                style: {
                  borderRadius: "5px"
                }
              }}
            />
          </div>

          <div className='textfield'>
            <TextField
              fullWidth
              label='#bike, #duke, #life'
              variant='outlined'
              InputProps={{
                style: {
                  borderRadius: "5px"
                }
              }}
            />
          </div>

          <button className="post-button">Post</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
