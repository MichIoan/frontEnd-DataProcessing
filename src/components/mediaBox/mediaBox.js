import React, { useState } from 'react';
import './landingPage.css';

function MediaBox({ title, description, image }) {
    return (
        <div className="app">
            <div className="main-content">
                <div className="movie-box">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;