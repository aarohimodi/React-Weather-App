import React from "react";

function WeatherCard({ weather }) {
  const getWeatherIcon = () => {
    const desc = weather.description.toLowerCase();
    if (desc.includes("clear")) return "☀️";
    if (desc.includes("cloud")) return "☁️";
    if (desc.includes("rain")) return "🌧️";
    if (desc.includes("snow")) return "❄️";
    if (desc.includes("thunder")) return "⛈️";

    return "🌍";
  };
  return (
    <div className="mt-6 bg-white shadow-lg rounded-2xl p-6 w-[600px] mx-auto text-center ">
      <div className="text-5xl mb-2">{getWeatherIcon()}</div>
      <h2 className="text-2xl font-bold mb-2">{weather.city}</h2>
      <p className="text-4xl font-semibold text-blue-500 mb-4">
        Temp: {weather.temp}°C
      </p>
      <p className="capitalize text-gray-600 mb-4"> {weather.description}</p>

      <div className="flex justify-between text-sm text-gray-500">
        <p> Humidity: {weather.humidity}%</p>
        <p> Wind: {weather.wind} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
