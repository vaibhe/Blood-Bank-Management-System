import React from "react";
import "../CSS/homepage.css"; // Import the CSS file
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const HomePage = () => {
  return (
    <div className="homepage">

      {/* This is Navbar component*/}
      <Navbar></Navbar>
    
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h3>Give the Gift of Life</h3>
          <h1>Your Blood Can Make A Difference</h1>
        </div>
      </section>
     <hr></hr>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h3>Give the Gift of Life</h3>
          <h1>Your Blood Can Make A Difference</h1>
        </div>
      </section>

      <Footer/>


    </div>
  );
};

export default HomePage;
