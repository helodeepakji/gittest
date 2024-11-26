import React, { useState, useEffect } from "react";
import "./View.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const DesignTable = () => {
  // State to store data
  const [designs, setDesigns] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [error, setError] = useState('');

  const fetchRequirements = async (currentPage = 1) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication token is missing");
      return;
    }

    try {
      const response = await axios.get(`/api/getAllDesigns?page=${currentPage}&limit=5`, {
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
        <h1>Designs</h1>
        <div className="search-bar00">
          <input type="text" placeholder="Search Project" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Designer</th>
              <th>Project</th>
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
                        src={design.designerImageUrl}
                        alt="Designer"
                      />
                      {design.designerName}
                    </div>
                  </td>
                  <td>{design.projectName}</td>
                  <td>{design.dateSubmitted}</td>
                  <td>
                    <Link to="/viewpost">
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
