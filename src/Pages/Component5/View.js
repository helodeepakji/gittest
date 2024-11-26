import React, { useState, useEffect } from "react";
import "./View.css";
import data from "./designs.json"
import { Link } from "react-router-dom";

const DesignTable = () => {
  // State to store data
  const [designs, setDesigns] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  // Fetch data from API when the component is mounted
  useEffect(() => {
    // Replace with your API URL
    fetch(" http://127.0.0.1:4000/api/getAllDesigns")
      .then((response) => response.json())
      .then((data) => setDesigns(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
          {data.length > 0 ? (
            data.map((design) => (
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
