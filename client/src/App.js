

import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import SchoolInformation from './component/SchoolInformation';
import Demo from './component/Demo';
import Demo2 from './component/Demo2';
//import ImageSlider   from './component/Slider';

import './App.css'

function App() {
  return (
    <>
    {/*<Router>
          <Routes>
            
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
        </Routes>
  </Router>*/}
  
  <Router>
      <header>
        <div className="logo">School Universe</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/school">School Information</Link>
            </li>
            <li>
              <Link yo="/demo"> </Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
        
          
        </div>
      </header>
     
      <main>
      
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/school" element={<SchoolInformation/>} />
            <Route path ="/demo" element={<Demo/>} />
            <Route path ="/demo2" element={<Demo2/>} />

        </Routes>
      </main>
      <footer>
        &copy; 2023 School Universe. All Rights Reserved.
        <nav>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </footer>
      
  </Router>
    </>
  );
}

export default App;
