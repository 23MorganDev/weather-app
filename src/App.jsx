import React, { useState, useEffect } from "react";
import Search from "./components/search/search";
import Current from "./Components/currentWeather/current";
import Forecast from "./Components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_URL_KEY } from "./api";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_URL_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_URL_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const [weatherResponse, forecastResponse] = await Promise.all(
          responses.map((response) => response.json())
        );

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Log the state after it has been updated
    console.log(currentWeather);
    console.log(forecast);
  }, [currentWeather, forecast]);

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Current data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;
