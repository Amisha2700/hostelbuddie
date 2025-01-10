import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Buy = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemDescription: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Buy Form Submitted', formData);
    setFormData({
      itemName: '',
      itemDescription: '',
      contactInfo: '',
    });
  };

  return (
    <div style={styles.content}>
      <div style={styles.formContainer}>
        <h1>Buy Item Portal</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="itemDescription">Item Description:</label>
          <textarea
            id="itemDescription"
            name="itemDescription"
            value={formData.itemDescription}
            onChange={handleChange}
            rows="4"
            required
            style={styles.input}
          />

          <label htmlFor="contactInfo">Your Contact Info:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  content: {
    padding: '20px',
  },
  formContainer: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '16px',
    backgroundColor: '#fff',
    margin: '16px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
  },
  button: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    backgroundColor: '#d686aa',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Buy;
