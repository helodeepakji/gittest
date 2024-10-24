import React from "react";
import "./Retailer.css";
import Sidebar from "./Sidebar";
import topImage from '../Component4/Assests/Group (8).png'
import Cards from "./Cards";
import Imageone from '../Component4/Assests/Group one.png'
import Imagetwo from '../Component4/Assests/Group (6).png';
import Imagethree from '../Component4/Assests/Group (5).png';
import groupone from'../Component4/Assests/Group (9).png';
const Retailer = () => {
  return (
    <div className="main-div">
       <div className="div-one">
         <div className="group-one">
        <img src={groupone} alt="top-pic" />
      </div>
        <Sidebar />
      </div>
      <div className="div-two">
        <div className="top-image">
          <img src={topImage} alt="top-pic" />
        </div>
        <h1>
          Manage your orders and streamline your printing process efficiently
        </h1>
        <hr />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <div className="last-heading">
          <h2>View more order</h2>
          </div>
      </div>
      <div className="div-third">
        <div className="image-one">
          <img src={Imageone} alt="pic" />
        </div>
        <div className="image-two">
          <img src={Imagetwo} alt="pic" />
        </div>
        <div className="image-three">
          <img src={Imagethree} alt="pic" />
        </div>
      </div>
      
      
    </div>
  );
};

export default Retailer;