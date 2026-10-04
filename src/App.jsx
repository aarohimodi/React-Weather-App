import { useState } from "react";

import "./App.css";
import { getWeather } from "./components/weatherService";
import WeatherCard from "./components/WeatherCard";

function App() {
  const getbg = () => {
    if (!weather) return "from-blue-100 to-blue-300";
    const desc = weather.description.toLowerCase();
    if (desc.includes("clear")) return "from-yellow-200 to-orange-300";
    if (desc.includes("cloud")) return "from-gray-300 to-gray-500";
    if (desc.includes("rain")) return "from-blue-400 to-blue-700";
    if (desc.includes("snow")) return "from-blue-100 to-white";

    return "from-blue-100 to-blue-300";
  };
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = async () => {
    if (!city) {
      setError("Please enter city name");
      return;
    }
    try {
      setLoading(true);
      setError("");
      setWeather(null);
      const data = await getWeather(city);
      console.log(data);
      if (data.error) {
        setError("city not found");
        setWeather(null);
      } else {
        setWeather(data);
        console.log(weather);
      }
    } catch (error) {
      setError("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-br ${getbg()} flex flex-col items-center justify-center`}
      >
        <h1 className="mb-5 text-5xl">Weather App</h1>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          className="px-4 py-2 rounded border outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-2 py-2 ml-2 bg-blue-700 text-white rounded-lg mt-3"
        >
          Search
        </button>
        {loading && (
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
        )}

        {/* Error */}
        {error && <p className="text-red-500 font-semibold mt-">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </>
  );
}

export default App;
