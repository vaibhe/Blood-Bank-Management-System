import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/admindashboard.css";
import logo from "../images/prism_logo.png";
import blood_drop from "../images/blood_drop.png";

const AdminDashBoard = () => {
  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:8080/api/stock"; // API URL to fetch blood stock
  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  // State to store blood stock quantities
  const [bloodStock, setBloodStock] = useState({});

  useEffect(() => {
    // Fetch stock for each blood type
    const fetchBloodStock = async () => {
      try {
        const stockData = {};
        for (const type of bloodTypes) {
          const response = await axios.get(`${API_BASE_URL}/${type}`);
          stockData[type] = response.data; // Store each blood type's stock
          console.log(stockData[type])
        }
        setBloodStock(stockData);
      } catch (error) {
        console.error("Error fetching blood stock:", error);
      }
    };

    fetchBloodStock();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
          <h1>Blood Prism</h1>
        </div>
        <hr className="sidebar-divider" />
        <nav>
          <h2 className="sidebar-section-title">Users Data</h2>
          <ul className="sidebar-nav">
            <li><Link to="/donors">Donors Details</Link></li>
            <li><Link to="/patients">Patient Details</Link></li>
            <li><Link to="/bloodstocks">Blood Stock Details</Link></li>
          </ul>
        </nav>
        <hr className="sidebar-divider" />
        <nav>
          <h2 className="sidebar-section-title">Resources</h2>
          <ul className="sidebar-nav">
            {["Landing Page", "Dashboard"].map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>
        <hr className="sidebar-footer-divider" />
        <nav>
          <h2 className="sidebar-section-title">Resources</h2>
          <ul className="sidebar-nav">
            <li><a href="/" onClick={handleLogout}>Admin Logout</a></li>
          </ul>
        </nav>
      </aside>

      <div className="rightcontent">
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
        </div>
        <div className="stats-cards">
          {bloodTypes.map((type, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">
                <span>{type}</span>
                <img src={blood_drop} alt="Donate Blood" />
              </div>
              <div className="stat-info">
                <h2>{bloodStock[type] !== undefined ? bloodStock[type] : "Loading..."}</h2>
                <p><span className="increase">2.19% </span> Since last month</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
