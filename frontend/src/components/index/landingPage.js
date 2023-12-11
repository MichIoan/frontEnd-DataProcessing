import React, { useState } from 'react';
import './landingPage.css';

function LandingPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setEmail('');

    console.log(email);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="app">

      <div className="navbar">
        <img className="netflix-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
      </div>

      <div className="main-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        <div className="email-input">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="button" onClick={handleSubmit}>Try it now</button>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;