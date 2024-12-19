import React, {useState, useRef} from "react";
import { Link,useNavigate } from 'react-router-dom';
import './adv.css'; 
import axios from 'axios';
import UploadDesign from "./Image upload-bro 1.png"


const Adv = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setFiles([...e.target.files]);
    setImage(e.target.files[0]);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    var ads_id = 0;
    if (files.length === 0) {
      alert("All fields are required.");
      return;
    }
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authentication token is missing');
      return;
    }
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('ads_id', ads_id);
      files.forEach(file => formData.append('media[]', file));
  
      const response = await axios.post('/api/uploadDesign', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        alert('Project submitted successfully!');
        setFiles([]);
        setImage("");
        closeModal();
        navigate('/business/view');
      } else {
        alert(`Submission failed: ${response.statusText}`);
      }
    } catch (err) {
      alert(`An error occurred: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  

    return (
      <> 
       {isModalOpen && (
       <div className="modal-overlay-000">
        <div className="modal-content-000">
          <div className="modal-body-000">

            <div className="image-container-000">
            {image ? <img src={URL.createObjectURL(image)} alt='' style={{ width: "50px" }} /> : <img src={UploadDesign} alt="" />}
                    <input
                      type="file"
                      ref={inputRef}
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />

            </div>

            <h2>Select files </h2>
            <p>Share your design to business user</p>
            <button onClick={handleImageClick} className="upload-button-000">Upload Design</button>
          </div>
          <div className="custom-modal-actions-000">
              <button onClick={closeModal} className="custom-btn-close-000">
                Close
              </button>
              <button className="custom-btn-submit-000" onClick={ handleSubmit}>
               Submit
              </button>
            </div>

        </div>
      </div>
      )}

 <div className="container mt-5 w-2/3 text-white">
          {/* Header Section */}
          <div className="row mb-4 text-center">
            <div className="col-md-4 mb-3">
              <div className="p-3 scard border round">
                <div className='d-flex justify-content-between'>
                <h3>Wallet</h3>
                <img src='image 10.png'/>
                </div>
                <div className='d-flex justify-content-start text-left scard-line'>
                  A detailed overview of the budget allocation and transaction history.
                </div>
              </div>
            </div>
            <Link to="/business/view" className="col-md-4 mb-3">
              <div className="p-3 scard border round">
              <div className='d-flex justify-content-between'>
                <h3>Design Selection</h3>
                <img src='imagea.png'/>
              </div>
              <div className='d-flex justify-content-start text-left scard-line'>
                  A gallery to view and select designs submitted by designers.
                </div>
              </div>
            </Link>
            <div className="col-md-4 mb-3">
              <div className="p-3 scard border round">
              <div className='d-flex justify-content-between'>
                <h3>Post Management</h3>
                <img src='imagep.png'/>
              </div>
              <div className='d-flex justify-content-start text-left scard-line'>
                  Tools to create, edit, and delete posts.
                </div>
              </div>
            </div>
          </div>
    
          <div className="row mb-5">
            <div className="col-md-8 text-center">
              <div className='head text-dark text-left mt-4'>
              Post your <span className="text-info">advertisement</span> requirements
              </div>
              <p className="lead text-left text-dark">
              Unlock access to 10,000+ designers for hire with Dribbble, the largest platform of designers online. Simplify your hiring process today and never have to worry about where to hire top design talent again
              </p>
              <div className='text-left '>
              <button className="btn btn-info text-white mt-4 " onClick={closeModal}>Upload Design</button>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img src="Objects.png" alt="Cup Design" className="img-fluid" />
            </div>
          </div>
        </div>
      </>
     
       
      );
};

export default Adv;

