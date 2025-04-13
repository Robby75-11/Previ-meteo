import { useEffect, useState } from "react";

const API_KEY = "deqypidfxRCm_Ge5boL6N7NxeBa-f2z8_MYaTYeSFq0";

const CityImage = ({ city }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${city}&client_id=${API_KEY}`
      );
      const json = await res.json();
      setUrl(json.results[0]?.urls.regular || "");
    };

    fetchImage();
  }, [city]);

  return url ? (
    <img
      src={url}
      alt={city}
      style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
    />
  ) : (
    <p>Immagine non disponibile</p>
  );
};

export default CityImage;
