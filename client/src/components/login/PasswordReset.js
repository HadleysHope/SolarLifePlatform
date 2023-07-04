import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './PasswordReset.css';
import SolarlifeLogo from "../../assets/SolarlifeLogo.png";
import VideoComponent from "./Video";

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/auth/reset-password", {
                email: email,
            });

            if (response.status === 200) {
                setMessage("Password reset email sent. Please check your inbox");
                setError("");
            }
        } catch (error) {
            setMessage("");
            setError("Failed to send password reset email. Please try Again.")
        }
    };
    return (
        <div className="password-reset-container">
          <VideoComponent src="https://solarlife.co.nz/wp-content/uploads/2023/04/Solar_life_intro.mp4" />
          <form onSubmit={handleSubmit}>
            <div className="password-reset-form">
              <div className="logo">
                <img src={SolarlifeLogo} alt="SolarLife Logo" className="logo" />
              </div>
              <h1>Forgot Password</h1>
              <div className="input-icon">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleEmailChange}
                  className="input-email"
                  required
                />
              </div>
                {message && <p className="message">{message}</p>}
                {error && <p className="error">{error}</p>}
                
            
            <button type="submit" className="resetButton">
              Reset Password
            </button>
            <Link to="/login" className="login-link">
              Back to Login
            </Link>
          </div>
          </form>
        </div>
      );
      };
      
      export default PasswordReset;
      
      