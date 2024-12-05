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
  return (
    <div className="menu-sidebar">

      <div className="menu-item">
        <img src={Graph} alt="Projects Icon" className="menu-icon" />
        <span className="menu-text">Upload Design</span>
      </div>
     <div className="menu-item">
        <img src={Activity} alt="Transactions Icon" className="menu-icon" />
        <span className="menu-text">Transactions</span>
      </div>

      <Link to="/viewpost" className="menu-item">
        <img src={Chart} alt="Completed Designs Icon" className="menu-icon" />
        <span className="menu-text">View Post</span>
      </Link>
      
      <div className="menu-item">
        <img src={Category} alt="Messaging Icon" className="menu-icon" />
        <span className="menu-text">Messaging</span>
      </div>



      <Link to="/wallet" className="menu-item">
        <img src={Discovery} alt="Wallet Icon" className="menu-icon" />
        <span className="menu-text">Wallet</span>
      </Link>



      <div className="sidebar-image">
        <img
          src={Experience}
          style={{ height: "auto", width: "100%" }}
          alt="Experience"
        />
      </div>
      <div className="user-card">
        <img src={Profile} alt="Profile Picture" />
        <div className="user-name">Mickelson Klus</div>
        <button className="user-button">Business Profile</button>
      </div>
    </div>
  );
}

export default Sidebar;
