import { React, useState } from 'react'
import { NavLink , useParams } from "react-router-dom";
import axios from 'axios';
import './Signup.css'

function Signup() {
    const { type } = useParams();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        user_type: type,
        project_description: '',
        remember_me: false,
        agree_policy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('/api/createUser', formData);
            if (response.status === 201) {
                alert('User created successfully!');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Failed to create user. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="logo-container">
                <img src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg" alt="Company Logo" className="logo" />
            </div>
            <div class="text">
                <h1> <span>Hello!</span> It's good to meet you</h1>
                <p>Fill in the form and Create your Account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="row form-row">
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <label>First Name </label>
                            <input type="text" class="form-control" value={formData.first_name} onChange={handleChange} required/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" class="form-control" value={formData.last_name} onChange={handleChange}  required />
                        </div>
                    </div>
                </div>
                <div class="row form-row">
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <label>Phone No. </label>
                            <input type="text" class="form-control"  value={formData.phone}
                            onChange={handleChange} required/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" value={formData.email}
                            onChange={handleChange}  required />
                        </div>
                    </div>
                </div>
                <div class="row form-row">
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <label>Password </label>
                            <input type="text" class="form-control"  value={formData.password}
                            onChange={handleChange} required/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="text" class="form-control"  value={formData.confirmPassword}
                            onChange={handleChange}  required />
                        </div>
                    </div>
                </div>
                <button type="submit">Create Account</button>
                <p>Don't have an account? <NavLink to="/login">Log in</NavLink></p>
            </form>
        </div>

    )
}

export default Signup
