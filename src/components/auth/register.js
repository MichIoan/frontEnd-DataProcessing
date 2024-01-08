import React, { useState } from 'react';
import './register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a JSON object with email and password
    const data = {
      email: email,
      password: password,
    };
  
    try {
      // Make a POST request with the JSON data
      const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Handle success, e.g., redirect or update state
        console.log('Data sent successfully!');
      } else {
        // Handle error response
        console.error('Error sending data to the API:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending data to the API:', error);
    }
  };

  return (
    <div className="register-container">
      <h1>Sign Up for Netflix</h1>
      <form className="register-form" onSubmit={handleSubmit}>
      <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button onClick={handleSubmit}> Sign Up </button>
      </form>
    </div>
  );
};

export default Register;
