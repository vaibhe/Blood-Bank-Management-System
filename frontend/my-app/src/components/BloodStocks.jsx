import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/bloodstocks.css"; // Import CSS for styling
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BloodStocks = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // acts as id for put/delete method
  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  useEffect(() => {
    fetchBloodStocks();
  }, []);

  const fetchBloodStocks = () => {
    axios
      .get("http://localhost:8080/api/bloodstocks")
      .then((response) => {
        const formattedData = response.data.map((item, index) => ({

          bloodType: item.bloodType,
          quantity: item.quantity,
          registrationDate: item.registration_Date || "N/A",
        }));

        console.log("Fetched Data:", formattedData);
        setData(formattedData);
      })
      .catch((error) => console.error("Error fetching blood stock data!", error));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setData(data.map(item => item.bloodType === id ? { ...item, [name]: value } : item));
  };

  const handleSave = (bloodType) => {
    if (!window.confirm("Are you sure you want to save changes?")) return;

    const updatedStock = data.find(item => item.bloodType === bloodType);

    axios
      .put(`http://localhost:8080/api/bloodstocks/${bloodType}`, updatedStock) // Fixed API endpoint
      .then(() => {
        setEditingId(null);
        fetchBloodStocks(); // Refresh data after update
      })
      .catch((error) => console.error("Error updating blood stock!", error));
  };

  const handleDelete = (bloodType) => {
    if (!window.confirm("Are you sure you want to delete this blood stock record? This action cannot be undone!")) return;

    axios
      .delete(`http://localhost:8080/api/bloodstocks/${bloodType}`)
      .then(() => fetchBloodStocks())
      .catch((error) => console.error("Error deleting blood stock!", error));
  };


  const handleLogout = () => {
    alert("Admin will log out!");
    navigate("/adminlogin");
  };

  const handlebackToDasBoard = () => {

    alert("Admin will back to DashBoard!");
    navigate("/admindashBoard");
  };

  return (
    <div className="bloodstock-container">
      <div className="header">
      <h2>Blood Stock Database</h2>
      <button onClick={handlebackToDasBoard} className="backTodashboard-btn">
        <Link to='/' style={{ textDecoration: "none", color: "white" }}>Back</Link>
      </button>
      <button onClick={handleLogout} className="logout-btn">
        <Link to='/' style={{ textDecoration: "none", color: "white" }}> Admin Logout </Link>
      </button>
      </div>
      <table className="bloodstock-table">
        <thead>
          <tr>
            <th>Blood Type</th>
            <th>Quantity (ml)</th>
            <th>Registration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.bloodType} className={editingId === item.bloodType ? "editing-row" : ""}>
              <td>{item.bloodType}</td>
              <td>
                {editingId === item.bloodType ? (
                  <input
                    name="quantity"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleChange(e, item.bloodType)}
                  />
                ) : (
                  item.quantity
                )}
              </td>
              <td>
                {editingId === item.bloodType ? (
                  <input
                    name="registrationDate"
                    type="date"
                    value={
                      item.registrationDate !== "N/A"
                        ? new Date(item.registrationDate).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => handleChange(e, item.bloodType)}
                  />
                ) : (
                  item.registrationDate !== "N/A"
                    ? new Date(item.registrationDate).toISOString().split("T")[0]
                    : "N/A"
                )}
              </td>
              <td>
                <div className="button-group">
                  {editingId === item.bloodType ? (
                    <button onClick={() => handleSave(item.bloodType)} className="save-btn">Save</button>
                  ) : (
                    <button onClick={() => setEditingId(item.bloodType)} className="edit-btn">Edit</button>
                  )}
                  <button onClick={() => handleDelete(item.bloodType)} className="delete-btn">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodStocks;
