
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Navbar';
import '../CSS/campdetailstodonors.css';

const CampsDetailsToDonors = () => {

    
        const [campList, setCampList] = useState([]);
      
        // Fetch all drives
        useEffect(() => {
          axios
            .get("http://localhost:8080/api/campdrive")
            .then((response) => setCampList(response.data))
            .catch((error) => console.error("Error fetching data: ", error));
        }, []);




  return (
    <div>
      <Navbar/>

      <section className="readonly-camps-section">
        <h1>All Blood Donation Camps</h1>
        {campList.length > 0 ? (
          <div className="camps-grid">
            {campList.map((camp) => (
              <div key={camp.campId} className="camp-card">
                <h2>{camp.campName}</h2>
                <p><strong>Organizer:</strong> {camp.organizer}</p>
                <p><strong>Location:</strong> {camp.location}</p>
                <p><strong>Date:</strong> {camp.date}</p>
                <p><strong>Start Time:</strong> {camp.startTime}</p>
                <p><strong>End Time:</strong> {camp.endTime}</p>
                <p><strong>Contact Person:</strong> {camp.contactPersonName}</p>
                <p><strong>Contact Phone:</strong> {camp.contactPhone}</p>
                <p><strong>Email:</strong> {camp.email}</p>
                <p><strong>Description:</strong> {camp.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No camps available at the moment.</p>
        )}
      </section>


    </div>
  )
}

export default CampsDetailsToDonors
