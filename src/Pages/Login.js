import React from 'react'
import './Login.css';
import loginImg from './Assests/pic.png'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="login-container">
                <div className="left-side">
                    <img src={loginImg} alt={loginImg} />
                </div>
                <div className="right-side">
                    <h2>Login in to your account</h2>
                    <div className="google-login">
                        <FaGoogle  size={20}/>
                        
                        <p style={{marginLeft:'10px'}}>Sign in with Google</p>
                    </div>
                    <div className='or-divider'>
                        <span>or</span>
                    </div>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
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
                        <a href="#" className="create-account">Create</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login