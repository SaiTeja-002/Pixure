import React, { useState } from 'react';
import { FiDownload, FiEdit3, FiTrash2 } from 'react-icons/fi';
import '../styles/ImageComponent.css';
import EditPopup from './EditPopUp';

const ImageComponent = ({ src, title, showUser, setShowUser, isAuthor = true, avatarUrl, username }) => {
  const [hovered, setHovered] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false); // State to control the edit pop-up display
  const [editedTitle, setEditedTitle] = useState(title);

  const handleUpdateTitle = (newTitle) => {
    // Logic to update the title (you might have your own method)
    console.log('New Title:', newTitle);
    setEditedTitle(newTitle);
    setShowEditPopup(false); // Close the edit pop-up after updating
  };

  return (
    <div
      className="image-component"
      onMouseEnter={() => {
        setHovered(true);
        setShowUser(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setShowUser(false);
      }}
    >
      <img src={src} alt={title} />
      {hovered && (
        <div className="overlay">
          <div>
            {isAuthor && <div className='action-button edit' onClick={() => setShowEditPopup(true)}>
              <FiEdit3 />
            </div>}
            {isAuthor && <div className='action-button delete'>
              <FiTrash2 />
            </div>}
            <div className='action-button download'>
              <FiDownload />
            </div>
          </div>
          <div>{title}</div>
        </div>
      )}

      {showUser && hovered && (
        <div className="user-details">
          <img src={avatarUrl} alt="Avatar" />
          <span>{username}</span>
        </div>
      )}

      {showEditPopup && (
        <div className="edit-overlay">
          <EditPopup
            imageSrc={src}
            title={editedTitle}
            onUpdate={handleUpdateTitle}
            onCancel={() => setShowEditPopup(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
