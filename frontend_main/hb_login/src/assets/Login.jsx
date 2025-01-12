import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo1 from '../assets/hb_logo.png';

function Login() {
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailid.endsWith('@pec.edu.in')) {
      alert('Invalid email domain. Only emails ending with @pec.edu.in are allowed.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5002/login', { emailid, password });
      console.log('Response from server:', response.data);

      if (response.data.success) {
        navigate('/home'); // Navigate to home page on successful login
      } else {
        alert(response.data.message); // Show error message
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert('Invalid email or password');
      } else {
        console.error('Error:', err);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="auth-container">
      <img src={logo1} alt="HostelBuddy Logo" className="logo1" />
      <div className="auth-form">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="emailid">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="emailid"
              className="form-control"
              onChange={(e) => setEmailid(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary">Log In</button>
        </form>
        <p className="text">Don't have an account?</p>
        <Link to="/register" className="btn-secondary">Register</Link>
        <div className="links">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
