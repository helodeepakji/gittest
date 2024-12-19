import { React, useState } from 'react'
import './Login.css';
import loginImg from './Assests/pic.png'
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                if (data.user_type === 'business') {
                    navigate('/business/home');
                } else if (data.user_type === 'designer') {
                    navigate('/designer/home');
                } else if (data.user_type === 'retailer') {
                    navigate('/retailer/home');
                } else {
                    navigate('/');
                }
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred');
        }
    };

    return (
        <div>
            <div className="login-container">
                <div className="left-side">
                    <img src={loginImg} alt={loginImg} />
                </div>
                <div className="right-side">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <h2>Login in to your account</h2>
                    <div className="google-login">
                        <FaGoogle size={20} />

                        <p style={{ marginLeft: '10px' }}>Sign in with Google</p>
                    </div>
                    <div className='or-divider'>
                        <span>or</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" />
                        </div>
                        <div className="checkBox">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label for="remember">Remember me</label>
                            </div>
                            <a href="#" className="forget-password">Forget Password?</a>

                        </div>
                        <button className="login-button">Login</button>
                    </form>
                    <div className="dont-have-account">
                        <span>Don't have an account?</span>
                        <NavLink to="/proceed" className="create-account">Create</NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login