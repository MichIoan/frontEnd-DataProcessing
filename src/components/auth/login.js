import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      // Make a POST request with the JSON data
      const response = await fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { token } = responseData;

        localStorage.setItem('token', token);
        navigate('/');
      } else {
        // Handle error response
        console.error('Error sending data to the API:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending data to the API:', error);
    }
  };


  return (
    <div className="login-container">
      <h1>Netflix Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button onClick={handleSubmit}>Sign In</button>
        <h3>New to Netflix?</h3>
        <a href='/register'>Sign up now</a>
      </form>
    </div>
  );
};

export default Login;
