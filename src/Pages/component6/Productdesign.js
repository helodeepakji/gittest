import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./Productdesign.css";
import Auto from "./pic/auto.png"
import Train from "./pic/train.png"
import Metro from "./pic/metro.png"
import Plane from "./pic/plane.png"

import Papercup from "./pic/PaperCup.png"
import Paperplate from "./pic/Paperplate.png"
import Paperbag from "./pic/Paperbag.png"
import Pizza from "./pic/Pizza .png"
import Plus from "./pic/plus.png"

import Half from "./pic/Half T shirt.png"
import Full from "./pic/T-shirt.png"
import Hoddies from "./pic/hoodies.png"
import Jackets from "./pic/Jackets.png"
import Cap from "./pic/Cap.png"
import Handkerchiefs from "./pic/handkerchiefs.png"

import City from "./pic/city.png"
import Buildings from "./pic/buildings.png"
import Markets from "./pic/market.png"
import Mall from "./pic/malls.png"

import Water from "./pic/waterbottle.png"
import Wall from "./pic/wall.png"
import axios from "axios";



const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [adsId, setAdsId] = useState(0);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userType, setUserType] = useState("");

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
          setUserType(decodedToken.user_type);
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
          fetchDesign();
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
    <div className='inventory-0-33'>
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
        <div class="inventory-33">
          <header class="inventory-header-33">
            <h1>Inventory <span>/current</span></h1>
          </header>

          <section class="requirement-section-33">
            <div class="image-gallery-33">
              <div class="thumbnails-33">
                <img src={data.image[0]} alt="Main Image" />
              </div>
            </div>
            <div class="requirement-details-33">
              <h2>Company Name: {data.business_company}</h2>
              <p>Caption: {data.caption}</p>
              <div class="user-info-33">
                <div className='profile-pic-33'>
                  <img src={data.designer_profile} alt='' style={{ width: '25px', borderRadius: '50%' }} />
                </div>
                <div>
                  <span>{data.designer_first_name} {data.designer_last_name}</span>
                  <br />
                  <span>Designer</span>
                  <br />
                  <span>{new Date(data.created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                    ,{" "}
                    {new Date(data.created_at).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}</span>
                </div>
              </div>
              {data.status === "pending" &&  userType == 'business'  ? (
                <div class="actions-33">
                  <button class="approved-33">Approved</button>
                  <button class="btn btn-danger" onClick={toggleModal}> Not Satisfied</button>
                  <button class="chat-33">Chat</button>
                </div>
              ) : (
                <div class="actions-33">
                  <button class="chat-33">{data.status}</button>
                  <button class="chat-33">Chat</button>
                </div>
              )}
            </div>
          </section>

          {userType == 'business' ? (

            <section class="advertisement-categories-33">
              <h2>Advertisement Categories</h2>

              <div class="category transport-33">
                <h3>Transport</h3>
                <div class="items-33">
                  <div class="item-33"> <img src={Auto} /><br />Auto Rickshaw</div>
                  <div class="item-33"> <img src={Train} /><br />Railway Train</div>
                  <div class="item-33" ><img src={Metro} /><br />Metro</div>
                  <div class="item-33"> <img src={Plane} /><br />Air Plane</div>
                </div>
              </div>

              <div class="category disposables-33">
                <h3>Disposables</h3>
                <div class="items-33">
                  <div class="item-33"> <img src={Papercup} /><br />Paper Cup</div>
                  <div class="item-33"><img src={Paperbag} /><br />Paper Bag</div>
                  <div class="item-33"><img src={Paperplate} /><br />Paper Plate</div>
                  <div class="item-33"><img src={Pizza} /><br />Pizza Box</div>
                  <div class="item-33"><img src={Plus} /><br />For Special Request</div>
                </div>
              </div>

              <div class="category clothing-33">
                <h3>Clothing</h3>
                <div class="items-33">
                  <div class="item-33"><img src={Half} /><br />Half Sleeves T-shirt</div>
                  <div class="item-33"><img src={Full} /><br />Full Sleeves T-shirt</div>
                  <div class="item-33"><img src={Hoddies} /><br />Hoodie's</div>
                  <div class="item-33"><img src={Jackets} /><br />Jacket's</div>
                  <div class="item-33"><img src={Cap} /><br />Cap</div>
                  <div class="item-33"><img src={Handkerchiefs} /><br />Handkerchiefs</div>
                </div>
              </div>

              <div class="category billboards-33">
                <h3>Bill Board</h3>
                <div class="items-33">
                  <div class="item-33"><img src={City} /><br />Holdings in City</div>
                  <div class="item-33"><img src={Buildings} /><br />Holdings on Buildings</div>
                  <div class="item-33"><img src={Markets} /><br />Holdings on Buildings</div>
                  <div class="item-33"><img src={Mall} /><br />Inside Malls</div>

                </div>
              </div>

              <div class="category water-bottles-33">
                <h3>Water Bottles</h3>
                <div class="items-33">
                  <div class="item-33"><img src={Water} /><br />Water Bottles</div>
                </div>
              </div>

              <div class="category walls-33">
                <h3>Walls</h3>
                <div class="items-33">
                  <div class="item-33"><img src={Wall} /><br />Walls</div>
                </div>
              </div>
            </section>
          ) : (
            <p></p>
          )}

        </div>
      ) : (
        !error && <p>Loading design...</p>
      )}
    </div>
  )
}

export default Product
