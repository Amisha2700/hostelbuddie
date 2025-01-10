import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './assets/Auth.css'; // Import your CSS file
import logo from './assets/hb_logo.png';
import React from 'react';

const Lost = () => {
  return (
    <div>
      <header className="header">
        <h1>Lost & Found Portal</h1>
      </header>

      <section className="content">
        <div className="form-container">
          <form action="" method="POST">
            <label htmlFor="item-name">Item Name:</label>
            <input type="text" id="item-name" name="item-name" required />

            <label htmlFor="item-description">Item Description:</label>
            <textarea id="item-description" name="item-description" rows="4" required />

            <label htmlFor="item-location">Last Known Location:</label>
            <input type="text" id="item-location" name="item-location" required />

            <label htmlFor="contact-info">Contact Information:</label>
            <input type="text" id="contact-info" name="contact-info" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
        }
        .header {
          background-color: #d686aa;
          padding: 20px;
          text-align: center;
          color: white;
        }
        .content {
          padding: 20px;
        }
        .form-container {
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 16px;
          background-color: #fff;
          margin: 16px 0;
        }
        .form-container input,
        .form-container textarea,
        .form-container button {
          width: 100%;
          padding: 8px;
          margin: 8px 0;
        }
      `}</style>
    </div>
  );
};

export default Lost;
