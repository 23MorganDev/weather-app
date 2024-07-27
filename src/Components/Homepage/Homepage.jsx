import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ForecastWeather from "../Forecast/ForecastWeather";
import Geo_location from "../Geo_location/Geo_location";
import { WEATHER_API_URL, WEATHER_URL_KEY } from "../../api";

// Fetching weather data using location
const fetchWeatherData = async (lat, lon, cityLabel, setCurrentWeather, updateForecastWeather, setForecastWeather) => {
  try {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_URL_KEY}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_URL_KEY}&units=metric`
    );

    const [currentWeatherResponse, forecastWeatherResponse] = await Promise.all([currentWeatherFetch, forecastWeatherFetch]);

    const weatherData = await currentWeatherResponse.json();
    const forecastData = await forecastWeatherResponse.json();

    const forecastWeatherList = forecastData.list?.slice(0, 7) || [];

    const temperatures = forecastWeatherList.map((item) => {
      console.log("Item for temperatures:", item);
      return Math.round(item.main.temp_max);
    });

    const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    setCurrentWeather({ city: cityLabel, ...weatherData });
    const newForecastWeather = {
      city: cityLabel,
      list: forecastWeatherList,
      temperatures,
      forecastDays,
    };

    updateForecastWeather(newForecastWeather);
    setForecastWeather(newForecastWeather); // Update forecast in the parent component
  } catch (err) {
    console.log(err);
  }
};

const HomePage = ({ setForecastWeather }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, updateForecastWeather] = useState({
    city: "",
    list: [],
    temperatures: [],
    forecastDays: [],
  });

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    fetchWeatherData(lat, lon, searchData.label, setCurrentWeather, updateForecastWeather, setForecastWeather);
  };

  const handleLocationChange = (location) => {
    const { latitude, longitude } = location;
    fetchWeatherData(latitude, longitude, "Current Location", setCurrentWeather, updateForecastWeather, setForecastWeather);
  };

  useEffect(() => {
    console.log("Current Weather:", currentWeather);
    console.log("Forecast Weather:", forecastWeather);
  }, [currentWeather, forecastWeather]);

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      <Geo_location onLocationChange={handleLocationChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && forecastWeather.temperatures.length > 0 && (
        <ForecastWeather data={forecastWeather} />
      )}
    </div>
  );
};

export default HomePage;

