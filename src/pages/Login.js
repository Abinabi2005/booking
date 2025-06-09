// Login.js
import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login - Booking.com';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Allow any username/password and navigate to Home
    if (username && password) {
      alert("Logged in successfully");
      navigate('/home', {
        state: {
          message: `Welcome to Booking.com`,
          username: username
        }
      });
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className='wrappe'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUserAlt className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon' />
          </div>

          <div className='remember-forgot'>
            <label>
              <input type='checkbox' /> Remember Me
            </label>
            <a href='#'>Forgot Password?</a>
          </div>

          <button type='submit'>Login</button>

          <div className='register-link'>
            <p>
              Don't have an account? <a href='#'>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
