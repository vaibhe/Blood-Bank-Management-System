import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../CSS/admindashboard.css'; // Import the CSS file

const AdminDashBoard = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/"); // Redirect to the login or home page
    }
  };

  return (
    <aside className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <img
          src="https://img.icons8.com/ios-filled/50/9b111e/like.png" // Example logo
          alt="Logo"
        />
        <h1>Blood Bank</h1>
      </div>
      <hr className="sidebar-divider" />

      {/* Users Data Section */}
      <nav>
        <h2 className="sidebar-section-title">Users Data</h2>
        <ul className="sidebar-nav">
          <li>
            <Link to="/donors">Donors Details</Link>
          </li>
          <li>
            <Link to="/patients">Patient Details</Link>
          </li>
          <li>Host Blood Drive</li>
          <li>Need Help</li>
        </ul>
      </nav>

      <hr className="sidebar-divider" />

      {/* Resources Section */}
      <nav>
        <h2 className="sidebar-section-title">Resources</h2>
        <ul className="sidebar-nav">
          {["Landing Page", "Dashboard"].map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <hr className="sidebar-footer-divider" />

      {/* Logout Section */}
      <nav>
        <h2 className="sidebar-section-title">Resources</h2>
        <ul className="sidebar-nav">
          <li>
            <a href="/" onClick={handleLogout}>
              Admin Logout
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminDashBoard;
