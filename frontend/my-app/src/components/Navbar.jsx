import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://img.icons8.com/ios-filled/50/923737/like.png"
          alt="HemoCell Logo"
        />
        <span className="logo-text">Blood Prism</span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      <Link to="/">About us</Link>

        <Link className="donate-btn" to="/donorregistration">
          Donate Blood
        </Link>
        <Link to="/adminlogin">Admin Login</Link>
        <Link to="/">Need Blood</Link>
        <Link to="/contact">Contact us</Link>

        <Link to="/host-blood-drive">Host Blood Drive</Link>
      </nav>
    </header>
  );
};

export default Navbar;
