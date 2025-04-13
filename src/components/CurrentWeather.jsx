import { useEffect, useState } from "react";

const API_KEY = "9f5722632e5de11e5410a07150346f95";

const CurrentWeather = ({ city }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const json = await res.json();
      setData(json);
    };

    fetchWeather();
  }, [city]);

  return data ? (
    <div>
      <p>🌡 Temperatura: {data.main.temp}°C</p>
      <p>☔ Pioverà?: {data.weather[0].main.includes("Rain") ? "Sì" : "No"}</p>
      <p>💨 Vento: {data.wind.speed} m/s</p>
    </div>
  ) : (
    <p>Caricamento meteo...</p>
  );
};

export default CurrentWeather;
