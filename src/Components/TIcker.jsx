import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Ticker = () => {
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("Fetching location...");

  // Function to get the user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          setLocation(`${data.address.city || data.address.town}, ${data.address.country}`);
        },
        () => {
          setLocation("Location unavailable");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  };

  useEffect(() => {
    getLocation();
    const interval = setInterval(() => {
      setDateTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker">
        <p>📍 {location} | 🕒 {dateTime} | Stay Updated with Us!</p>
      </div>
    </div>
  );
};

export default Ticker;
