import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/donor.css"; // Import CSS for styling
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Donors = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    axios.get("http://localhost:8080/api/donors")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data!", error));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setData(data.map(item => item.donorId === id ? { ...item, [name]: value } : item));
  };

  const handleSave = (donorId) => {
    if (!window.confirm("Are you sure you want to save changes?")) return;
    const updatedDonor = data.find(item => item.donorId === donorId);

    axios.put(`http://localhost:8080/api/donors`, updatedDonor)
      .then(() => setEditingId(null))
      .catch((error) => console.error("Error updating donor!", error));
  };

  const handleDelete = (donorId) => {
    if (!window.confirm("Are you sure you want to delete this donor? This action cannot be undone!")) return;

    axios.delete(`http://localhost:8080/api/donors/${donorId}`)
      .then(() => fetchDonors())
      .catch((error) => console.error("Error deleting donor!", error));
  };

  
  const handleLogout = () => {
    alert("Admin will log out!");
    localStorage.clear();
      navigate("/"); 
  };

  const handlebackToDasBoard = () => {
    
    alert("Admin will back to DashBoard!");
    navigate("/admindashBoard"); 
  };

  return (
    <div className="donor-container">
      <div className="header">
        <h2>Donor Database</h2>
        <button onClick={handlebackToDasBoard} className="backToDashboard-btn">
          <Link to='/' style={{ textDecoration: "none", color: "white"}}>Back</Link>
          </button>
        <button onClick={handleLogout} className="logout-btn">
           <Link to='/' style={{ textDecoration: "none", color: "white"}}> Admin Logout </Link>    
          </button>
      </div>
      <table className="donor-table">
        <thead>
          <tr>
            <th>Full Name</th><th>Blood Group</th><th>Gender</th><th>Email</th><th>Phone No</th><th>Registration Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.donorId} className={editingId === item.donorId ? "editing-row" : ""}>
              <td>{item.donorFullName}</td>
              <td>
                {editingId === item.donorId ? 
                  <input name="bloodGroup" value={item.bloodGroup} onChange={(e) => handleChange(e, item.donorId)} /> : 
                  item.bloodGroup
                }
              </td>
              <td>
                {editingId === item.donorId ? 
                  <input name="gender" value={item.gender} onChange={(e) => handleChange(e, item.donorId)} /> : 
                  item.gender
                }
              </td>
              <td>
                {editingId === item.donorId ? 
                  <input name="email" value={item.email} onChange={(e) => handleChange(e, item.donorId)} /> : 
                  item.email
                }
              </td>
              <td>
                {editingId === item.donorId ? 
                  <input name="phoneNo" value={item.phoneNo} onChange={(e) => handleChange(e, item.donorId)} /> : 
                  item.phoneNo
                }
              </td>
              <td>
                {editingId === item.donorId ? 
                  <input name="registration_Date" value={item.registration_Date} onChange={(e) => handleChange(e, item.donorId)} /> : 
                  item.registration_Date
                }
              </td>
              <td>
                <div className="button-group">
                  {editingId === item.donorId ? (
                    <button onClick={() => handleSave(item.donorId)} className="save-btn">Save</button>
                  ) : (
                    <button onClick={() => setEditingId(item.donorId)} className="edit-btn">Edit</button>
                  )}
                  <button onClick={() => handleDelete(item.donorId)} className="delete-btn">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donors;
