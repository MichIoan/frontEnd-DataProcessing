import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">

      {/* Netflix Navbar */}
      <div className="navbar">
        <img className="netflix-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        {/* Email Input */}
        <div className="email-input">
          <input type="email" placeholder="Enter your email" className="email-field"/>
          <button className="button">Try it now</button>
        </div>
      </div>

      {/* Netflix Footer */}
      <div className="footer">
        <p>Questions? Call 1-800-123-4567</p>
        <div className="footer-links">
          <span>FAQ</span>
          <span>Help Center</span>
          <span>Account</span>
          <span>Media Center</span>
          <span>Investor Relations</span>
          <span>Jobs</span>
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>Cookie Preferences</span>
          <span>Corporate Information</span>
          <span>Contact Us</span>
        </div>
        <p>&copy; 2023 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default App;
