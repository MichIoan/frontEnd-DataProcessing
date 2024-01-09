import React from 'react';
import './landingPage.css';
import Mediabox from './../mediaBox/mediaBox';

function LandingPage() {
  return (
    <div className="app">
      <div className="main-content">
        <Mediabox title="Movie" description="Aaaa" />
      </div>
    </div>
  );
}

export default LandingPage;