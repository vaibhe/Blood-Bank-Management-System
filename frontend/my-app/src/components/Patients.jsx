import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/patient.css"; // Import CSS for styling

const Patients = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({
    patientFullName: "",
    bloodGroup: "",
    gender: "",
    email: "",
    phoneNo: "",
    registration_Date: ""
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    axios.get("http://localhost:8080/api/patients")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data!", error));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setData(data.map(item => item.patientId === id ? { ...item, [name]: value } : item));
  };

  const handleAdd = () => {
    if (!Object.values(newItem).every(value => value.trim())) {
      alert("All fields are required!");
      return;
    }

    if (!window.confirm("Are you sure you want to add this patient?")) return;

    axios.post("http://localhost:8080/api/patients", newItem)
      .then(() => {
        fetchPatients();
        setNewItem({ patientFullName: "", bloodGroup: "", gender: "", email: "", phoneNo: "", registration_Date: "" });
      })
      .catch((error) => console.error("Error adding patient!", error));
  };

  const handleSave = (patientId) => {
    if (!window.confirm("Are you sure you want to save changes?")) return;

    const updatedPatient = data.find(item => item.patientId === patientId);

    axios.put(`http://localhost:8080/api/patients`, updatedPatient)
      .then(() => setEditingId(null))
      .catch((error) => console.error("Error updating patient!", error));
  };

  const handleDelete = (patientId) => {
    if (!window.confirm("Are you sure you want to delete this patient? This action cannot be undone!")) return;

    axios.delete(`http://localhost:8080/api/patients/${patientId}`)
      .then(() => fetchPatients())
      .catch((error) => console.error("Error deleting patient!", error));
  };

  return (
    <div className="patient-container">
      <h2>Patient Database</h2>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Full Name</th><th>Blood Requ</th><th>Gender</th><th>Email</th><th>Phone No</th><th>Registration Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.patientId} className={editingId === item.patientId ? "editing-row" : ""}>
              <td>{item.patientFullName}</td>
              <td>{editingId === item.patientId ? <input name="bloodGroup" value={item.bloodGroup} onChange={(e) => handleChange(e, item.patientId)} /> : item.bloodGroup}</td>
              <td>{editingId === item.patientId ? <input name="gender" value={item.gender} onChange={(e) => handleChange(e, item.patientId)} /> : item.gender}</td>
              <td>{editingId === item.patientId ? <input name="email" value={item.email} onChange={(e) => handleChange(e, item.patientId)} /> : item.email}</td>
              <td>{editingId === item.patientId ? <input name="phoneNo" value={item.phoneNo} onChange={(e) => handleChange(e, item.patientId)} /> : item.phoneNo}</td>
              <td>{editingId === item.patientId ? <input name="registration_Date" value={item.registration_Date} onChange={(e) => handleChange(e, item.patientId)} /> : item.registration_Date}</td>
              <td>
                <div className="button-group">
                  {editingId === item.patientId ? (
                    <button onClick={() => handleSave(item.patientId)} className="save-btn">Save</button>
                  ) : (
                    <button onClick={() => setEditingId(item.patientId)} className="edit-btn">Edit</button>
                  )}
                  <button onClick={() => handleDelete(item.patientId)} className="delete-btn">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Patient</h3>
      <div className="add-form">
        <input placeholder="Full Name" value={newItem.patientFullName} onChange={(e) => setNewItem({ ...newItem, patientFullName: e.target.value })} />
        <input placeholder="Blood Group" value={newItem.bloodGroup} onChange={(e) => setNewItem({ ...newItem, bloodGroup: e.target.value })} />
        <input placeholder="Gender" value={newItem.gender} onChange={(e) => setNewItem({ ...newItem, gender: e.target.value })} />
        <input placeholder="Email" value={newItem.email} onChange={(e) => setNewItem({ ...newItem, email: e.target.value })} />
        <input placeholder="Phone No" value={newItem.phoneNo} onChange={(e) => setNewItem({ ...newItem, phoneNo: e.target.value })} />
        <input placeholder="Registration Date" value={newItem.registration_Date} onChange={(e) => setNewItem({ ...newItem, registration_Date: e.target.value })} />
        <button onClick={handleAdd} className="add-btn">Add Patient</button>
      </div>
    </div>
  );
};

export default Patients;
