import React from "react";
import { Link } from "react-router-dom";
import "../CSS/homepage.css"; // Import the CSS file

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
        <Link className="donate-btn" to="/donorregistration">
            Donate Blood
          </Link>
          <Link to="/adminlogin">Admin Login</Link>
          <Link to="/">Patient Login</Link>
          <Link to="/host-blood-drive">Host Blood Drive</Link>
        
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

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Blood Prism</h2>
            <p>You don’t have to be a doctor to save a life: Just donate blood</p>
          </div>
          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/donorregistration">Donate Blood</Link></li>
              <li><Link to="/request-blood">Request Blood</Link></li>
              <li><Link to="/donate-money">Donate Money</Link></li>
              <li><Link to="/host-blood-drive">Host Blood Drive</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/adminlogin">Admin Dashboard</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>+92-304-050-9060</li>
              <li>help@hemocell.com</li>
              <li>Mumbai, India</li>
              <li>Open 24/7</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Blood Prism - Website design by <a href="#">Cdac</a></p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
