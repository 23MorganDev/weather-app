import React from "react";
import TemperatureChart from "./TemperatureChart";
import "./TemperatureChart.css"; // Import the CSS file

const TemperatureChartPage = ({ forecastWeather }) => {
  console.log("ForecastWeather in TemperatureChartPage:", forecastWeather);

  if (
    !forecastWeather ||
    !forecastWeather.temperatures
  ) {
    console.error("Forecast weather data is missing or incomplete", forecastWeather);
  }
  return (
    <div className="temperature-page">
      <h1 className="temperature-title">Temperature Trend For The Next Seven Days</h1>
      {forecastWeather &&
      forecastWeather.temperatures.length > 0 ? (
        <TemperatureChart
          days={forecastWeather.forecastDays}
          temperatures={forecastWeather.temperatures}
        />
      ) : (
        <p className="no-data">No forecast data available.</p>
      )}
    </div>
  );
};

export default TemperatureChartPage;
