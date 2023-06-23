import React, { useState } from "react";
import "./Navigation.css";
import Home from "../../content/home/Home";
import Placeholder from "../../content/placeholder/Placeholder";

const Navigation = ({ onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionSelect(option) {
    setSelectedOption(option);
    onOptionSelect(option); // Call the onOptionSelect prop with the selected option
  }

  let contentComponent;
  if (selectedOption === "home") {
    contentComponent = <Home />;
  } else if (selectedOption === "customers") {
    contentComponent = <Placeholder />;
  } else if (selectedOption === "scheduling") {
    contentComponent = <Placeholder />;
  } else if (selectedOption === "messaging") {
    contentComponent = <Placeholder />;
  } else if (selectedOption === "stock-management") {
    contentComponent = <Placeholder />;
  } else if (selectedOption === "reports") {
    contentComponent = <Placeholder />;
  } else if (selectedOption === "users") {
    contentComponent = <Placeholder />;
  }

  return (
    <nav className="navigation">
      <div className="dashboard-nav">
        <button
          className={`dashboard-button ${
            selectedOption === "home" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("home")}
        >
          Home
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "customers" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("customers")}
        >
          Customers
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "scheduling" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("scheduling")}
        >
          Scheduling
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "messaging" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("messaging")}
        >
          Messaging
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "stock-management" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("stock-management")}
        >
          Stock Management
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "reports" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("reports")}
        >
          Reports
        </button>
        <button
          className={`dashboard-button ${
            selectedOption === "users" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("users")}
        >
          Users
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
