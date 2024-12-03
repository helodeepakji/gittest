import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ViewDesign.css";
import topImg from "./images/Group (3).png";
import { IoImageSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import {Link} from 'react-router-dom';

const ViewDesign = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [adsId, setAdsId] = useState(0);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [feedback, setFeedback] = useState("");

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [receiverId, setReceiverId] = useState(0);
  const [senderId, setSenderId] = useState(0);
  const [media, setMedia] = useState(null);

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

      const decodedToken = JSON.parse(atob(token.split(".")[1]));

      try {
        const response = await axios.get(`/api/getDesign/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setData(response.data.data);
          setAdsId(response.data.data.ads_id);
          if (decodedToken.user_type == "business") {
            setReceiverId(response.data.data.designer_id);
            setSenderId(response.data.data.business_id);
          } else {
            setReceiverId(response.data.data.business_id);
            setSenderId(response.data.data.designer_id);
          }
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
    fetchChatHistory();
  }, [id]);

  const fetchChatHistory = () => {
    fetch(`/api/chat/history/${id}?timestamp=${Date.now()}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching chat history:", error));
  };

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      alert("Please provide your feedback before submitting.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token missing");
      }

      const response = await axios.post(
        `/api/designNotSatisfied/${id}`,
        { ads_id: adsId, feedback },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 201) {
        alert("Feedback submitted successfully!");
        setFeedback("");
        toggleModal(); // Close the modal
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  const handleSendMessage = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authentication token missing");
    }
    if (!newMessage.trim()) return;

    const newMessageData = {
      receiver: receiverId,
      msg: newMessage,
      media: media || "",
    };

    // Optimistically update UI
    setMessages([
      ...messages,
      {
        sender: "You",
        msg: newMessage,
        media,
        created_at: new Date().toISOString(),
      },
    ]);
    setNewMessage("");

    try {
      await fetch(`/api/chat/send/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newMessageData),
      });
      fetchChatHistory();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="custom-container-custom-all-custom-section">
      {isModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h2>Why are you not satisfied?</h2>
            <textarea
              rows="5"
              placeholder="Please provide your feedback here..."
              className="custom-modal-textarea"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="custom-modal-actions">
              <button onClick={toggleModal} className="custom-btn-close">
                Close
              </button>
              <button onClick={handleSubmit} className="custom-btn-submit">
                Submit Feedback
              </button>
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
                  ,{" "}
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
                      <img src={data.designer_profile} alt="pic" />
                    </div>
                    <div className="custom-designer-name">
                      <h3>
                        {data.designer_first_name +
                          " " +
                          data.designer_last_name}
                      </h3>{" "}
                    </div>
                  </div>
                </div>

                <div className="custom-chat-msg">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`custom-msg ${
                        message.sender === senderId
                          ? "custom-msg-sender"
                          : "custom-msg-receiver"
                      }`}
                    >
                      <p>{message.msg}</p>
                      {message.media && <img src={message.media} alt="Media" />}
                    </div>
                  ))}
                </div>

                <div className="custom-chat-footer">
                  <div className="custom-footer-icon">
                    <IoImageSharp fontSize={20} style={{ color: "#0b5258" }} />
                  </div>
                  <div className="custom-input-sec">
                    <input
                      type="text"
                      placeholder="message"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <IoSend
                      className="custom-thumb"
                      fontSize={20}
                      style={{ color: "#0b5258" }}
                      onClick={handleSendMessage}
                    />
                  </div>
                </div>
              </div>
            </div>

            {data.status === "pending" ? (
              
                <div className="custom-btn-section">
                  <Link to="/productdesign">
                  <button className="custom-btn1">Accept Design</button>
                  </Link>
                  <button onClick={toggleModal} className="custom-btn2">
                    Not Satisfied
                  </button>
                </div>
              
            ) : (
              <div className="custom-btn-section-1">
                Design is {data.status}
              </div>
            )}
              <div className="custom-next"> 
                  <h1>Next </h1>
             </div>
          </div>
        </div>
      ) : (
        !error && <p>Loading design...</p>
      )}
    </div>
  );
};

export default ViewDesign;
