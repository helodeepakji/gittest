import React, { useState, useEffect } from 'react';
import "./ProjectCard.css";
import Profile from "./image/profile-picture.webp";
import Project from './image/project-sample.png';
import Like from "./image/like.png";
import Comment from "./image/comment.png";
import Share from "./image/share.png";
import Save from "./image/save.png";
import Sensory from "./image/sensory.jpg";
import Group1 from "./image/Group (1).png";

const ProjectCard = () => {
  const [requirements, setRequirements] = useState([]);
  const [error, setError] = useState(null);

  const fetchRequirements = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('Authentication token is missing');
      return;
    }

    try {
      const response = await fetch('/api/getRequirement', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in Authorization header
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setRequirements(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // useEffect(() => {
    fetchRequirements();
  // }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="project-card0">
      <img src={Group1} alt="Group1 png" />
      <h3>
        Ready to create amazing designs? Check out the latest project and
        start earning today.
      </h3>
      <hr />
      {requirements && requirements.length > 0 ? (
        requirements.map((req, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <div className="profile-info">
                <img src={Profile} alt="Profile Picture" />
                <div className="profile-details">
                  <div className="name">Mickelson Klus</div>
                  <div>Business owner of D House</div>
                  <div>25 Nov at 12:44 PM</div>
                </div>
              </div>
              <div className="action-buttons">
                <button className="button submit-button">Submit Project</button>
                <button className="button view-button">View</button>
              </div>
            </div>

            <div className="project-description">
              Title: {req.caption}
            </div>

            <img
              src={req.media[0]}
              alt="Project Sample"
              className="project-image"
            />

            <div className="engagement">
              <div className="like">
                <img src={Like} alt="Like Icon" /> <span>14</span>
              </div>
              <div className="comment">
                <img src={Comment} alt="Comment Icon" /> <span>52</span>
              </div>
              <div className="share">
                <img src={Share} alt="Share Icon" /> <span>10</span>
              </div>
              <div className="save">
                <img src={Save} alt="Save Icon" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No requirements available</p>
      )}
    </div>
  );
};

export default ProjectCard;