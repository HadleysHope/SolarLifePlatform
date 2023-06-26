import React, { useState, useRef, useEffect } from "react";
import SolarlifeLogo from "../../assets/SolarlifeLogo.png";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../userSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateForm = () => {
    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    return true;
  };

  const login = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, userData);
      if (response.status === 200) {
        toast.success("Login Successful...");
        dispatch(setUser(response.data));
      }
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

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="login-container">
      <div>
        <video ref={videoRef} loop muted>
          <source src="https://solarlife.co.nz/wp-content/uploads/2023/04/Solar_life_intro.mp4" />
        </video>
      </div>
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
