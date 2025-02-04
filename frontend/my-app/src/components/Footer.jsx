import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Blood Prism</h2>
          <p>Donate blood, save lives!</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/donorregistration">Donate Blood</Link>
          <Link to="/request-blood">Request Blood</Link>
          <Link to="/host-blood-drive">Host Drive</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <p>📞 +92-304-050-9060</p>
          <p>📧 help@hemocell.com</p>
          <p>📍 Mumbai, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Blood Prism | Designed by <a href="#">Cdac</a></p>
      </div>
    </footer>
  );
};

export default Footer;
