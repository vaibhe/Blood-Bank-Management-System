import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/admin.css"; // Import CSS for styling

const Admins = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({
    Id: "",
    Name: "",
    Password: "",
    Gender: ""
  });

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = () => {
    axios.get("http://localhost:8080/admins")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data!", error));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setData(data.map(item => item.adminId === id ? { ...item, [name]: value } : item));
  };

  const handleAdd = () => {
    if (!newItem.Id.trim() || !newItem.Name.trim() || !newItem.Password.trim() || !newItem.Gender.trim()) {
      alert("All fields are required!");
      return;
    }

    if (!window.confirm("Are you sure you want to add this admin?")) return;

    const newAdmin = {
      adminId: newItem.Id.trim(),
      name: newItem.Name.trim(),
      password: newItem.Password.trim(),
      gender: newItem.Gender.trim(),
    };

    axios.post("http://localhost:8080/admins", newAdmin)
      .then(() => {
        fetchAdmins();
        setNewItem({ Id: "", Name: "", Password: "", Gender: "" });
      })
      .catch((error) => console.error("Error adding admin!", error));
  };

  const handleSave = (adminId) => {
    if (!window.confirm("Are you sure you want to save changes?")) return;

    const updatedAdmin = data.find(item => item.adminId === adminId);

    axios.put(`http://localhost:8080/admins`, updatedAdmin)
      .then(() => setEditingId(null))
      .catch((error) => console.error("Error updating admin!", error));
  };

  const handleDelete = (adminId) => {
    if (!window.confirm("Are you sure you want to delete this admin? This action cannot be undone!")) return;

    axios.delete(`http://localhost:8080/admins/${adminId}`)
      .then(() => fetchAdmins())
      .catch((error) => console.error("Error deleting admin!", error));
  };

  return (
    <div className="admin-container">
      <h2>ADMIN Database</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Password</th><th>Gender</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.adminId} className={editingId === item.adminId ? "editing-row" : ""}>
              <td>{item.adminId}</td>
              <td>
                {editingId === item.adminId ? 
                  <input name="name" value={item.name} onChange={(e) => handleChange(e, item.adminId)} /> : 
                  item.name
                }
              </td>
              <td>
                {editingId === item.adminId ? 
                  <input name="password" value={item.password} onChange={(e) => handleChange(e, item.adminId)} /> : 
                  "********"
                }
              </td>
              <td>
                {editingId === item.adminId ? 
                  <input name="gender" value={item.gender} onChange={(e) => handleChange(e, item.adminId)} /> : 
                  item.gender
                }
              </td>
              <td>
                <div className="button-group">
                  {editingId === item.adminId ? (
                    <button onClick={() => handleSave(item.adminId)} className="save-btn">Save</button>
                  ) : (
                    <button onClick={() => setEditingId(item.adminId)} className="edit-btn">Edit</button>
                  )}
                  <button onClick={() => handleDelete(item.adminId)} className="delete-btn">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Admin</h3>
      <div className="add-form">
        <input placeholder="ID" value={newItem.Id} onChange={(e) => setNewItem({ ...newItem, Id: e.target.value })} />
        <input placeholder="Name" value={newItem.Name} onChange={(e) => setNewItem({ ...newItem, Name: e.target.value })} />
        <input placeholder="Password" type="password" value={newItem.Password} onChange={(e) => setNewItem({ ...newItem, Password: e.target.value })} />
        <input placeholder="Gender" value={newItem.Gender} onChange={(e) => setNewItem({ ...newItem, Gender: e.target.value })} />
        <button onClick={handleAdd} className="add-btn">Add Admin</button>
      </div>
    </div>
  );
};

export default Admins;
