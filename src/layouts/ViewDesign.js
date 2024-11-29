import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Viewpost.css";
import Cupimg from "./images/cup.png";
import menimg from "./images/men.png";
import topImg from "./images/Group (3).png";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewDesign = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchDesign = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Authentication token is missing");
        return;
      }

      try {
        const response = await axios.get(`/api/getDesign/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setData(response.data.data); // Assuming the response has a 'data' field
        }
      } catch (err) {
        setData(null);
        if (err.response && err.response.status === 404) {
          setError("Design not found");
        } else {
          setError("Failed to fetch the design. Please try again later.");
        }
        console.error("Error fetching design:", err);
      }
    };

    fetchDesign();
  }, [id]);

  return (
    <div className="custom-container custom-all custom-section">
      {isModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h2>Why are you not satisfied?</h2>
            <textarea
              rows="5"
              placeholder="Please provide your feedback here..."
              className="custom-modal-textarea"
            ></textarea>
            <div className="custom-modal-actions">
              <button onClick={toggleModal} className="custom-btn-close">
                Close
              </button>
              <button className="custom-btn-submit">Submit Feedback</button>
            </div>
          </div>
        </div>
      )}

      {error && <p>{error}</p>}
      {data ? (
        <div className="custom-main-div">
          <div className="custom-heading">
            <h1>Design</h1>
            <div className="custom-side-img">
              <img src={topImg} alt="topImg" />
            </div>
          </div>

          <div className="custom-second-div">
            <div className="custom-third-div">
              <div className="custom-men">
                <img src={data.designer_profile} alt="pic" />
                <div>
                  <h3>
                    {data.designer_first_name + " " + data.designer_last_name ||
                      "Name of designer"}
                  </h3>
                  <p>
                    Company Name : {data.business_company || "Project name"}
                  </p>
                  <p>caption : {data.caption} </p>
                </div>
              </div>
              <div className="custom-go-back">
                <p>
                  {new Date(data.created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  ,
                  {new Date(data.created_at).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
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
                <img src={data.image[0]} alt="Design" />
              </div>

              <div className="custom-chat-section">
                <div className="custom-chat-header">
                  <div className="custom-chat-info">
                    <div className="custom-profile-picture">
                      <img src={menimg} alt="pic" />
                    </div>
                    <div className="custom-designer-name">
                      <h3>{data.designerName || "Name of designer"}</h3>{" "}
                      {/* Replace with actual data */}
                    </div>
                  </div>
                  /
                </div>

                <div className="custom-chat-msg">
                  <div className="custom-msg-receiver">
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print.
                    </p>
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

                    <IoSend
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
              <button onClick={toggleModal} className="custom-btn2">Not Satisfied</button>
            </div>
          </div>

          <div className="custom-next">
            <h1>Next</h1>
            <p className="custom-arrow">
              <IoIosArrowForward color="#0b5258" fontSize={25} />
            </p>
          </div>
        </div>
      ) : (
        !error && <p>Loading design...</p>
      )}
    </div>
  );
};

export default ViewDesign;
