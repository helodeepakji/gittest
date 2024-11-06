import { React, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import './Signup.css'

function Signup() {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        user_type: '',
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
                <div className="input-group">
                    <div className="first">
                        <label htmlFor="first_name">First name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="second">
                        <label htmlFor="last_name">Last name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div className="first">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="second">
                        <label htmlFor="phone">Phone number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <div className="first">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="second">
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="radio-group">
                    <label>Select your industry</label>
                    <input
                        type="radio"
                        id="user_type_business"
                        name="user_type"
                        value="business"
                        checked={formData.user_type === 'business'}
                        onChange={handleChange}
                    />
                    <label htmlFor="user_type_business">Business</label>
                    <input
                        type="radio"
                        id="user_type_designer"
                        name="user_type"
                        value="designer"
                        checked={formData.user_type === 'designer'}
                        onChange={handleChange}
                    />
                    <label htmlFor="user_type_designer">Designer</label>
                    <input
                        type="radio"
                        id="user_type_retailer"
                        name="user_type"
                        value="retailer"
                        checked={formData.user_type === 'retailer'}
                        onChange={handleChange}
                    />
                    <label htmlFor="user_type_retailer">Retailer</label>
                </div>

                <input
                    type="text"
                    name="project_description"
                    value={formData.project_description}
                    placeholder="Tell Us About Your Project"
                    onChange={handleChange}
                />

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="remember_me"
                        name="remember_me"
                        checked={formData.remember_me}
                        onChange={handleChange}
                    />
                    <label htmlFor="remember_me">Remember Me</label>
                    <input
                        type="checkbox"
                        id="agree_policy"
                        name="agree_policy"
                        checked={formData.agree_policy}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="agree_policy">I agree to all Terms & Privacy Policy</label>
                </div>

                <button type="submit">Create Account</button>
                <p>Don't have an account? <NavLink to="/login">Log in</NavLink></p>
            </form>
        </div>

    )
}

export default Signup
