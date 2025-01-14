import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./assets/Login.jsx";
import Home from "./assets/home.jsx";
import Register from "./signup.jsx";
import Buy from './buy.jsx'; 
import Sell from './sell.jsx'; 
import Lost from './lost.jsx';
import Found from './found.jsx';
import Roommate from './roommate.jsx';
import MatchesPage from './match.jsx';
// import Profile from './Profile.jsx';
import Display from "./assets/display.jsx";
import Display1 from "./assets/display1.jsx";
// import Display_sell from "./assets/display_sell.jsx"
// import Display_lost from "./assets/display_lost.jsx"
import Profile from './profile.jsx';
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
          <Route path="/match" element={<MatchesPage/>} />
          <Route path="/display" element={<Display />} />
          <Route path="/display1" element={<Display1 />} />
          <Route path="/profile" element={<Profile />} /> 
{/*           <Route path="/display_sell" element={<Display_sell />} />
          <Route path="/display_lost" element={<Display_lost/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
