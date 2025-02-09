import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/bloodstocks.css"; // Import CSS for styling

const BloodStocks = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchBloodStocks();
  }, []);

  const fetchBloodStocks = () => {
    axios
      .get("http://localhost:8080/api/bloodstocks")
      .then((response) => {
        const formattedData = response.data.map((item, index) => ({
          stockId: item.stockId || index + 1, // Ensure unique ID
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
    setData(data.map(item => item.stockId === id ? { ...item, [name]: value } : item));
  };

  const handleSave = (stockId) => {
    if (!window.confirm("Are you sure you want to save changes?")) return;

    const updatedStock = data.find(item => item.stockId === stockId);

    axios
      .put(`http://localhost:8080/api/bloodstocks/${stockId}`, updatedStock) // Fixed API endpoint
      .then(() => {
        setEditingId(null);
        fetchBloodStocks(); // Refresh data after update
      })
      .catch((error) => console.error("Error updating blood stock!", error));
  };

  const handleDelete = (stockId) => {
    if (!window.confirm("Are you sure you want to delete this blood stock record? This action cannot be undone!")) return;

    axios
      .delete(`http://localhost:8080/api/bloodstocks/${stockId}`)
      .then(() => fetchBloodStocks())
      .catch((error) => console.error("Error deleting blood stock!", error));
  };

  return (
    <div className="bloodstock-container">
      <h2>Blood Stock Database</h2>
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
            <tr key={item.stockId} className={editingId === item.stockId ? "editing-row" : ""}>
              <td>{item.bloodType}</td>
              <td>
                {editingId === item.stockId ? (
                  <input
                    name="quantity"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleChange(e, item.stockId)}
                  />
                ) : (
                  item.quantity
                )}
              </td>
              <td>
                {editingId === item.stockId ? (
                  <input
                    name="registrationDate"
                    type="date"
                    value={
                      item.registrationDate !== "N/A"
                        ? new Date(item.registrationDate).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => handleChange(e, item.stockId)}
                  />
                ) : (
                  item.registrationDate !== "N/A"
                    ? new Date(item.registrationDate).toISOString().split("T")[0]
                    : "N/A"
                )}
              </td>
              <td>
                <div className="button-group">
                  {editingId === item.stockId ? (
                    <button onClick={() => handleSave(item.stockId)} className="save-btn">Save</button>
                  ) : (
                    <button onClick={() => setEditingId(item.stockId)} className="edit-btn">Edit</button>
                  )}
                  <button onClick={() => handleDelete(item.stockId)} className="delete-btn">Delete</button>
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
