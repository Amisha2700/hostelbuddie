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
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);  // Modal is open by default

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4200/users/view-profile/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setNewUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleUsernameChange = async () => {
    try {
      const response = await axios.put(
        'http://localhost:4200/users/update-username/me',
        { newUsername },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setIsModalOpen(false);
    } catch (error) {
      alert(error.response.data.message || 'An error occurred');
    }
  };

  const handlePasswordChange = async () => {
    try {
      const response = await axios.put(
        'http://localhost:4200/users/update-password/me',
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setIsModalOpen(false);
    } catch (error) {
      alert(error.response.data.message || 'An error occurred');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Modal for Profile */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
            }}
          >
            <h2>Profile</h2>
            <div>
              <p><strong>Username:</strong> {user.username}</p>
              <div>
                <label>New Username</label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <button onClick={handleUsernameChange}>Update Username</button>
            </div>
            <div>
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button onClick={handlePasswordChange}>Update Password</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
