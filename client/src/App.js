import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Inventory from "./components/content/inventory/Inventory";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/inventory" element={<Inventory/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
