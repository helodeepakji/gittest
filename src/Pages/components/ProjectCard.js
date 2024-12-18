import React, { useState, useEffect } from "react";
import "./ProjectCard.css";
import Profile from "./images/profile-picture.webp";
import Like from "./images/like.png";
import Comment from "./images/comment.png";
import Share from "./images/share.png";
import Save from "./images/save.png";
import Photo from "./images/photo.png";
import Video from "./images/video.png";
import Event from "./images/event.png";
import Camera from "./images/camera.png";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const [message, setMessage] = useState("Do you want an advertisement?");
  const [files, setFiles] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  if (!token) {
    setError("Authentication token is missing");
    return;
  }
  const decodedToken = JSON.parse(atob(token.split(".")[1]));

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const fetchRequirements = async (currentPage = 1) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication token is missing");
      return;
    }

    try {
      const response = await axios.get(`/api/getMyRequirement?page=${currentPage}&limit=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setRequirements(data.data); // Array of requirements
        setTotalPages(data.totalPages); // Total pages from API response
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      setError(err.message);
      alert(err.message);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("caption", message);
    files.forEach((file) => {
      formData.append("media[]", file);
    });

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("/api/uploadRequirement", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setMessage("");
      setFiles([]);
      fetchRequirements(page); // Fetch the current page again
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  useEffect(() => {
    fetchRequirements(page);
  }, [page]);

  return (
    <div className="project-card-new0">
      <div className="project-card-new">
        {/* Input Section */}
        <div className="message-container-new">
          <Link to="/editprofile" className="profile-container-new">
            <img src={decodedToken.profile} alt="Profile Picture" className="profile-pic-new" />
            <div className="camera-icon-new">
              <img src={Camera} alt="Camera Icon" />
            </div>
          </Link>
          <textarea
            className="message-text-new cardin"
            style={{ width: "100%" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
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
              style={{ display: "none" }}
              multiple
              onChange={handleFileChange}
              required
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

        {/* Requirements Section */}
        <h3>Posted Projects</h3>
        {requirements && requirements.length > 0 ? (
          requirements.map((req, index) => (
            <div className="project-card-new" key={req.id}>
              <div className="project-header-new">
                <div className="profile-info-new">
                  <img src={req.profile} alt="Profile Picture" />
                  <div className="profile-details-new">
                    <div className="name-new">{req.first_name} {req.last_name}</div>
                    <div>Business owner of D House</div>
                    <div>25 Nov at 12:44 PM</div>
                  </div>
                </div>

                <Link to={`/business/view/${req.id}`}>
                  <button className="button view-button-view">
                    View Proposal
                  </button>
                </Link>
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
    </div>
  );
};

export default ProjectCard;
