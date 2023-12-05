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




// import React, { useEffect, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { TextField } from '@mui/material'
// import '../styles/AddPost.css'

// const AddPost = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   const handleImageChange = (event) => {
//     const imageFile = event.target.files[0];

//     if (imageFile) {
//       const imageUrl = URL.createObjectURL(imageFile);
//       setSelectedImage(imageUrl);
//     }
//   };
//   return (
//     <div>
//       <div className="split left">
//         <div className="centered">
//           {/* <img src={require('../images/logo1.png')} /> */}
//           <div className="left-column">
//             <div className="image-container">
//               {selectedImage && (
//                 <img
//                   src={selectedImage}
//                   alt="Selected"
//                   className="selected-image"
//                 />
//               )}
//             </div>
//             <input
//               type="file"
//               className="input-file"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="split right">
//         <div className="centered">
//           <div className='login-form'>
//             <h3 className='welcome-text'>Welcome back!</h3>

//             <div className='text-field'>
//               <TextField
//                 fullWidth
//                 label='username'
//                 value={username}
//                 onChange={(event) => {
//                   setUsername(event.target.value);
//                 }}
//                 InputProps={{
//                   style: {
//                     borderRadius: "10px"
//                   }
//                 }}
//               />
//             </div>

//             <div className='text-field'>
//               <TextField
//                 fullWidth
//                 label='password'
//                 value={password}
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}
//                 InputProps={{
//                   style: {
//                     borderRadius: "10px"
//                   }
//                 }}
//               />
//             </div>

//             {/* <input
//                             type="username"
//                             placeholder="username"
//                             value="username"
//                             // onChange={(e) => this.setState({ username: e.target.value })}
//                             style={{ padding: "10px", marginBottom: "15px", borderRadius: "10px", fontSize: "16px" }}
//                         /> */}
//           </div>

//           <button className="button" onClick={handleLogin}>
//             Login
//           </button>

//           <NavLink to="/signup">
//             <h4 fontSize="1.5rem">New user? Signup</h4>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddPost;