import React from "react";
import "./Wallet.css";
import Cupimg from "./images/cup.png"
import menimg from "./images/men.png";
import topImg from "./images/Group (3).png";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa6";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
const Wallet = () => {
  return (
    <div className="custom-container custom-all custom-section">  
  <div className="custom-main-div">
    <div className="custom-heading">
      <h1>Designs</h1>
      <div className="custom-side-img">
        <img src={topImg} alt="topImg" />
      </div>
    </div>
    <div className="custom-second-div">
      <div className="custom-third-div">
        <div className="custom-men">
          <img src={menimg} alt="pic" />
          <div>
            <h3>Name of designer</h3>
            <p>Project name</p>
          </div>
        </div>
        <div className="custom-go-back">
          <p>Go back</p>
          <div className="custom-share">
            <TiArrowBackOutline
              style={{
                color: "white",
                backgroundColor: "red",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="custom-fourth-div">
        <div className="custom-image-section">
          <img src={Cupimg} alt="pic" />
        </div>
        <div className="custom-chat-section">
          <div className="custom-chat-header">
            <div className="custom-chat-info">
              <div className="custom-profile-picture">
                <img src={menimg} alt="pic" />
              </div>
              <div className="custom-designer-name">
                <h3>Name of designer</h3>
              </div>
            </div>
            <div className="custom-calls-icon">
              <IoCall fontSize={20} color="#0b5258" />
              <IoVideocam fontSize={20} style={{ color: "#0b5258" }} />
            </div>
          </div>
          <div className="custom-chat-msg">
            <div className="custom-msg-receiver">
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
            </div>
            <div className="custom-msg-sender">
              <p>Hello there!</p>
            </div>
          </div>
          <div className="custom-chat-footer">
            <div className="custom-footer-icon">
              <FaCamera fontSize={20} style={{ color: "#0b5258" }} />
              <IoImageSharp fontSize={20} style={{ color: "#0b5258" }} />
            </div>
            <div className="custom-input-sec">
              <input type="text" placeholder="message" />
              <FaThumbsUp
                className="custom-thumb"
                fontSize={20}
                style={{ color: "#0b5258" }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="custom-btn-section">
        <button className="custom-btn1">Accept Design</button>
        <button className="custom-btn2">Not Satisfied</button>
      </div>
    </div>

    <div className="custom-next">
      <h1>Next</h1>
      <p className="custom-arrow">
        <IoIosArrowForward color="#0b5258" fontSize={25} />
      </p>
    </div>
  </div>
</div>

   
  );
};

export default Wallet;
