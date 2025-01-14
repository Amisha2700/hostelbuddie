// import React from 'react';

// const Profile = () => {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//       {/* Add whatever details here */}
//     </div>
//   );
// }

// export default Profile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ token }) => {
  const [user, setUser] = useState(null); 
  const [newUsername, setNewUsername] = useState(''); // Store new username
  const [newPassword, setNewPassword] = useState(''); // Store new password
  const [isProfileVisible, setIsProfileVisible] = useState(false); 
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:4200/users/view-profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setNewUsername(response.data.username); // Set initial username
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (isProfileVisible) {
      fetchUserData(); // Fetch user data only when profile is visible
    }
  }, [token, isProfileVisible]);

  // Handle username update
  const handleUsernameChange = async () => {
    if (!newUsername) {
      alert('Username cannot be empty.');
      return;
    }
    try {
      const response = await axios.put(
        'http://localhost:4200/users/update-username',
        { newUsername },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setUser((prevState) => ({ ...prevState, username: newUsername }));
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  // Handle password update
  const handlePasswordChange = async () => {
    if (!newPassword) {
      alert('Password cannot be empty.');
      return;
    }
    try {
      const response = await axios.put(
        'http://localhost:4200/users/update-password',
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  // Toggle the visibility of the profile
  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Profile Button to show/hide profile */}
      <button
        onClick={toggleProfileVisibility}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        {isProfileVisible ? 'Hide Profile' : 'Show Profile'}
      </button>

      {/* Profile section */}
      {isProfileVisible && user && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: 'lightgray',
            borderRadius: '8px',
          }}
        >
          <h2>Profile</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <div>
            <label>New Username</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={handleUsernameChange}>Update Username</button>
          </div>
          <div>
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handlePasswordChange}>Update Password</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
