import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./images/ADJERRY SVG LOGO 1.png";

const Header = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          // Token expired
          localStorage.removeItem("token");
          setUser(null);
        } else {
          setUser(decodedToken); // Token is valid
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    } else {
      setUser(null); // No token found
    }
  }, [location]); // Re-run whenever the location changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar bg-dark text-white p-1 rounded-3xl mx-6 mt-3">
      <div className="container d-flex justify-content-between align-items-center" style={{ height: "100px" }}>
        <div className="navbar-brand">
          <img src={logo} alt="Website Logo" />
        </div>

        <div className="d-flex justify-content-center gap-5">
          <ul className="navbar-nav d-flex flex-row gap-5">
            {user ? (
              <li className="nav-item">
                <Link to={`/${user.user_type}/home`} className="nav-link text-white">
                  Dashboard
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                Contact Us
              </Link>
            </li>
            {user ? (
              user.user_type == 'business' ? (
                <li className="nav-item">
                  <Link to="/business/orders" className="nav-link text-white">
                    Order
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/designer/wallet" className="nav-link text-white">
                    Wallet
                  </Link>
                </li>
              )
            ) : (
              null
            )}
          </ul>
        </div>

        {user ? (
          <div className="d-flex gap-4 align-items-center">
            <span>Welcome, {user.email}</span>
            <Link to="/profile" className="text-white align-self-center">
              Profile
            </Link>
            <button onClick={handleLogout} className="btn btn-info text-white px-3xl">
              Logout
            </button>
          </div>
        ) : (
          <div className="d-flex gap-4 align-items-center">
            <Link to="/login" className="text-white align-self-center">
              Login
            </Link>

            <Link to="/proceed" className="btn btn-info text-white px-3xl">
              Join Now
            </Link>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Header;