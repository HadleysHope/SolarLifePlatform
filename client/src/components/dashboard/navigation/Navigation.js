import React from "react";
import "./Navigation.css";

const Navigation = ({ onOptionSelect, selectedOption }) => {
  return (
    <nav className="navigation">
      <div className="dashboard-nav">
        <button
          className={`dashboard-button ${
            selectedOption === "home" ? "active" : ""
          }`}
          onClick={() => onOptionSelect("home")}
        >
          Home
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "customers" ? "active" : ""
          }`}
          onClick={() => onOptionSelect("customers")}
        >
          Customers
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "scheduling" ? "active" : ""
          }`}
          onClick={() => onOptionSelect("scheduling")}
        >
          Scheduling
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "messaging" ? "active" : ""
          }`}
          onClick={() => onOptionSelect("messaging")}
        >
          Messaging
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "stock-management" ? "active" : ""
          }`}
          onClick={() => onOptionSelect("stock-management")}
        >
          Stock Management
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "reports" ? "active" : ""
          }`}
          onClick={() => onOptionSelect("reports")}
        >
          Reports
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "users" ? "active" : ""
          }`}
          onClick={() => onOptionSelect("users")}
        >
          Users
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
