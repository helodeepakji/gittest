import React from 'react';

const Header = () => {
  return (
    <nav className="navbar bg-dark text-white p-3 rounded-3xl mx-5 mt-4">
      <div className="container d-flex justify-content-between">
       
        <div className="navbar-brand">LOGO</div>

        
        <div className="d-flex justify-content-center gap-5">
          <ul className="navbar-nav d-flex flex-row gap-5">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Solution</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        
        <div className="d-flex gap-4">
          <a href="#" className="text-white align-self-center">Login</a>
          <a href="#" className="btn btn-info text-white px-3xl">Join Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
