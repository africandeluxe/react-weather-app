import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components for the app
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const WeatherInfo = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;


const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async () => {
    if (city) {
      const apiKey = '7fe3a353672448deadc171739240109'; 
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    }
  };

  return (
    <Container>
      <h1>Weather App</h1>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <Button onClick={fetchWeather}>Get Weather</Button>
      {weather && (
        <WeatherInfo>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </WeatherInfo>
      )}
    </Container>
  );
};

export default WeatherApp;