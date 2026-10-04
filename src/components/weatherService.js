const API_KEY = "61d2d39ae7187d290ec92208871b7420";

export const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
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
