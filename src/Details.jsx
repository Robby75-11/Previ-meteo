import { useParams } from "react-router-dom";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";
import CityImage from "./components/CityImage";

const Details = () => {
  const { city } = useParams();

  return (
    <div>
      <h2>Meteo a {city}</h2>
      <CityImage city={city} />
      <CurrentWeather city={city} />
      <DailyForecast city={city} />
    </div>
  );
};

export default Details;
