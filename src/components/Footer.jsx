const Footer = () => {
  return (
    <footer
      style={{
        padding: "1rem",
        backgroundColor: "#0077b6",
        color: "white",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <p>🌤️ MeteoApp © {new Date().getFullYear()} - Powered by OpenWeather</p>
    </footer>
  );
};
export default Footer;
