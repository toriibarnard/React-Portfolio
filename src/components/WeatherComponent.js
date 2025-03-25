import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '43e45e2b6db9e779341e5a1e345cf1de';  // Replace with your OpenWeatherMap API key
  const CITY = 'Halifax';  // You can replace this with your desired city

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`); // Fetch weather data
        if (!response.ok) throw new Error('Failed to fetch weather');
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="weather-container">
      <h2>Current Weather</h2>
      <p>City: {weather.name}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherComponent;
