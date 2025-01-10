import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './assets/Auth.css'; // Import your CSS file
import logo from './assets/hb_logo.png';

const Sell = () => {
  return (
    <div>
      <header className="header">
        <h1>Sell Portal</h1>
      </header>

      <section className="content">
        <div className="form-container">
          <form action="" method="POST">
            <label htmlFor="product-name">Product Name:</label>
            <input type="text" id="product-name" name="product-name" required />

            <label htmlFor="product-description">Product Description:</label>
            <textarea id="product-description" name="product-description" rows="4" required />

            <label htmlFor="product-price">Price:</label>
            <input type="number" id="product-price" name="product-price" required />

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

export default Sell;
