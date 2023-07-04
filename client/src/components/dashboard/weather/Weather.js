import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "3b78f4768b8e6731f90b88fcbf5e2999";
        const city = "Christchurch,NZ";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, []);
  return (
    <div className="weather-container">
      {weatherData !== null ? (
        <div className="weather-content">
          <h2>Current Weather in {weatherData.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
          <div className="weather-details">
            <div>
              <span>Description:</span>
              <span>{weatherData.weather[0].description}</span>
            </div>
            <div>
              <span>Temperature:</span>
              <span>{weatherData.main.temp}°C</span>
            </div>
            <div>
              <span>Humidity:</span>
              <span>{weatherData.main.humidity}%</span>
            </div>
            <div>
              <span>Wind Speed:</span>
              <span>{weatherData.wind.speed} km/h</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
export default Weather;