import React, { useState } from "react";
import './EditProfile.css'

function EditProfile() {
  const [profileData, setProfileData] = useState({
    firstName: " ",
    lastName: " ",
    username: " ",
    email: " ",
    phone: "  ",
    birthDate: " ",
    gender: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    
    <div className="edit-profile-container-all">
      <div className="edit-profile-container">
        <div className="profile-header">
          <img
            src="https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?s=612x612&w=0&k=20&c=ISNDV3ZXeNU6VvDhR7KXFd6y0saq4Eji15cep_Gj8Eg=" // Replace with actual profile image URL
            alt="Profile"
            className="profile-pic"
          />
          <button className="edit-pic-button">✏️</button>
          
        </div>
        <h2>Edit Profile</h2>
        <form className="edit-profile-form">
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Birth
            <input
              type="date"
              name="birthDate"
              value={profileData.birthDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender
            <select
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>

  );
}

export default EditProfile;