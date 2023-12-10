import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import { MuiChipsInput } from 'mui-chips-input';
import '../styles/ProfilePage.css';
import DoneIcon from '@mui/icons-material/Done';
import * as postActions from '../actions/postAction.js';
import { useDispatch } from 'react-redux';

const AddPost = () => {
    const dispatch = useDispatch();

    const [tags, setTags] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [base64Image, setBase64Image] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file ? file.name : null);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result;
                setBase64Image(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddChip = (tags) => {
        setTags(tags);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = () => {

        dispatch(postActions.addPost(base64Image, title, tags));

        // Clear the form fields
        setTitle('');
        setTags([]);
        setSelectedImage(null);
        setBase64Image(null);

        // Show success message
        setSuccessMessage('Post uploaded successfully!');
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
        setSuccessMessage('');
    };

    return (
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
                {selectedImage && (
                    <>
                        <DoneIcon style={{ color: 'green', marginLeft: '8px' }} />
                        <p>Image Ready For Upload</p>
                    </>
                )}
            </div>

            <TextField
                style={{ marginBottom: '3vh' }}
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={handleTitleChange}
            />

            <MuiChipsInput value={tags} onChange={handleAddChip} />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: '10px' }}
            >
                Submit Post
            </Button>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={successMessage}
            />
        </div>
    );
};

export default AddPost;
