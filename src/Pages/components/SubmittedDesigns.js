import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./SubmittedDesigns.css"
import axios from 'axios';


const SubmittedDesigns = () => {
    const [designs, setDesigns] = useState([]);
    const [error, setError] = useState('');

    const fetchRequirements = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("Authentication token is missing");
            return;
        }

        try {
            const response = await axios.get(`/api/getAllDesigns?page=$1&limit=5`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const { data, totalPages } = response.data;

            setDesigns(data);
        } catch (err) {
            setDesigns([]);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchRequirements();
    }, []);

    return (
        <>
            <div class="submitted-designs-alt">
                <h2>Designer's shared Their design file</h2>
                {designs.length > 0 ? (
                    designs.map((design) => (
                        <div class="design-card-alt">
                            <div class="design-info-alt">
                                <img src={design.profile} alt="Designer LIrofile" />
                                <div class="design-details-alt">
                                    <div class="name-alt">{design.first_name} {design.last_name}</div>
                                    <div class="desc-alt">{design.caption}</div>
                                    <div class="desc-alt">{new Date(design.created_at).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                        ,
                                        {new Date(design.created_at).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        })}</div>
                                </div>
                            </div>
                            <Link to={`/productdesign/${design.id}`} class="view-button-alt">View</Link>
                        </div>
                    ))) : (
                    <tr>
                        <td colSpan="4">No designs available.</td>
                    </tr>
                )}
                <div class="view-all-link-alt">
                    <Link to="/business/view">View all designs</Link>
                </div>
            </div>


        </>
    )
}

export default SubmittedDesigns