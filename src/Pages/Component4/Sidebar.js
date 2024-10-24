import React from 'react';
import './Sidebar.css';
import Project from "../Component4/Assests/project.png"
import Transactions from "../Component4/Assests/Transaction.png"
import Completed from "../Component4/Assests/Completed.png"
import messaging from '../Component4/Assests/messaging.png'
import Wallet from "../Component4/Assests/wallet.png"
import Experience from "../Component4/Assests/experience.png"
import Profile from "../Component4/Assests/men.png"
import Group from "../Component4/Assests/Group (4).png"
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src={Project} alt="Projects Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Orders</span>
      </div>
      <div className="sidebar-item">
        <img src={Transactions} alt="Transactions Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Transactions</span>
      </div>
      <div className="sidebar-item">
        <img src={Completed} alt="Completed Designs Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Completed Order</span>
      </div>
      <div className="sidebar-item">
        <img src={messaging} alt="Messaging Icon" className="sidebar-item-icon" />
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
        <button className="profile-button">Retailer's Profile</button>
      </div>
            {/* <div className='group-one'>
              <img src={Groupone} alt='group-one'/>
            </div> */}
      <div className="group">
        <img src={Group} style={{ marginTop: '400px' }} alt="Group" />
      </div>
    </div>
  );
}

export default Sidebar;
