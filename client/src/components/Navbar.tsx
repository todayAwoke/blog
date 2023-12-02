 import React, { useState,useContext } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'
// import {userContext} from '../App'
const Navbar = () => {
    // const user = useContext(userContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        <h3>Blog App</h3>
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/create">Create</a>
              <a href="contact">Contact</a>
              {/* {
                  user.username?
              <div>
                  <input type="button"  value="Logout"/>
              </div>: */}
                  <Link to="/registration">Register/Login/</Link>
              {/* } */}
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <h1>x</h1>
      </div>
    </nav>
  );
};

export default Navbar;