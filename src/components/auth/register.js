import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errors, setErrors] = useState([]); // Change the initial state to an empty array

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors([]); // Reset errors on email change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors([]); // Reset errors on password change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const validationErrors = [];

    if (password.length < 5) {
      validationErrors.push('Password must be at least 5 characters long.');
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      validationErrors.push('Invalid email format. Please enter a valid email address.');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create a JSON object with email and password
    const data = {
      email: email,
      password: password,
    };

    try {
      // Make a POST request with the JSON data
      const response = await fetch('http://localhost:8081/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        setRegistrationSuccess(true);
      } else {
        const errorText = await response.text();
        console.log(errorText);

        try {
          const errorObject = JSON.parse(errorText);
          const errorMessage = errorObject.error;

          // Now you can handle the error message as needed
          console.error('API Error:', errorMessage);
          setErrors([errorMessage]); // Set errors as an array
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
          setErrors(['Error parsing JSON response']); // Set errors as an array
        }
      }
    } catch (error) {
      console.error('Error sending data to the API:', error);
      setErrors([error.message || 'Unknown error occurred']); // Set errors as an array
    }
  };

  return (
    <div className="register-container">
      {registrationSuccess ? (
        <div>
          <p>Registration successful! Please check your email to activate your account.</p>
          <Link to="/">Go to Homepage</Link>
        </div>
      ) : (
        <>
          <h1>Sign Up</h1>
          {errors.length > 0 && (
            <div className="error-container">
              {errors.map((error, index) => (
                <p key={index} className="error-message">
                  <b>Error:</b> {error}
                </p>
              ))}
            </div>
          )}
          <form className="register-form" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="text" value={email} onChange={handleEmailChange} required />
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Register;
