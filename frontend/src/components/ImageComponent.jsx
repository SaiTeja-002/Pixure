import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import '../styles/ImageComponent.css';

const ImageComponent = ({ src, title, showUser, setShowUser, avatarUrl, username }) => {
  const [hovered, setHovered] = useState(false);

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
            <FiDownload />
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
    </div>
  );
};

export default ImageComponent;
