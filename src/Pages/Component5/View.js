import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./View.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const DesignTable = () => {
  const { ads_id } = useParams();
  // State to store data
  const [designs, setDesigns] = useState([]);
  const [userType, setUserType] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [error, setError] = useState('');

  const fetchRequirements = async (currentPage = 1) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication token is missing");
      return;
    }

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    setUserType(decodedToken.user_type);
    const conditions = ads_id ? `/${ads_id}` : '';
    try {
      const response = await axios.get(`/api/getAllDesigns${conditions}?page=${currentPage}&limit=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data, totalPages } = response.data;

      setDesigns(data);
      setTotalPages(totalPages);

    } catch (err) {
      setDesigns([]);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchRequirements(page);
  }, [page]);


  return (
    <div className="container0">
      <div className="container00">
        <h1>Designs </h1>
        <div className="search-bar00">
          <input type="text" placeholder="Search Project" />
        </div>
        <table>
          <thead>
            <tr>
              <th>  {userType == 'business' ? 'Designer' : 'Company'} </th>
              <th>Project</th>
              <th>Status</th>
              <th>Date</th>
              <th>View Design</th>
            </tr>
          </thead>
          <tbody>
            {designs.length > 0 ? (
              designs.map((design) => (
                <tr>
                  <td>
                    <div className="designer00">
                      <img
                        src={design.profile}
                        alt="Designer"
                      />
                      {userType == 'business' ? design.first_name + ' ' + design.last_name : design.company}
                    </div>
                  </td>
                  <td>
                    <div className="designer00">
                      <img
                        src={design.business_media?.[0] || design.image[0]}
                        alt="Designer"
                      />
                      {design.caption || 'Self Upload'}
                    </div>
                  </td>
                  <td>{design.status}</td>
                  <td>{new Date(design.created_at).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                    ,
                    {new Date(design.created_at).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true
                    })}</td>
                  <td>
                    <Link to={`/productdesign/${design.id}`}>
                      <button className="view-button00">View</button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No designs available.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination00">
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

export default DesignTable;
