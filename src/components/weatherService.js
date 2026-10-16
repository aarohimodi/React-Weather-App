const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
export const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`,
  );
  const data = await response.json();
  if (data.cod != 200) {
    return { error: data.message };
  }
  return {
    city: data.name,
    temp: data.main.temp,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    description: data.weather[0].description,
  };
};
