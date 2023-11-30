import React, { useState } from 'react';

const AddPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  const styles = `
    /* Example CSS, adjust as needed */
    .add-post-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 20px;
    }

    .left-column {
      flex: 1;
      padding: 10px;
    }

    .right-column {
      flex: 1;
      padding: 10px;
    }

    .input-file {
      margin-bottom: 10px;
    }

    .text-field {
      width: 100%;
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .post-button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .selected-image {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  `;

  return (
    <div>
      <style>{styles}</style>

      <div className="add-post-container">
        <div className="left-column">
          <input
            type="file"
            className="input-file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="selected-image"
            />
          )}
        </div>

        <div className="right-column">
          <input type="text" placeholder="Title" className="text-field" />
          <input type="text" placeholder="Hashtags" className="text-field" />
          <button className="post-button">Post</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
