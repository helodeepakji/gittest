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
    <div className="wallectContainer">
      <div className="heading">
        <h1>Designs</h1>
        <div className="sideIMG">
          <img src={topImg} alt="topImg" />
        </div>
      </div>
      <div className="second-div">
        <div className="third-div">
          <div className="men">
            <img src={menimg} alt="pic" />
            <div>
              <h3>Name of designer</h3>
              <p>project name</p>
            </div>
          </div>

          <div className="goBack">
            <p>Go back</p>
            <div className="share">
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

        <div className="fourth-div">
          <div className="image-section">
            <img src={Cupimg} alt="pic" />
          </div>
          <div className="chat-section">
            <div className="chat-header">
              <div className="chat-info">
                <div className="profile-picture">
                  <img src={menimg} alt="pic" />
                </div>
                <div className="desinger-name">
                  <h3>Name of designer</h3>
                </div>
              </div>

              <div className="calls-icon">
                <IoCall fontSize={20} color="#0b5258" />
                <IoVideocam fontSize={20} style={{ color: "#0b5258" }} />
              </div>
            </div>
            <div className="chat-msg">
              <div className="msg-reciever">
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print.
                </p>
              </div>
              <div className="msg-sender">
                <p>Hello there!</p>
              </div>
            </div>
            <div className="chat-footer">
              <div className="footer-icon">
                <FaCamera fontSize={20} style={{ color: "#0b5258" }} />
                <IoImageSharp fontSize={20} style={{ color: "#0b5258" }} />
              </div>
              <div className="input-sec">
                <input type="text" placeholder="message" />
                <FaThumbsUp
                  className="thumb"
                  fontSize={20}
                  style={{ color: "#0b5258" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="WallectButton">
          <button className="Wallectbtn1">Accept Design</button>
          <button className="Wallectbtn2">Not Satisfied</button>
        </div>
      </div>

      <div className="Wallectnext">
        <h1>Next</h1>
        <p className="arrow">
          <IoIosArrowForward color="#0b5258" fontSize={25} />
        </p>
      </div>
    </div>
  );
};

export default Wallet;
