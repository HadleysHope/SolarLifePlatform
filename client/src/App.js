import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Fetch authentication status from the backend
    const backendUrl = "http://localhost:3001"; // Replace with your backend server URL

    axios
      .get(`${backendUrl}/auth/check-auth`)
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Development mode - testing purposes
  return (
    <div className="app">{isAuthenticated ? <Dashboard /> : <Login />}</div>
  );
};

export default App;
