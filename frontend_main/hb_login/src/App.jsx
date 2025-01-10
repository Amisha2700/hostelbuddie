import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./assets/Login.jsx";
import Home from "./assets/Home.jsx";
import Register from "./signup.jsx";
import Buy from './buy.jsx'; 
import Sell from './sell.jsx'; 
import Lost from './lost.jsx';
 import Found from './found.jsx';
  import Roommate from './roommate.jsx';
import Match from './match.jsx';

  




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy" element={<Buy/>} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/roommate" element={<Roommate />} />
          <Route path="/lost" element={<Lost/>} />
          <Route path="/found" element={<Found/>} />
          <Route path="/match" element={<Match/>} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
