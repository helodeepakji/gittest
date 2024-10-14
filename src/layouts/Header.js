import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from "../images/image.png";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navbar-menu">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/Contactpage">Contact Us</Link></li>
        </ul>
        <div className="navbar-buttons">
          <Link to="/login">Log In</Link>
          <Link to="/signup" className="join-now">Join Now</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;