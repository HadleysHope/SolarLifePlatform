import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="dashboard-content">
      <div className="home-content">
        <div className="home-welcome">
          <h2>Welcome to the SolarLife Company Dashboard</h2>
          <p>Stay up-to-date with the latest news and updates.</p>
        </div>
        <div className="image-grid">
          <div className="image-item">
            <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/Solar-Life-Commercial-Installation-7.jpg" alt="Solar Panels" />
            <h3>Company Announcements</h3>
            <ul>
              <li>Join us for the annual company picnic on July 15th!</li>
              <br></br>
              <li>Reminder: New Project kick-off meeting on Julty 20th.</li>
              <br></br>
              <li>Updated employee policies and guidelines</li>
            </ul>
          </div>
          <div className="image-item">
            <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/Solar-Life-Commercial-Installation-5.jpg" alt="Solar Panels" />
            <h3>Ongoing Tasks</h3>
            <ul>
              <li>Project ABC - In progress (Deadline: August 31st)</li>
              <br></br>
              <li>Task XYZ - Pending (Deadline: July 10th)</li>
            </ul>
          </div>
          <div className="image-item">
            <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/Solar-Life-Commercial-Installation-11.jpg" alt="Solar Panels" />
            <h3>Performance Metrics </h3>
            <p>Sales Figures: $500,000 (June 2023)</p>
            <p>Customer Satisfaction Rating: 4.7/5</p>
          </div>
          <div className="image-item">
            <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/Solar-Life-Commercial-Installation-6.jpg" alt="Solar Panels" />
            <h3>Employee Recognition</h3>
            <p>Congratulations to John Doe for exceeding sales tagets!</p>
            <p>Employee of the Month: Jane Smith</p>
          </div>
          <div className="image-item">
            <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/Solar-Life-Commercial-Installation-12-2.jpg" alt="Solar Panels" />
            <h3>Upcoming Events</h3>
            <p>Training Session: Installation Techniques (July 12, 9AM - 12PM)</p>
            <p>Company Town Hall Meeting (July 25, 3PM - 5PM)</p>
          </div>
          <div className="image-item">
              <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/Solar-Life-Commercial-Installation-9.jpg" alt="Solar Panels" />
              <h3>Internal Resources</h3>
              <ul>
                <li>Employee Handbook</li>
                <br></br>
                <li>Code of Conduct</li>
                <br></br>
                <li>Safety Guidelines</li>
              </ul>
          </div>
          <div className="image-item">
              <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/Solar-Life-Commercial-Installation-4.jpg" alt="Solar Panels" />
              <h3>Industry Updates</h3>
              <ul>
                <li>New Solar Panel Effiiceny Standards Introduced</li>
                <br></br>
                <li>Solar Energy Market Growth Forecast</li>
              </ul>
          </div>
          <div className="image-item">
              <img src="https://solarlife.co.nz/wp-content/uploads/2023/05/FSE-Online-Distribution-1.jpg" alt="Solar Panels" />
              <h3>Customer Reviews</h3>
              <p>Read reviews and testimonials from our satisfied customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
