
import React from "react";
import { useLocation } from "react-router-dom";
import "./display.css"; 
const Display_lost = () => {
  const location = useLocation();
  //console.log(location.state);
  const { posts } = location.state || { posts: [] };
  
  return (
    <div className="display-container">
      {(
        <div className="posts-container">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Items Lost</h2>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="post-card">
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
