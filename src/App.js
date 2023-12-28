import React from 'react';

import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import AboutUs from './components/AboutUs.js';

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";


const App = () => {
  return (
      <>
    {/* <div>
      <Navbar/>
      <Home/>
      <CoreValues/>
      
    </div> */}
    <Router>
    <Navbar/>
      <Routes>
        
        <Route  path="/" element={<Home />} />
        
        <Route path="/AboutUs" element={<AboutUs />} />
        
      </Routes>
    </Router>
      </>
  )
}

export default App;
