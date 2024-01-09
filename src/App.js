import React from 'react';
import './App.css';
import LandingPage from './components/index/landingPage.js';
import Login from './components/auth/login.js';
import Register from './components/auth/register.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
        </Routes>
</Router> 
  );
}

export default App;