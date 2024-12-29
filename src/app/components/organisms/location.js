"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const CurrentTimeAndWeather = () => {
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  // Your WeatherAPI key
  const API_KEY = "270ff04d6ed642ac97a112730231003"; // Store the key in .env.local

  // Function to update the time
  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const amPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

    setTime(`${hours}:${minutes} ${amPm}`);
  };

  // Function to fetch the current weather
  const fetchWeatherData = async () => {
    try {
      // Using WeatherAPI to get the current weather
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Amsterdam`
      );
      const data = await response.json();

      const temp = data.current.temp_c;
      setTemperature(temp);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setError("23");
    }
  };

  useEffect(() => {
    // Update time immediately on mount
    updateTime();
    // Fetch weather data
    fetchWeatherData();
    // Set interval to update the time every minute
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hidden lg:flex text-center flex-col items-end	">
      {temperature !== null ? (
        <p className="text-sm font-medium">{temperature}°C Netherlands</p>
      ) : (
        <p className="texxt-sm text-red-500">{error}°C</p>
      )}

      <p className="text-sm">{time}</p>
    </div>
  );
};

export default CurrentTimeAndWeather;
