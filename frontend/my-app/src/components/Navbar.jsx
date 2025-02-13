import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/prism_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the role and username from localStorage
    const role = localStorage.getItem("role");
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user); // Parse the JSON string
      setUsername(parsedUser.name); // Set the username
    }
    setUserRole(role);
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.clear();
    // Redirect to homepage
    window.location.href = "/";
  };

  const renderLinks = () => {
    if (userRole === "DONOR" || userRole === "PATIENT") {
      return (
        <>
          <span className="greeting">Hello, {username}!</span>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      );
    } else {
      // Default links for unauthenticated users
      return (
        <>
          <Link to="/">Home</Link>
          <Link to="/signin">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/contact">Contact</Link>
        </>
      );
    }
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="BloodPrism Logo" />
        <span className="logo-text">Blood Prism</span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {renderLinks()}
      </nav>
    </header>
  );
};

export default Navbar;
