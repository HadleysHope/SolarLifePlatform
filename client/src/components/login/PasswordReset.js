import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './PasswordReset.css';
import SolarlifeLogo from "../../assets/SolarlifeLogo.png";

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
          <video autoPlay loop muted className="background-video">
            <source src="https://solarlife.co.nz/wp-content/uploads/2023/04/Solar_life_intro.mp4"></source>
          </video>
          <div className="password-reset-form">
            <div className="logo">
              <img src={SolarlifeLogo} alt="SolarLife Logo" className="logo-image" />
            </div>
            <div className="Message">
            {message && <p className="message">{message}</p>}
            {error && <p className="error">{error}</p>}
            </div>
            <form className="password-reset-form" onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="input-email"
                  required
                />
              </div>
              <button type="submit" className="reset-button">
                Reset Password
              </button>
            </form>
            <Link to="/login" className="login-link">Login</Link>
          </div>
        </div>
      );
    };

export default PasswordReset;