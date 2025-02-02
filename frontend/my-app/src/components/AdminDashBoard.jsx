import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/admindashboard.css"; // Import the CSS file

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
    <div className="container">
      <aside className="sidebar">
        {/* Sidebar Section */}
        <div className="sidebar-logo">
          <img
            src="https://img.icons8.com/ios-filled/50/9b111e/like.png" // Example logo
            alt="Logo"
          />
          <h1>Blood Prism</h1>
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

      <div className="rightcontent">
        <div className="dashboard-header">
          <h1>Welcome to Blood Prism</h1>
          <h2>Admin Dashboard</h2>
        </div>
        <div className="stats-cards">
          {/* Stat Card 1 */}
          <div className="stat-card">
            <div className="stat-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/9b111e/donate-blood.png"
                alt="Donate Blood"
              />
            </div>
            <div className="stat-info">
              <h3>DONATE BLOOD</h3>
              <h2>000,030</h2>
              <p>
                <span className="increase">3.48% </span> Since last month
              </p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="stat-card">
            <div className="stat-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/9b111e/blood-drop.png"
                alt="Need Blood"
              />
            </div>
            <div className="stat-info">
              <h3>NEED BLOOD</h3>
              <h2>00,023</h2>
              <p>
                <span className="increase">0.19% </span> Since last month
              </p>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="stat-card">
            <div className="stat-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/9b111e/charity.png"
                alt="Host Drive"
              />
            </div>
            <div className="stat-info">
              <h3>HOST DRIVE</h3>
              <h2>00,040</h2>
              <p>
                <span className="increase">1.10% </span> Since last month
              </p>
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="stat-card">
            <div className="stat-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/9b111e/question-mark.png"
                alt="Need Help"
              />
            </div>
            <div className="stat-info">
              <h3>NEED HELP</h3>
              <h2>00,023</h2>
              <p>
                <span className="increase">2.19% </span> Since last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
