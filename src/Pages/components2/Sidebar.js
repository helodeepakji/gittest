import React from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";
import Graph from "./image/Graph.png"
import Activity from "./image/Activity.png"
import Chart from "./image/Chart.png"
import Category from "./image/Category.png"
import Discovery from "./image/Discovery.png"
import Experience from "./image/experience-1.jpg"
import Profile from "./image/profile-picture.webp"
import Group from "./image/Group.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src={Graph} alt="Projects Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Projects</span>
      </div>
      <div className="sidebar-item">
        <img src={Activity} alt="Transactions Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Transactions</span>
      </div>
      <div className="sidebar-item">
        <img src={Chart} alt="Completed Designs Icon" className="sidebar-item-icon" />
        <NavLink to='/designer/view'><span className="sidebar-item-text">Completed Designs</span></NavLink>
      </div>
      <div className="sidebar-item">
        <img src={Category} alt="Messaging Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Messaging</span>
      </div>
      <div className="sidebar-item">
        <img src={Discovery} alt="Wallet Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Wallet</span>
      </div>
      <div className="image">
        <img src={Experience} style={{ height: 'auto', width: '100%' }} alt="Experience" />
      </div>
      <div className="profile-card">
        <img src={Profile} alt="Profile Picture" />
        <div className="profile-name">Mickelson Klus</div>
        <button className="profile-button">Designer's Profile</button>
      </div>
      <div className="group">
        <img src={Group} style={{ marginTop: ' 600px' }} alt="Group" />
      </div>
    </div>
  );
}

export default Sidebar;
