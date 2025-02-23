import React from 'react';

const Profile = ({ name, email }) => {
    return (
      <div className="profile-card">
        <h2>Profile</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    );
  };
  
  export default Profile;
  