
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { userProfile } = location.state || {}; 
  console.log('User Profile:', userProfile);  

  const [username, setUsername] = useState(userProfile?.username || '');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => setNewPassword(e.target.value);
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSaveChanges = async () => {
    try {
      const email = userProfile?.emailid; 
      const token = localStorage.getItem('generatetoken');

      if (!email || !token) {
        throw new Error('User authentication data is missing.');
      }

      if (!username.trim()) {
        alert('Username cannot be empty.');
        return;
      }

      if (newPassword && newPassword.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      if (username !== userProfile?.username) {
        const response = await fetch(`http://localhost:4200/users/update-username/${email}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newUsername: username }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error updating username:", errorData);
          throw new Error(errorData.message || 'Error updating username!');
        }
      }

      if (newPassword) {
        const response = await fetch(`http://localhost:4200/users/update-password/${email}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newpassword: newPassword }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error updating password:", errorData);
          throw new Error(errorData.message || 'Error updating password!');
        }
      }

      navigate('/profile', {
        state: { userProfile: { ...userProfile, username } },
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.message);
      alert(`Failed to update profile: ${error.message}`);
    }
  };

  return (
    <div className="edit-profile">
      <div className="edit-profile-container">
        <h1>Edit Profile</h1>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label className="form-label">New Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter a new password"
              className="input-field"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle-btn"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button onClick={handleSaveChanges} className="save-button">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
