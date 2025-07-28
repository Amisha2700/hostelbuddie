import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import logo1 from '../assets/hb_logo.png';

function Login() {
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailid.endsWith('@pec.edu.in')) {
        Swal.fire({
                      icon: 'warning',
                      title: 'Login Failed',
                      text: 'Please login with PEC ID',
                      confirmBUttonText: 'Retry',
              });
      //alert('Invalid email domain. Only emails ending with @pec.edu.in are allowed.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4200/auth/login', { emailid, password });
      console.log('Response from server:', response.data);
      console.log(response.data.generateToken)
      localStorage.setItem('emailid', emailid);
      localStorage.setItem('generatetoken', response.data.generateToken);
      console.log('Generated Token:', localStorage.getItem('generatetoken'));

      if (response.data.success) {

        Swal.fire({
        title: 'Login Successful!',
        text: 'Welcome back to your dashboard.',
        icon: 'success',
        confirmButtonText: 'Continue',
        timer: 2000 // Auto close after 2 seconds
      });
        navigate('/home'); // Navigate to home page on successful login
      } else {
       alert(response.data.message); // Show error message
    
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        //alert('Invalid email or password');

                Swal.fire({
      title: "Invalid Credentials",
      text: "The login ID or password you entered is incorrect. Please try again.",
      icon: "warning",
      confirmButtonText: "Retry",
    });
      } else {
        console.error('Error:', err);
        //alert('An error occurred. Please try again later.');
                Swal.fire({
      title: "ERROR",
      text: "An error occurred. Please try again later.",
      icon: "warning",
      confirmButtonText: "Retry",
    });
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
        <p className="text">Forgot Password?</p>
        <Link to="/forgot" className="btn-secondary">Reset</Link>
      </div>
    </div>
  );
}

export default Login;
