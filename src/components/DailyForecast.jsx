import { useEffect, useState } from "react";

const API_KEY = "9f5722632e5de11e5410a07150346f95";

const DailyForecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      const json = await res.json();
      const daily = json.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily.slice(0, 5)); // Prossimi 5 giorni
    };

    fetchForecast();
  }, [city]);

  return (
    <div>
      <h3>Previsioni prossimi giorni:</h3>
      <ul>
        {forecast.map((item, idx) => (
          <li key={idx}>
            {new Date(item.dt_txt).toLocaleDateString()} - {item.main.temp}°C -{" "}
            {item.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyForecast;
