import React, { useState } from 'react';
import '../styles/AddNewGig.css'
import ImageComponent from '../components/ImageComponent';
import { TextField } from '@mui/material'

const AddNewGig = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setImage(URL.createObjectURL(selectedImage));
        }
    };

    const generateRandomHashtags = () => {
        const hashtags = ['#nature', '#photography', '#art', '#travel'];
        return hashtags.map((tag, index) => <span key={index}>{tag} </span>);
    };

    return (
        <div className="container">
            <div className="image-box">
                <div className="image-and-info">
                    <div className="image-info">

                        <input type="file" accept="image/*" onChange={handleImageChange} />

                        {/* {image && <img src={image} alt="Uploaded" className="uploaded-image" />} */}

                        {image && (<ImageComponent
                            imageUrl={image}
                            maxWidthThreshold={300}
                            maxHeightThreshold={200}
                        />)}

                        <div className="hashtags">{generateRandomHashtags()}</div>

                    </div>

                    <div className="title-and-description">
                        <div className='title-field'>
                            <TextField
                                fullWidth
                                label='Title'
                                variant='filled'
                            // InputProps={{
                            //     style: {
                            //         borderRadius: "50px"
                            //     }
                            // }}
                            />
                        </div>
                        <div className='title-field'>
                            <TextField
                                fullWidth
                                label='# hashtags'
                                variant='filled'
                                multiline
                            // InputProps={{
                            //     style: {
                            //         borderRadius: "50px"
                            //     }
                            // }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewGig;
