import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './assets/Auth.css'; // Import your CSS file
import logo1 from './assets/hb_logo.png';

function Register() {
  const [username, setUsername] = useState('');
  const [emailid, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailid.endsWith('@pec.edu.in')) {
      alert('Invalid email domain. Only emails ending with @pec.edu.in are allowed.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4200/auth/register', { username, emailid, password });
      console.log(response.data);
      navigate('/login');
    } catch (err) {

      console.error(err);
      if (err.response && err.response.data && err.response.data.message === 'Email already registered') {
        alert('This email is already registered. Please use a different email or try logging in.');
      }
      else
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <img src={logo1} alt="HostelBuddy Logo" className="logo1" />
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailid">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="emailid"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="btn-primary">Register</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login" className="btn-secondary">Login</Link>
      </div>
    </div>
  );
}

export default Register;
