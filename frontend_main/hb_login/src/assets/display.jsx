// import React, { useEffect, useState } from 'react';
// import './display.css';

// const Portal = ({ type }) => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/items?type=${type.toLowerCase()}`);
//         const data = await response.json();
//         setItems(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [type]);

//   if (loading) {
//     return <div className="portal loading">Loading items...</div>;
//   }

//   return (
//     <div className="portal-container">
//       <div className={`portal portal-${type.toLowerCase()}`}>
//         <h1 className="portal-title">{type} Portal</h1>
//         <p className="portal-subtitle">Browse items in the {type} category!</p>
//         <div className="items-grid">
//           {items.length > 0 ? (
//             items.map((item, index) => (
//               <div className="item-card" key={index}>
//                 <div className="item-image-wrapper">
//                   <img
//                     src={item.image || 'placeholder.jpg'}
//                     alt={item.name}
//                     className="item-image"
//                   />
//                 </div>
//                 <h2 className="item-title">{item.name}</h2>
//                 <p className="item-description">{item.description}</p>
//                 <p className="item-contact">Contact: {item.contact}</p>
//               </div>
//             ))
//           ) : (
//             <p>No items available in this category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default Portal;


// import React, { useEffect, useState } from 'react';
// import './display.css';

// const Portal = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all posts from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('generatetoken'); 
//         if (!token) {
//           setError('Unauthorized: No token provided.');
//           setLoading(false);
//           return;
//         }
//         const response = await fetch('/posts/lost-found/', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         // const response = await fetch('/posts/lost-found/'); // Fetch all items
//         if (!response.ok) {
//           if (response.status === 401) {
//             setError('Unauthorized: Invalid token.');
//           } else {
//             setError(`Error: ${response.statusText}`);
//           }
//           setLoading(false);
//           return;
//         }
//         const data = await response.json();
//         setItems(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="portal loading">Loading items...</div>;
//   }

//   return (
//     <div className="portal-container">
//       <div className="portal portal-all">
//         <h1 className="portal-title">All Items Portal</h1>
//         <p className="portal-subtitle">Browse all available items!</p>

//         {/* Display existing posts */}
//         <div className="items-grid">
//           {items.length > 0 ? (
//             items.map((item, index) => (
//               <div className="item-card" key={index}>
//                 <div className="item-image-wrapper">
//                   <img
//                     src={item.image || 'placeholder.jpg'}
//                     alt={item.name}
//                     className="item-image"
//                   />
//                 </div>
//                 <h2 className="item-title">{item.name}</h2>
//                 <p className="item-description">{item.description}</p>
//                 <p className="item-contact">Contact: {item.contact}</p>
//               </div>
//             ))
//           ) : (
//             <p>No items available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portal;


// import React from "react";
// import { useLocation } from "react-router-dom";
// import "./display.css"; 
// const Display = () => {
//   const location = useLocation();
  
//   //console.log(location.state);
//   const { posts } = location.state || { posts: [] };
  
//   const handleDelete = (postId) => {
//     const updatedPosts = posts.filter((post) => post._id !== postId);
//     setPosts(updatedPosts);
//   };
//   return (
//     <div className="display-container">
//       {(
//         <div className="posts-container">
//           <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Items Found</h2>
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post._id} className="post-card">
//               {/* Delete Button */}
//               <button
//                 className="delete-button"
//                 onClick={() => handleDelete(post._id)}
//               >
//                 &times;
//               </button>
//                  <img
//                 src={post.picturepath}
//                 alt={post.itemName}
//                 className="post-image"
//               />
//                 <div className="post-text">
//                 <p>
//                   <span><b>Item Name:</b></span> {post.itemName}
//                 </p>
//                 <p>
//                   <span><b>Description:</b></span> {post.itemDescription}
//                 </p>
//                 <p>
//                   <span><b>Contact:</b></span> {post.contactInformation}
//                 </p>
//               </div>
//               </div>
//             ))
//           ) : (
//             <p>No posts found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Display;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./display.css";

const Display = () => {
  const location = useLocation();
  const { posts: initialPosts } = location.state || { posts: [] };
  const [posts, setPosts] = useState(initialPosts);

  // const handleDelete = (postId) => {
  //   const updatedPosts = posts.filter((post) => post._id !== postId);
  //   setPosts(updatedPosts);
  // };
  const handleDelete = async(postid) => {
    // const updatedPosts = posts.filter((post) => post._id !== postId);
    // setPosts(updatedPosts);
    const emailid=localStorage.getItem('emailid');
    try{
      const response=await fetch(`http://localhost:4200/posts/lost-found/delete_found/${postid}`,{
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("generatetoken")}`, // Replace with your actual token
            "Content-Type": "application/json",
        },
        body: JSON.stringify({emailid}),
        });
        if (response.ok) {
          setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postid));
      alert("Post deleted successfully");
         
        } else if (response.status === 403) {
          // If the backend returns 403 (Forbidden), it means the user didn't create the post
          const errorMessage = await response.text(); // You can also use response.json() if it's a JSON response
          alert(errorMessage || "You didn't create this post!");
        } else {
          alert("Failed to delete post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("Error deleting post");
      }
    };


  return (
    <div className="display-container">
      <div className="posts-container">
        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Items Found</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              {/* Delete Button */}
              <button
                className="delete-button"
                onClick={() => handleDelete(post._id)}
              >
                &times;
              </button>
              <img
                src={post.picturepath}
                alt={post.itemName}
                className="post-image"
              />
              <div className="post-text">
                <p>
                  <span><b>Item Name:</b></span> {post.itemName}
                </p>
                <p>
                  <span><b>Description:</b></span> {post.itemDescription}
                </p>
                <p>
                  <span><b>Contact:</b></span> {post.contactInformation}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Display;
