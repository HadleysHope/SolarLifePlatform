import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import axios from "axios";
import { useDispatch } from "react-redux";

axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const backendUrl = "http://localhost:3001";

    axios
      .post(`${backendUrl}/auth/login`)
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Login />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
