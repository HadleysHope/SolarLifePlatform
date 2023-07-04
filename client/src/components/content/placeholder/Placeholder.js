import React from 'react';
import './Placeholder.css';

const Placeholder = () => {
  return (
    <section className="dashboard-content">
    <div className="placeholder">
      <div className="placeholder-message">
        <h2 className="placeholder-title">Future Features Roadmap</h2>
        <ul className="placeholder-list">
          <li>Upgrade Weather Forecast to 5 days</li>
          <li>Customer Relationship Manager</li>
          <li>Scheduling Console</li>
          <li>Internal Company Messaging Facility</li>
          <li>Reports Generator</li>
          <li>Expand Stock Inventory with integration into ordering and accounts</li>
        </ul>
      </div>
      <div className="placeholder-hero">
        <h3 className="placeholder-hero-title">This Platform was built by</h3>
        <h2 className="placeholder-hero-team">Digital Dream Team</h2>
        <div className="placeholder-hero-links">
          <a href="mailto:teamlead@digitaldreamteam.com" className="placeholder-hero-link">Contact Team Lead</a>
          <a href="mailto:info@digitaldreamteam.com" className="placeholder-hero-link">General Inquiries</a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Placeholder;
