import React, { useEffect, useState } from 'react';
import { FiDownload, FiEdit3, FiTrash2 } from 'react-icons/fi';
import '../styles/ImageComponent.css';
import EditPopup from './EditPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { triggerBase64Download } from 'react-base64-downloader';
import * as userActions from '../actions/userAction';


const ImageComponent = ({ src, title, showUser, setShowUser, avatarUrl, username, index }) => {
  const [hovered, setHovered] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false); // State to control the edit pop-up display
  const [editedTitle, setEditedTitle] = useState(title);
  const [isAuthor, updateAuthor] = useState(false);

  const sessionInfo = useSelector((state) => state.user);
  useEffect(() => {
    updateAuthor(sessionInfo.name == username);
  }, [sessionInfo]);

  const dispatch = useDispatch();

  const handleUpdateTitle = (newTitle) => {
    dispatch(userActions.editPost(index, newTitle));
    setEditedTitle(newTitle);
    setShowEditPopup(false);
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
            {isAuthor && <div className='action-button delete' onClick={() => dispatch(userActions.removePost(index))}>
              <FiTrash2 />
            </div>}
            <div className='action-button download'>
              <FiDownload onClick={() => triggerBase64Download(src, title)} />
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
