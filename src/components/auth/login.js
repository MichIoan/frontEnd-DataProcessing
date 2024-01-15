import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = [];

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      validationErrors.push('Invalid email format. Please enter a valid email address.');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

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
        const errorData = await response.json();
        setErrors([errorData.error]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errors.length > 0 && (
        <div className="error-container">
          {errors.map((error, index) => (
            <p key={index} className="error-message">
              <b>Error:</b> {error}
            </p>
          ))}
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Sign In</button>
        <h3>New to Netflix?</h3>
        <a href='/register'>Sign up now</a>
      </form>
    </div>
  );
};

export default Login;