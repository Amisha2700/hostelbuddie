import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./display1.css";

const Display_sell = () => {
  const location = useLocation();
  const { posts1: initialPosts } = location.state || { posts1: [] };
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = async(postid) => {
    // const updatedPosts = posts.filter((post) => post._id !== postid);
    // setPosts(updatedPosts);const emailid=localStorage.getItem('emailid');
    try{
      const emailid=localStorage.getItem('emailid');
      const response=await fetch(`http://localhost:4200/posts/buy-sell/delete_Sell/${postid}`,{
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
        <h2>Items up for Sale</h2>
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
                  <span><b>Price:</b></span> {post.price}
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

export default Display_sell;
