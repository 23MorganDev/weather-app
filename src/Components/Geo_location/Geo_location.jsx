import React, { useState, useEffect } from "react";

const Geo_location = ({ onLocationChange }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported in your browser");
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            onLocationChange({ latitude, longitude });
          },
          (err) => {
            setError("Unable to retrieve your location");
          }
        );
      }
    };
    fetchLocation();
  }, [onLocationChange]);

  return (
    <div className="geo-location">
      {error && <p>{error}</p>}
    </div>
  );
};

export default Geo_location;

