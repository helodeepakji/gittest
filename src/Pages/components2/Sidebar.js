import React from 'react';
import './Sidebar.css';
import Project from "./image/project.png"
import Transactions from "./image/transactions.png"
import Completed from "./image/completed.png"
import Messaging from "./image/messaging.png"
import Wallet from "./image/wallet.jpg"
import Experience from "./image/experience-1.jpg"
import Profile from "./image/profile-picture.webp"
import Group from "./image/Group.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src={Project} alt="Projects Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Projects</span>
      </div>
      <div className="sidebar-item">
        <img src={Transactions} alt="Transactions Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Transactions</span>
      </div>
      <div className="sidebar-item">
        <img src={Completed} alt="Completed Designs Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Completed Designs</span>
      </div>
      <div className="sidebar-item">
        <img src={Messaging} alt="Messaging Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Messaging</span>
      </div>
      <div className="sidebar-item">
        <img src={Wallet} alt="Wallet Icon" className="sidebar-item-icon" />
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
        <img src={Group} style={{ marginTop: '600px' }} alt="Group" />
      </div>
    </div>
  );
}

export default Sidebar;
