import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    // Fetch authentication status from the backend
    const backendUrl = "http://localhost:3001"; // Replace with your backend server URL

    axios
      .get(`${backendUrl} /auth/login `)
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Development mode - testing purposes
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
