import React, { useState, useEffect, useRef } from 'react';
import "./ProjectCard.css";
import axios from 'axios';
import Profile from "./image/profile-picture.webp";
import Like from "./image/like.png";
import Comment from "./image/comment.png";
import Share from "./image/share.png";
import Save from "./image/save.png";
import Group1 from "./image/Group (1).png";
import Photo from './image/photo.png';


const ProjectCard = () => {
  const [requirements, setRequirements] = useState([]);
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setFiles([...e.target.files]);
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (ads_id) => {
    if (!ads_id || !files) {
      alert('Please upload an image and select a project to submit.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authentication token is missing');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('ads_id', ads_id);
      files.forEach((file) => {
        formData.append("media[]", file);
      });

      const response = await axios.post('/api/uploadDesign', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Design submitted successfully!');
        setImage(null); // Reset the image state
        fetchRequirements(page);
      } else {
        alert(`Submission failed: ${response.statusText}`);
      }
    } catch (err) {
      alert(`An error occurred: ${err.message}`);
    }
  };

  const fetchRequirements = async (currentPage = 1) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication token is missing");
      return;
    }

    try {
      const response = await axios.get(`/api/getRequirement?page=${currentPage}&limit=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data, totalPages } = response.data;

      setRequirements(data); // Set the array of requirements
      setTotalPages(totalPages); // Update totalPages state
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRequirements(page);
  }, [page]);

  return (
    <div className="project-card0">
      <img src={Group1} alt="Group1 png" />
      <h3>Ready to create amazing designs? Check out the latest project and start earning today.</h3>
      <hr />
      {requirements && requirements.length > 0 ? (
        requirements.map((req, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <div className="profile-info">
                <img src={Profile} alt="Profile Picture" />
                <div className="profile-details">
                  <div className="name">{req.first_name} {req.last_name}</div>
                  <div>Business owner of D House</div>
                  <div>{new Date(req.created_at).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                    ,
                    {new Date(req.created_at).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true
                    })}</div>
                </div>
              </div>
              {req.is_submitted === 0 ? (

                <div className="action-buttons" >
                  <div onClick={handleImageClick} className="function-buttons">
                    {image ? <img src={URL.createObjectURL(image)} alt='' style={{ width: "50px" }} /> : <img src={Photo} alt="" />}
                    <input
                      type="file"
                      ref={inputRef}
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />

                  </div>

                  <button className="button submit-button" onClick={() => handleSubmit(req.id)} > Submit Project</button>
                </div>
              ) : (
                <div className="action-buttons" >
                  <button className="button view-button" onClick={() => setSelectedProject(req)}>Project already submitted</button>

                </div>
              )}
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
      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;