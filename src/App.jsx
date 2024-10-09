import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage.jsx';
import TemperatureChartPage from './Components/Chart/TemperatureChartPage.jsx';
import './App.css'; // Make sure to import the CSS file

const App = () => {
  const [forecastWeather, setForecastWeather] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/temperature-chart" className={({ isActive }) => isActive ? 'active' : ''}>Temperature Trend</NavLink>
        </nav>
        <div className="homepage">
          <Routes>
            <Route path="/" element={<HomePage setForecastWeather={setForecastWeather} />} />
            <Route path="/temperature-chart" element={<TemperatureChartPage forecastWeather={forecastWeather} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

