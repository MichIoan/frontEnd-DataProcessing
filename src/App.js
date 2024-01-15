import React from 'react';
import './App.css';
import LandingPage from './components/index/landingPage.js';
import Login from './components/auth/login.js';
import Register from './components/auth/register.js';
import MoviePage from './components/mediaPage/moviePage.js';
import SeriesPage from './components/mediaPage/seriesPage.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/media/:mediaId"} element={<MoviePage />} />
        <Route path={"/media/:mediaId/season"} element={<SeriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;