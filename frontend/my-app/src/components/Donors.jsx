import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/donor.css"; // Import CSS for styling

const Donors = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({
    donorFullName: "",
    bloodGroup: "",
    gender: "",
    email: "",
    phoneNo: "",
    registration_Date: ""
  });

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

  const handleAdd = () => {
    if (!newItem.donorFullName.trim() || !newItem.bloodGroup.trim() || !newItem.gender.trim() ||
        !newItem.email.trim() || !newItem.phoneNo.trim() || !newItem.registration_Date.trim()) {
      alert("All fields are required!");
      return;
    }

    if (!window.confirm("Are you sure you want to add this donor?")) return;

    const newDonor = {
      donorFullName: newItem.donorFullName.trim(),
      bloodGroup: newItem.bloodGroup.trim(),
      gender: newItem.gender.trim(),
      email: newItem.email.trim(),
      phoneNo: newItem.phoneNo.trim(),
      registration_Date: newItem.registration_Date.trim(),
    };

    axios.post("http://localhost:8080/api/donors", newDonor)
      .then(() => {
        fetchDonors();
        setNewItem({ donorFullName: "", bloodGroup: "", gender: "", email: "", phoneNo: "", registration_Date: "" });
      })
      .catch((error) => console.error("Error adding donor!", error));
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

  return (
    <div className="donor-container">
      <h2>Donor Database</h2>
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

      <h3>Add New Donor</h3>
      <div className="add-form">
        <input placeholder="Full Name" value={newItem.donorFullName} onChange={(e) => setNewItem({ ...newItem, donorFullName: e.target.value })} />
        <input placeholder="Blood Group" value={newItem.bloodGroup} onChange={(e) => setNewItem({ ...newItem, bloodGroup: e.target.value })} />
        <input placeholder="Gender" value={newItem.gender} onChange={(e) => setNewItem({ ...newItem, gender: e.target.value })} />
        <input placeholder="Email" value={newItem.email} onChange={(e) => setNewItem({ ...newItem, email: e.target.value })} />
        <input placeholder="Phone No" value={newItem.phoneNo} onChange={(e) => setNewItem({ ...newItem, phoneNo: e.target.value })} />
        <input placeholder="Registration Date" value={newItem.registration_Date} onChange={(e) => setNewItem({ ...newItem, registration_Date: e.target.value })} />
        <button onClick={handleAdd} className="add-btn">Add Donor</button>
      </div>
    </div>
  );
};

export default Donors;
