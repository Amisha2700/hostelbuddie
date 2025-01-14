import React from "react";
import { useLocation } from "react-router-dom";
import "./display1.css"; 
const Display1 = () => {
  const location = useLocation();
  //console.log(location.state);
  const { posts1 } = location.state || { posts1: [] };
  
  return (
    <div className="display-container">
      {(
        <div className="posts-container">
          <h2>Latest Posts:</h2>
          {posts1.length > 0 ? (
            posts1.map((post) => (
              <div key={post._id} className="post-card">
                <img
                  src={post.picturepath}
                  alt={post.itemName}
                  className="post-image"
                  style={{ width: "50%", height: "auto", borderRadius: "8px" }} // Custom styling
                />
                <h3>{post.itemName}</h3>
                <p>{post.itemDescription}</p>
                <p>{post.price}</p>
                <p>{post.contactInformation}</p>
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

export default Display1;