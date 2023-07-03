import React, { useState, useRef, useEffect } from "react";
import SolarlifeLogo from "../../assets/SolarlifeLogo.png";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    if (storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: username,
        password: password,
      });

      if (response && response.status === 200) {
        if (rememberMe) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
        } else {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }

        navigate("/dashboard");
        console.log("Login Succesful");
      } else {
        const errorMessage = response.data && response.data.message ? response.data.message : "Invalid username or password. Please try again.";
      setError(errorMessage);
      }
    } catch (error) {
      // Handle error
      const errorMessage = error.response && error.response.data && error.response.data.message ? error.response.data.message : "An error occurred. Please try again later.";
      setError(errorMessage);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="login-container">
      <video ref={videoRef} loop muted>
        <source src="https://solarlife.co.nz/wp-content/uploads/2023/04/Solar_life_intro.mp4"></source>
      </video>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="logo">
            <img src={SolarlifeLogo} alt="SolarLife Logo" className="logo" />
          </div>
          <h1>Sign In</h1>
          <div className="input-icon">
            <i className="fas fa-user"></i>
            <input
              type="text"
              id="email"
              value={username}
              placeholder="User Name"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-icon">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember">Remember Me</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" id="loginButton">
            Login
          </button>
          <Link to="/password-reset">Reset Password</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

