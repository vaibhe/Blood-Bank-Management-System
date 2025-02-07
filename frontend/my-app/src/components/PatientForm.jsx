
import React, { useState } from "react";
import axios from "axios";
import "../CSS/donor_patient_registrationform.css"; // Make sure this path matches your CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

const PatientForm = () => {

    const [patient, setPatient] = useState({
        patientFullName: "",
        gender: "",
        email: "",
        phoneNo: "",
        bloodGroup: "",
        registration_Date: new Date().toISOString().split("T")[0], // Default to today
    });

    const handleChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!/^\S+@\S+\.\S+$/.test(patient.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^\d{10}$/.test(patient.phoneNo)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/patients", patient, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200) {
                alert("Patient registered successfully!");
                setPatient({
                    patientFullName: "",
                    gender: "",
                    email: "",
                    phoneNo: "",
                    bloodGroup: "",
                    registration_Date: new Date().toISOString().split("T")[0],
                });
            }
        } catch (error) {
            alert("Error registering patient: " + error.message);
        }
    };


  return (
    <div className="main-body">
      <Navbar/>

    <section className="donor_patient_registrationform_section">

    <div className="donor_patient_registrationform_section-container">
            <h2>Patient Registration Form</h2>

            <div className="shape"></div>
            <div className="shape"></div>



            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
     
                <input type="text" name="patientFullName" value={patient.patientFullName} onChange={handleChange} required />

                <label>Gender:</label>
                <select name="gender" value={patient.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label>Email:</label>
                <input type="email" name="email" value={patient.email} onChange={handleChange} required />

                <label>Phone No:</label>
                <input type="text" name="phoneNo" value={patient.phoneNo} onChange={handleChange} required pattern="\d{10}" title="Enter a 10-digit phone number" />

                <label>Blood Group:</label>
                <select name="bloodGroup" value={patient.bloodGroup} onChange={handleChange} required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>

                <label>Registration Date:</label>
                <input type="date" name="registration_Date" value={patient.registration_Date} onChange={handleChange} required />

                <button type="submit">Register Patient</button>
            </form>
        </div>
        </section>

      <Footer/> 

        </div>
  )
}

export default PatientForm
