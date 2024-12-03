 import React, { useState, useEffect } from "react";
import './Profile.css'

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setUser(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
        setUser(null);
      }
    }
  }, []);

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Please log in to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {user.email}</h2>
      <p><strong style={{marginRight:"8px"}}>Email:</strong>{user.email}</p>
      <p><strong>Name:</strong> Avinash</p>
      <p><strong>Mobile no:</strong> 0987654321</p>
      <p><strong>Address:</strong> Noida</p>
     
    </div>
  );
};

export default Profile;
