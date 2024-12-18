import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { IoImageSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import "./Productdesign.css";
import axios from "axios";
import Add from "./pic/addd.png";
import minus from "./pic/minus.png";

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

  const [quantities, setQuantities] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        const categoryArray = Object.values(response.data);
        setCategories(categoryArray); // Set categories as an array
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  

  // Increment quantity for a specific item
  const incrementQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Decrement quantity for a specific item
  const decrementQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

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
          // fetchDesign();
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

  const handleApprove = () => {
  return categories
    .flatMap(category => category.items) // Flatten all items
    .filter(item => quantities[item.id] > 0) // Filter by selected quantity
    .map(item => ({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price, // Include price
      quantity: quantities[item.id], // Include selected quantity
    }));
};

  return (
    <div className="inventory-0-33">
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
            <h1>
              Inventory <span>/current</span>
            </h1>
          </header>

          <section class="requirement-section-33">
            <div class="image-gallery-33">
              <div class="thumbnails-33">
                <img src={data.image[0]} alt="Main Image" />
              </div>
            </div>
            <div class="requirement-details-33">
              <h2>Company Name: {data.business_company || 'Self Design'}</h2>
              <p>Caption: {data.caption || 'Self Design'}</p>
              <img src={(data.business_media?.[0] || data.image?.[0]) || 'default-image-path.jpg'} 
  width="100px"  alt="Preview" />
              <div class="user-info-33">
                <div className="profile-pic-33">
                  <img
                    src={data.designer_profile}
                    alt=""
                    style={{ width: "25px", borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <span>
                    {data.designer_first_name} {data.designer_last_name}
                  </span>
                  <br />
                  <span>Designer</span>
                  <br />
                  <span>
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
                  </span>
                </div>
              </div>
              {data.status === "pending" && userType == "business" ? (
                data.business_first_name ? (
                  <div class="actions-33">
                    <button class="btn btn-danger" onClick={toggleModal}>
                      Not Satisfied
                    </button>
                    <button class="chat-33">Chat</button>
                  </div>
                ) : (null)
              ) : (
                <div class="actions-33">
                  <button class="chat-33">{data.status}</button>
                  <button class="chat-33">Chat</button>
                </div>
              )}
            </div>
            {data.business_first_name ? (
              <div className="custom-chat-section">
                <div className="custom-chat-header">
                  <div className="custom-chat-info">
                    <div className="custom-profile-picture">
                      <img src={data.designer_profile} alt="pic" />
                    </div>
                    <div className="custom-designer-name">
                      <h3>
                        {data.designer_first_name + " " + data.designer_last_name}
                      </h3>{" "}
                    </div>
                  </div>
                </div>


                <div className="custom-chat-msg">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`custom-msg ${message.sender === senderId
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
            ) : (null)}
          </section>

          {userType == "business" ? (
            <section class="advertisement-categories-33">
              <h2>Advertisement Categories</h2>

              {categories.length !== 0 ? (
                categories.map((category, categoryIndex) => (
                  <div className={`category ${category.category_name.toLowerCase()}-33`} key={categoryIndex}>
                    <h3>{category.category_name}</h3>
                    <div className="items-33">
                      {category.items.length === 0 ? (
                        <p>No items available</p>
                      ) : (
                        category.items.map((item, itemIndex) => (
                          <div className="item-33" key={itemIndex}>
                            <img src={item.image} alt={item.name} />
                            <br />
                            <p>{item.name}</p>
                            <div className="counter-container-11">
                              <img
                                src={minus}
                                onClick={() => decrementQuantity(item.id)} // Pass item id
                                alt="decrement"
                              />
                              <span id="counter-value" className="counter-value-11">
                                {quantities[item.id] || 0} {/* Show the quantity for the specific item */}
                              </span>
                              <img
                                src={Add}
                                onClick={() => incrementQuantity(item.id)} // Pass item id
                                alt="increment"
                              />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))
              ) : (
                  <p>No Category available</p>
                )}

              <Link to="/checkout" state={{ selectedItems: handleApprove() , design : data }}>
                <button class="approved-333">Approved</button>
              </Link>
            </section>
          ) : (
            <p></p>
          )}
        </div>
      ) : (
        !error && <p>Loading design...</p>
      )}
    </div>
  );
};

export default Product;
