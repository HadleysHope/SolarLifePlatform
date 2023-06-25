import React, { useState, useRef, useEffect } from "react";
import SolarlifeLogo from "../../assets/SolarlifeLogo.png";
import "./Login.css";

import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  // const [email, setUseremail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  // Login User
  const loginUser = async (userData) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/users/login`,
        userData
      );
      if (response.statusText === "OK") {
        toast.success("Login Successful...");
      }
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    // setIsLoading(true);
    // try {
    const data = await loginUser(userData);
    console.log(data);
    navigate("/dashboard");
    // } catch (error) {
    // }
  };

  const videoRef = useRef(null);

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
      <form onSubmit={login}>
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
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-icon">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" id="loginButton">
            Login
          </button>
          <h5>Forgot your password?</h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
