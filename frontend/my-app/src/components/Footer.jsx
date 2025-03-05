import React from "react";
import { Link } from "react-router-dom";
import "../CSS/footer.css";
import logo from "../images/prism_logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
        <img
          src={logo}
          alt="BloodPrism Logo"
         
        
         
        />
          <h2>Blood Prism</h2>
          <p>Donate blood, save lives!</p>
        </div>
        <div className="footer-links">
         <p> <Link to="/">Home</Link> </p>
         <p><Link to='/signin'>Login</Link></p>
         <p><Link to='/signup'>Sign up</Link></p>
        <p> <Link to="/contact">Contact</Link> </p>
        </div>
        <div className="footer-contact">
          <p>📞 +91-9082811025</p>
          <p>📧 <a href="mailto:bloodprism25@gmail.com">bloodprism25@gmail.com</a></p>
          <p>📍 Mumbai, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Blood Prism | Designed by <a href="#">Cdac</a></p>
      </div>
      <div>
        
      </div>
    </footer>
  );
};

export default Footer;
