import React from 'react';
import './Weather.css';

const Weather = () => {
  return (
    <section className="weather">
      <div className="weather-label">
        Weather Forecast
      </div>
      <div className="weather-bar">
        <table className="weather-table">
          <tbody>
            <tr>
              <td>
                <div className="day">Mo</div>
                <div><i className="wi wi-day-sunny"></i></div>
                <div className="temp">25°C</div>
              </td>
              <td>
                <div className="day">Tues</div>
                <div><i className="wi wi-cloudy"></i></div>
                <div className="temp">25°C</div>
              </td>
              <td>
                <div className="day">Weds</div>
                <div><i className="wi wi-day-cloudy"></i></div>
                <div className="temp">25°C</div>
              </td>
              <td>
                <div className="day">Thur</div>
                <div><i className="wi wi-rain"></i></div>
                <div className="temp">25°C</div>
              </td>
              <td>
                <div className="day">Fri</div>
                <div><i className="wi wi-thunderstorm"></i></div>
                <div className="temp">25°C</div>
              </td>
              <td>
                <div className="day">Sat</div>
                <div><i className="wi wi-snow"></i></div>
                <div className="temp">25°C</div>
              </td>
              <td>
                <div className="day">Sun</div>
                <div><i className="wi wi-fog"></i></div>
                <div className="temp">25°C</div>
              </td>
              <td>
                <div className="day">Mon</div>
                <div><i className="wi wi-windy"></i></div>
                <div className="temp">25°C</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Weather;
