import React from 'react';
import './landingPage.css';
import MediaBox from './../mediaBox/mediaBox';

function LandingPage() {

  const movies = [
    { title: 'Movie 1', description: 'Description for Movie 1', seasonId: 'null' },
    { title: 'Movie 2', description: 'Description for Movie 2', seasonId: 'null' },
    { title: 'Movie 3', description: 'Description for Movie 3', seasonId: 'null' },
    { title: 'Movie 4', description: 'Description for Movie 4', seasonId: 'null' },
    { title: 'Movie 5', description: 'Description for Movie 5', seasonId: 'null' },
    { title: 'Movie 6', description: 'Description for Movie 6', seasonId: 'null' },
  ];

  const series = [
    { title: 'Series 1', description: 'Description for Movie 1', seasonId: '1' },
    { title: 'Series 2', description: 'Description for Movie 2', seasonId: '1' },
    { title: 'Series 3', description: 'Description for Movie 3', seasonId: '1' },
    { title: 'Series 4', description: 'Description for Movie 4', seasonId: '1' },
    { title: 'Series 5', description: 'Description for Movie 5', seasonId: '1' },
    { title: 'Series 6', description: 'Description for Movie 6', seasonId: '1' },
  ];

  return (
    <div className="app">
      <div className='navbar'>
        <h1>Your favorite website</h1>
        <ul>
          <li><a href="#">Change profile</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Movies</h2>
        <div className="displayMedia">
          {movies.map((data, index) => (
            <MediaBox
              key={index}
              title={data.title}
              description={data.description}
              season={data.seasonId}
            />
          ))}
        </div>

        <h2>Series</h2>
        <div className='displayMedia'>
          {series.map((data, index) => (
            <MediaBox
              key={index}
              title={data.title}
              description={data.description}
              season={data.seasonId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;