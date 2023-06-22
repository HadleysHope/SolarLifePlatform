import React from 'react';
import SolarlifeLogo from '../../../assets/SolarlifeLogo.png';
import "./Header.css";

const Header = () => {
  // Assume you have a state or variable that holds the username
  const username = "John Doe";

  return (
    <header className="dashboard-header">
      <div className="dashboard-logo">
        <img src={SolarlifeLogo} alt="SolarLife Logo" className="logo" />
      </div>
      <div className="dashboard-info">
        <label className="welcome-label">Welcome, {username}</label>
        <div className="settings-icon">
          <i className="fas fa-cog"></i>
        </div>
      </div>
      <h1 className="dashboard-heading">SolarLife Dashboard</h1>
    </header>
  );
};

export default Header;
