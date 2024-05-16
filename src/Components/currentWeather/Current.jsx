import React from "react";
import Current from "./Current.css"

const current = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weatherStatus">{data.weather[0].description}</p>
        </div>
        <img className="weatherIcon" alt="weather" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameterRow">
            <span className="parameterLabels">Details</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabels">Feels like</span>
            <span className="parameterValue">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabels">Wind</span>
            <span className="parameterValue">{data.wind.speed} m/s</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabels">Humidity</span>
            <span className="parameterValue">{data.main.humidity}%</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabels">Pressure </span>
            <span className="parameterValue">{data.main.pressure} kPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default current;
