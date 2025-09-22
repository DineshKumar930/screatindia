import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// src/components/Header/Header.jsx

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">
              <span className="logo-s">S</span>
              <span className="logo-i">I</span>
            </div>
            <span className="logo-text">Screat<span className="logo-highlight">India</span></span>
          </Link>

          <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`} 
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/add-article" 
              className={`nav-link ${location.pathname === "/add-article" ? "active" : ""}`} 
              onClick={closeMenu}
            >
              Share Story
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} 
              onClick={closeMenu}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;