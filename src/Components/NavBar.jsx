// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
function NavBar() {
  return (
    <nav>
      <div className='left-corner'>
    
        <div className='right-corner'>
          <Link to="/">Home</Link>
          <Link to="/about us">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/event gallery">Event Gallery</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
