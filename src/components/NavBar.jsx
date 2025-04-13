import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{ padding: "1rem", backgroundColor: "#0077b6", color: "white" }}
    >
      <h2 style={{ display: "inline" }}>☀️ MeteoApp</h2>
      <div style={{ float: "right" }}>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        {/* Puoi aggiungere altre pagine se vuoi */}
      </div>
    </nav>
  );
};

export default NavBar;
