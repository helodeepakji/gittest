import React from 'react';
import './Sidebar.css';
import Project from "./images/project.png"
import Transactions from "./images/transactions.png"
import Completed from "./images/completed.png"
import Messaging from "./images/messaging.png"
import Wallet from "./images/wallet.jpg"
import Experience from "./images/experience-1.png"
import Profile from "./images/profile-picture.webp"
import Group from "./images/Group.png"

function Sidebar() {
  return (
    <div className="menu-sidebar">
    <div className="menu-item">
      <img src={Project} alt="Projects Icon" className="menu-icon" />
      <span className="menu-text">Upload Post</span>
    </div>
    <div className="menu-item">
      <img src={Transactions} alt="Transactions Icon" className="menu-icon" />
      <span className="menu-text">Transactions</span>
    </div>
    <div className="menu-item">
      <img src={Completed} alt="Completed Designs Icon" className="menu-icon" />
      <span className="menu-text">View Post</span>
    </div>
    <div className="menu-item">
      <img src={Messaging} alt="Messaging Icon" className="menu-icon" />
      <span className="menu-text">Messaging</span>
    </div>
    <div className="menu-item">
      <img src={Wallet} alt="Wallet Icon" className="menu-icon" />
      <span className="menu-text">Wallet</span>
    </div>
    <div className="sidebar-image">
      <img src={Experience} style={{ height: 'auto', width: '100%' }} alt="Experience" />
    </div>
    <div className="user-card">
      <img src={Profile} alt="Profile Picture" />
      <div className="user-name">Mickelson Klus</div>
      <button className="user-button">Business Profile</button>
    </div>
    <div className="sidebar-group">
      <img src={Group} style={{ marginTop: '600px' }} alt="Group" />
    </div>
  </div>
  
  );
}

export default Sidebar;
