import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div>
            <h1> Password Reset</h1>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div> 
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            <p>
                Remember your Password? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default PasswordReset;