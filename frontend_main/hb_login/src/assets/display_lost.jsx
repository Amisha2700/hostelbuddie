
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./display.css"; 
const Display_lost = () => {
  const location = useLocation();
  //console.log(location.state);
  const { posts: initialPosts } = location.state || { posts: [] };
    const [posts, setPosts] = useState(initialPosts);
  
  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post._id !== postId);
    setPosts(updatedPosts);
  };
  return (
    <div className="display-container">
      {(
        <div className="posts-container">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Items Lost</h2>
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
                  style={{ width: "50%", height: "auto", borderRadius: "8px" }} // Custom styling
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
      )}
    </div>
  );
};

export default Display_lost;
