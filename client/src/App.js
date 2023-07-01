import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Inventory from "./components/content/inventory/Inventory";
import EditProduct from "./components/content/inventory/EditProduct";
import AddProduct from "./components/content/inventory/AddProduct";

const App = () => {
  // Development mode - testing purposes
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Inventory/>} />
          <Route path="/edit-product/:productId" element={<EditProduct/>}/>
          <Route path="/add-product" element={<AddProduct />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
