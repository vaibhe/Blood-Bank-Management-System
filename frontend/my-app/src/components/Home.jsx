import React from "react";
import { Link } from "react-router-dom";
import "../CSS/homepage.css" // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          <img
            src="https://img.icons8.com/ios-filled/50/923737/like.png"
            alt="HemoCell Logo"
          />
          <span className="logo-text">Blood Prism</span>
        </div>
        <nav className="nav-links">
        <Link to="/adminlogin">Admin Login</Link>
          <Link to="/">Home</Link>
          <Link to="/host-blood-drive">Host Blood Drive</Link>
          
          <Link className="donate-btn" to="/donate-blood">
            Donate Blood
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h3>Give the Gift of Life</h3>
          <h1>Your Blood Can Make A Difference</h1>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
