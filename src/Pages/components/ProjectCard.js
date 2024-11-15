import React, { useState, useEffect } from 'react';
import "./ProjectCard.css";
import Profile from "./images/profile-picture.webp";
import Project from './images/project-sample.png';
import Like from "./images/like.png";
import Comment from "./images/comment.png";
import Share from "./images/share.png";
import Save from "./images/save.png";
import Sensory from "./images/sensory.jpg";
import Photo from './images/photo.png';
import Video from "./images/video.png";
import Event from "./images/event.png";
import Post from "./images/post.png";
import Camera from "./images/camera.png";

import axios from 'axios';

const ProjectCard = () => {
  const [message, setMessage] = useState('Do you want an advertisement?');
  const [files, setFiles] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [error, setError] = useState(null);
  const [run, setRun] = useState(0);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('caption', message);
    files.forEach((file) => {
      formData.append('media[]', file);
    });

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('/api/uploadRequirement', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
    fetchRequirements();
  };

  const fetchRequirements = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('Authentication token is missing');
      return;
    }

    try {
      const response = await fetch('/api/getMyRequirement', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include token in Authorization header
        }
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

  if(run == 0){
    setRun(1);
    fetchRequirements();
  }

  return (
    <div className="project-card-new0">
      <div className="project-card-new">
        <div className="message-container-new">
          <div className="profile-container-new">
            <img src={Profile} alt="Profile Picture" className="profile-pic-new" />
            <div className="camera-icon-new">
              <img src={Camera} alt="Camera Icon" />
            </div>
          </div>
          <textarea
            className="message-text-new cardin"
            style={{ width: '100%' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <hr />
        <div className="engagement-new">
          <div className="like-new">
            <input
              type="file"
              id="inputImage"
              accept="image/*"
              name="images[]"
              style={{ display: 'none' }}
              multiple
              onChange={handleFileChange}
            />
            <label htmlFor="inputImage">
              <img src={Photo} alt="Photo Icon" />
              <span>Photo</span>
            </label>
          </div>
          <div className="comment-new">
            <img src={Video} alt="Video Icon" />
            <span>Video</span>
          </div>
          <div className="share-new">
            <img src={Event} alt="Event Icon" />
            <span>Event</span>
          </div>
          <div className="save-new">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
        <br />
        <h3>Posted Project</h3>
        <br />
        {requirements && requirements.length > 0 ? (
          requirements.map((req, index) => (
            <div className="project-card-new" key={index}>
              <div className="project-header-new">
                <div className="profile-info-new">
                  <img src={Profile} alt="Profile Picture" />
                  <div className="profile-details-new">
                    <div className="name-new">Mickelson Klus</div>
                    <div>Business owner of D House</div>
                    <div>25 Nov at 12:44 PM</div>
                  </div>
                </div>
              </div>
              <div className="project-description-new">
                <p>{req.caption}</p>
              </div>
              {req.media && req.media[0] && (
                <img
                  src={req.media[0]}
                  alt="Project Sample"
                  className="project-image-new"
                />
              )}
              <div className="engagement-new">
                <div className="like-new">
                  <img src={Like} alt="Like Icon" /> <span>14</span>
                </div>
                <div className="comment-new">
                  <img src={Comment} alt="Comment Icon" /> <span>52</span>
                </div>
                <div className="share-new">
                  <img src={Share} alt="Share Icon" /> <span>10</span>
                </div>
                <div className="save-new">
                  <img src={Save} alt="Save Icon" />
                </div>
              </div>
              <br />
            </div>
          ))
        ) : (
          <p>No requirements available</p>
        )}
        <h2>
          <a href="#" className="join-new">
            View New Projects
          </a>
        </h2>
        <br />
      </div>
    </div>
  );
};

export default ProjectCard;