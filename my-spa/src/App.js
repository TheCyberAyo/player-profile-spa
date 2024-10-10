// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import About from './pages/About';
import PlayerProfile from './pages/PlayerProfile.js';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/player-profile" element={<PlayerProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

