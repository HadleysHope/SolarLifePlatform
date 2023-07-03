import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Inventory from "./components/content/inventory/Inventory";
import EditProduct from "./components/content/inventory/EditProduct";
import AddProduct from "./components/content/inventory/AddProduct";
import Users from "./components/content/users/users";
import EditUser from "./components/content/users/UsersEdit";
import AddUser from "./components/content/users/UsersAdd";
import PasswordReset from "./components/login/PasswordReset";


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
          <Route path="/users" element={<Users/>}/>
          <Route path="/edit-user/:userId" element={<EditUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
