import React, { useState, useEffect } from "react";
import { Link , useLocation} from "react-router-dom";
import "./Header.css";
import logo from './images/image.png';

const Header = ({ user, setUser }) => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);  // Clear user state on logout
  };


  return (
    <nav className="navbar bg-dark text-white p-1 rounded-3xl mx-6 mt-3">
      <div className="container d-flex justify-content-between" style={{ height: '100px' }}>
        <div className="navbar-brand"><img src={logo} /></div>

        <div className="d-flex justify-content-center gap-5" >
          <ul className="navbar-nav d-flex flex-row gap-5">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/adv" className="nav-link text-white">
                Wallet page
              </Link>
            </li>
          </ul>
        </div>

        {user ? (
          <div className="d-flex gap-4">
            Welcome {user.email}
            <Link to="/profile" className="text-white align-self-center">Profile
            </Link>
            <Link to="#" onClick={handleLogout} className="btn btn-info text-white px-3xl" >
              Logout
            </Link>
          </div>
        ) : (
          <div className="d-flex gap-4">
            <Link to="/login" className="text-white align-self-center">
              Login
            </Link>
            <Link to="/proceed" className="btn btn-info text-white px-3xl" >
              Join Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;


// <li className="nav-item">
//               <Link to="/bussiness" className="nav-link text-white">
//                 Bussiness Page
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/design" className="nav-link text-white">
//                 Designer Page
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/retailer" className="nav-link text-white">
//                 Retailer Page
//               </Link>
//             </li>