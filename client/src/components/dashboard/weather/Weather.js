
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('/api/forecast', {
          params: {
            city: 'Christchurch, NZ',
          },
        });
        setForecast(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {forecast !== null ? (
        <div>
          <h2>5-Day Forecast for {forecast.city.name}</h2>
          {forecast.list.map((item) => (
            <div key={item.dt}>
              <p>Date: {new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p>Temperature: {item.main.temp}°C</p>
              <p>Humidity: {item.main.humidity}%</p>
              <p>Wind Speed: {item.wind.speed} km/h</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;