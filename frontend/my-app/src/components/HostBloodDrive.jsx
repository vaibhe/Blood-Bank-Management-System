import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/hostblooddrive.css"

const HostBloodDrive = () => {

  const [campData, setCampData] = useState({
    campName: "",
    organizer: "",
    location: "",
    date: "",
    startTime: "",
    endTime: "",
    contactPersonName: "",
    contactPhone: "",
    email: "",
    description: "",
  });

  const [campList, setCampList] = useState([]);
  const [updateId, setUpdateId] = useState(null);

  // Fetch all drives
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/campdrive")
      .then((response) => setCampList(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampData({ ...campData, [name]: value });
  };

  // Add a new camp
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateId) {
      // Update the camp if updateId is present
      axios
        .put("http://localhost:8080/api/campdrive", { ...campData, campId: updateId })
        .then(() => {
          alert("Camp updated successfully!");
          setUpdateId(null);
        })
        .catch((error) => console.error("Error updating camp: ", error));
    } else {
      // Add a new camp
      axios
        .post("http://localhost:8080/api/campdrive", campData)
        .then(() => alert("Camp added successfully!"))
        .catch((error) => console.error("Error adding camp: ", error));
    }
    setCampData({
      campName: "",
      organizer: "",
      location: "",
      date: "",
      startTime: "",
      endTime: "",
      contactPersonName: "",
      contactPhone: "",
      email: "",
      description: "",
    });
  };

  // Edit a camp
  const handleEdit = (camp) => {
    setCampData(camp);
    setUpdateId(camp.campId);
  };

  // Delete a camp
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this camp?")) {
      axios
        .delete(`http://localhost:8080/api/campdrive/${id}`)
        .then(() => alert("Camp deleted successfully!"))
        .catch((error) => console.error("Error deleting camp: ", error));
    }
  };


  return (


    <div className='Drive-container'>
      <Navbar></Navbar>
      <section className='drive-container'>

        <h1>Blood Donation Camp Management</h1>
        <form className="camp-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="campName"
            placeholder="Camp Name"
            value={campData.campName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="organizer"
            placeholder="Organizer"
            value={campData.organizer}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={campData.location}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={campData.date}
            onChange={handleChange}
            required
          />
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={campData.startTime}
            onChange={handleChange}
            required
          />

          <label>End Time</label>
          <input
            type="time"
            name="endTime"
            value={campData.endTime}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactPersonName"
            placeholder="Contact Person Name"
            value={campData.contactPersonName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactPhone"
            placeholder="Contact Phone"
            value={campData.contactPhone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={campData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={campData.description}
            onChange={handleChange}
            rows="3"
          />
          <button type="submit">{updateId ? "Update Camp" : "Add Camp"}</button>
        </form>

        <h2>All Camps</h2>
        <ul className="camp-list">
          {campList.map((camp) => (
            <li key={camp.campId}>
              <strong>{camp.campName}</strong> - {camp.location} on {camp.date}
              <button onClick={() => handleEdit(camp)}>Edit</button>
              <button onClick={() => handleDelete(camp.campId)}>Delete</button>
            </li>
          ))}
        </ul>


      </section>
      <Footer></Footer>
    </div>
  )
}

export default HostBloodDrive
