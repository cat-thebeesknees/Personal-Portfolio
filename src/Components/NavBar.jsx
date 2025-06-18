import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
          <nav id="navlinks">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
      </div>

      <ul id="navUl" className={menuOpen ? "open" : ""}>
        <li className="nav-link">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li className="nav-link">
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        </li>
        <li className="nav-link">
          <Link to="/reviews" onClick={() => setMenuOpen(false)}>Resume & Reviews</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
