import React from 'react';

const ProfilePage = () => {
  const profileImageUrl =
    'https://via.placeholder.com/300';
  const uploadedImages = [
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
    .profile-container {
      text-align: center;
      padding: 20px;
    }

    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 20px;
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

      <div className="profile-container">
        <img src={profileImageUrl} alt="Profile" className="profile-image" />

        <div className="image-grid">
          {uploadedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="grid-item"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
