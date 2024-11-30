import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./SubmittedDesigns.css";
import axios from 'axios';


const SubmittedDesigns = () => {
  const [submit, setsubmit] = useState([]);
  const [error, setError] = useState('');

  const fetchRequirements = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication token is missing");
      return;
    }

    try {
      const response = await axios.get(`/api/getMyDesigns?page=1&limit=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data, totalPages } = response.data;

      setsubmit(data);
    } catch (err) {
      setsubmit([]);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRequirements();
  }, []);

  return (
    <div>
      <div class="submitted-designs">

        <h2>Submitted Designs</h2>


        {submit && submit.length > 0 ? (
          submit.map((req, index) => (
            <div class="design-card">
              <div class="design-info">
                <img src={req.business_media[0]} alt="Designer LIrofile" />
                <div class="design-details">
                  <div class="name">{req.company}</div>
                  <div class="desc">{req.caption}</div>
                  <div class="desc">{new Date(req.created_at).toLocaleDateString('en-US', {
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
              <Link to={`/view/${req.id}`} class="view-button1">View</Link>
            </div>
          ))) : (
          <p>No Submiited Designs available</p>
        )}


        <div class="view-all-link">
          <Link to="/designer/view">View all submittion</Link>
        </div>
        <hr />

      </div>
    </div>
  )
}

export default SubmittedDesigns