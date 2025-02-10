import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/prism_logo.png" 


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">


      <div className="logo">

        <img
          src={logo}
          alt="BloodPrism Logo"

        />
        <span className="logo-text">Blood Prism</span>

      </div>


      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>

        <Link className="donate-btn" to="/donorform">
          Donate Blood
        </Link>
        <Link to="/adminlogin">Admin Login</Link>
        <Link to="/patientform">Need Blood</Link>
        {/* <Link to="/host-blood-drive">Host Blood Drive</Link> */}
        <Link to="/contact">Contact us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
