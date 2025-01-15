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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = ({ token }) => {
//   const [user, setUser] = useState(null); 
//   const [newUsername, setNewUsername] = useState(''); // Store new username
//   const [newPassword, setNewPassword] = useState(''); // Store new password
//   const [isProfileVisible, setIsProfileVisible] = useState(false); 
//   const [loading, setLoading] = useState(false); 

//   useEffect(() => {
//     const fetchUserData = async () => {
//       setLoading(true);
//       const email=localStorage.getItem('emailid'); 
//       try {
//         const response = await axios.get(`http://localhost:4200/users/view-profile${email}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(response.data);
//         setNewUsername(response.data.username); // Set initial username
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isProfileVisible) {
//       fetchUserData(); // Fetch user data only when profile is visible
//     }
//   }, [token, isProfileVisible]);

//   // Handle username update
//   const handleUsernameChange = async () => {
//     if (!newUsername) {
//       alert('Username cannot be empty.');
//       return;
//     }
//     try {
//       const response = await axios.put(
//         'http://localhost:4200/users/update-username',
//         { newUsername },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert(response.data.message);
//       setUser((prevState) => ({ ...prevState, username: newUsername }));
//     } catch (error) {
//       alert(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   // Handle password update
//   const handlePasswordChange = async () => {
//     if (!newPassword) {
//       alert('Password cannot be empty.');
//       return;
//     }
//     try {
//       const response = await axios.put(
//         'http://localhost:4200/users/update-password',
//         { newPassword },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert(response.data.message);
//     } catch (error) {
//       alert(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   // Toggle the visibility of the profile
//   const toggleProfileVisibility = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* Profile Button to show/hide profile */}
//       <button
//         onClick={toggleProfileVisibility}
//         style={{
//           backgroundColor: '#4CAF50',
//           color: 'white',
//           border: 'none',
//           padding: '10px',
//           cursor: 'pointer',
//         }}
//       >
//         {isProfileVisible ? 'Hide Profile' : 'Show Profile'}
//       </button>

//       {/* Profile section */}
//       {isProfileVisible && user && (
//         <div
//           style={{
//             marginTop: '20px',
//             padding: '20px',
//             backgroundColor: 'lightgray',
//             borderRadius: '8px',
//           }}
//         >
//           <h2>Profile</h2>
//           <p><strong>Username:</strong> {user.username}</p>
//           <div>
//             <label>New Username</label>
//             <input
//               type="text"
//               value={newUsername}
//               onChange={(e) => setNewUsername(e.target.value)}
//             />
//             <button onClick={handleUsernameChange}>Update Username</button>
//           </div>
//           <div>
//             <label>New Password</label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <button onClick={handlePasswordChange}>Update Password</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from 'react';

// const Profile = () => {
//   const [profileData, setProfileData] = useState({
//     username: '',
//     emailid: '',
//     password: '',
//   });

//   useEffect(() => {
//     // Retrieve profile data from localStorage
//     const storedProfileData = localStorage.getItem('profileData');
//     if (storedProfileData) {
//       setProfileData(JSON.parse(storedProfileData)); // Set the profile data if available
//     }
//   }, []); // Empty array ensures it runs once when component mounts

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>👤 Your Profile</h1>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Username:</label>
//           <p style={styles.profileValue}>{profileData.username || 'Not available'}</p>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Email:</label>
//           <p style={styles.profileValue}>{profileData.emailid || 'Not available'}</p>
//         </div>

//         <div style={styles.formGroup}>
//           <label style={styles.label}>Password:</label>
//           <p style={styles.profileValue}>********</p> {/* Password is hidden */}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline styles for the profile component
// const styles = {
//   container: {
//     width: '80%',
//     margin: '0 auto',
//     padding: '20px',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     padding: '20px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: '2rem',
//     marginBottom: '20px',
//   },
//   formGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     fontWeight: 'bold',
//   },
//   profileValue: {
//     fontSize: '1.1rem',
//   },
// };

// export default Profile;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userProfile } = location.state || {}; // Get the profile passed through navigation

  // Navigate to the edit profile page
  const handleEditProfile = () => {
    navigate('/edit-profile', { state: { userProfile } }); // Passing user profile for editing
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">✨ Your Profile ✨</h1>

        {userProfile ? (
          <div>
            <div className="profile-form-group">
              <label className="profile-label">👤 Username:</label>
              <p className="profile-value">
                {userProfile.username || 'Not available'}
              </p>
            </div>

            <div className="profile-form-group">
              <label className="profile-label">📧 Email:</label>
              <p className="profile-value">
                {userProfile.emailid || 'Not available'}
              </p>
            </div>

            <div className="profile-form-group">
              <label className="profile-label">🔒 Password:</label>
              <p className="profile-value">********</p> {/* Hide the password */}
            </div>

            <button onClick={handleEditProfile} className="button">
              Edit Profile
            </button>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
