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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4200/users/view-profile', {
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

  const handleProfileClick = () => {
    console.log('Profile button clicked'); // Debug log
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
        <button
          onClick={handleProfileClick}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '24px' }}>👤</span>
        </button>
      </div>

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
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '400px' }}>
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
              <button>Update Username</button>
            </div>
            <div>
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button>Update Password</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
