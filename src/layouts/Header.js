import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../images/image.png';

const Header = () => {
  return (
    <nav className="navbar bg-dark text-white p-3 rounded-3xl mx-5 mt-4">
      <div className="container d-flex justify-content-between">
        <div className="navbar-brand"><img src={logo}/></div>

        <div className="d-flex justify-content-center gap-5">
          <ul className="navbar-nav d-flex flex-row gap-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Solution
              </a>
            </li>
            <li className="nav-item">
              <Link to="design" className="nav-link text-white">
                Designer Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/wallet" className="nav-link text-white">
                Wallet page
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex gap-4">
          <Link to="/login" className="text-white align-self-center">
            Login
          </Link>
          <Link to="/join" className="btn btn-info text-white px-3xl">
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
