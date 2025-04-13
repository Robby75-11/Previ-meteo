import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Homepage = () => {
  const [previousSearches, setPreviousSearches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("previousSearches")) || [];
    setPreviousSearches(saved);
  }, []);

  const handleSearch = (city) => {
    if (!city) return;
    navigate(`/details/${city}`);
    const updated = [...new Set([city, ...previousSearches])].slice(0, 5); // max 5 ricerche
    localStorage.setItem("previousSearches", JSON.stringify(updated));
    setPreviousSearches(updated);
  };

  return (
    <>
      <NavBar />
      <div style={{ padding: "1rem" }}>
        <h1>Benvenuto su MeteoApp</h1>
        <SearchBar onSearch={handleSearch} /> {/* ⬅️ Qui la usi */}
        <div style={{ marginTop: "1rem" }}>
          <h3>Ricerche recenti:</h3>
          {previousSearches.map((city, index) => (
            <button
              key={index}
              onClick={() => handleSearch(city)}
              style={{ marginRight: "0.5rem" }}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
