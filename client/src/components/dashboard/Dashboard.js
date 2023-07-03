import React, { useState } from "react";
import "./Dashboard.css";
import Header from "./header/Header";
import Weather from "./weather/Weather";
import Navigation from "./navigation/Navigation";
import Home from "../content/home/Home";
import Placeholder from "../content/placeholder/Placeholder";
import Inventory from "../content/inventory/Inventory";
import Users from "../content/users/Users";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("home");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

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
    contentComponent = <Inventory />;
  } else if (selectedOption === "reports") {
    contentComponent = <Placeholder />;
  } else if (selectedOption === "users") {
    contentComponent = <Users />;
  }

  return (
    <div>
      <Header />
      <Weather />
      <Navigation onOptionSelect={handleOptionSelect} />
      <div className="dashboard-content">{contentComponent}</div>
    </div>
  );
};

export default Dashboard;
