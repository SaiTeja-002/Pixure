import React from 'react';

const EditPopup = ({ imageSrc, title, onUpdate, onCancel }) => {
    const [editedTitle, setEditedTitle] = React.useState(title);

    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleUpdate = () => {
        onUpdate(editedTitle);
    };

    return (
        <div className="edit-popup">
            <div className="image-preview">
                <img src={imageSrc} alt="Edited" />
            </div>
            <div className="edit-details">
                <input type="text" value={editedTitle} onChange={handleTitleChange} />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditPopup;
