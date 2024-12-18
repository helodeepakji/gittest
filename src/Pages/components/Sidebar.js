import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Graph from "./images/Graph.png";
import Activity from "./images/Activity.png";
import Chart from "./images/Chart.png";
import Category from "./images/Category.png";
import Discovery from "./images/Discovery.png";
import Experience from "./images/experience-1.png";
import Profile from "./images/profile-picture.webp";

function Sidebar() {
  const token = localStorage.getItem("token");
  if (!token) {
    setError("Authentication token is missing");
    return;
  }
  const decodedToken = JSON.parse(atob(token.split(".")[1]));

  return (
    <div className="menu-sidebar">

      <Link to="/uploadDesign"className="menu-item">
        <img src={Graph} alt="Projects Icon" className="menu-icon" />
        <span className="menu-text">Upload Design</span>
      </Link>

      <div className="menu-item">
        <img src={Activity} alt="Transactions Icon" className="menu-icon" />
        <span className="menu-text">Transactions</span>
      </div>

      <div className="menu-item">
        <img src={Chart} alt="Completed Designs Icon" className="menu-icon" />
        <span className="menu-text">View Post</span>
      </div>

      <Link to="/business/view" className="menu-item">
      <div className="menu-item">
        <img src={Category} alt="All Designs" className="menu-icon" />
        <span className="menu-text">All Designs</span>
      </div>
      </Link>

<<<<<<< HEAD
=======
      <Link to="/business/orders" className="menu-item">
        <img src={Discovery} alt="Order Icon" className="menu-icon" />
        <span className="menu-text">Orders</span>
      </Link>

>>>>>>> f2458658e785539c736bacd9ff231e617aad5dcc
      <div className="sidebar-image">
        <img
          src={Experience}
          style={{ height: "auto", width: "100%" }}
          alt="Experience"
        />
      </div>
      <div className="user-card">
        <img src={decodedToken.profile} alt="Profile Picture" />
        <div className="user-name">{decodedToken.name}</div>
        <button className="user-button">Business Profile</button>
      </div>
    </div>
  );
}

export default Sidebar;
