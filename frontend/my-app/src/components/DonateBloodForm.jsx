import React from "react";
import "../CSS/donor_patient_registrationform.css"; // Make sure this path matches your CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useState } from "react";

const DonateBloodForm = () => {

    const [donor, setDonor] = useState({
        donorFullName: "",
        gender: "",
        email: "",
        phoneNo: "",
        bloodGroup: "",
        quantity: "",
        registration_Date: new Date().toISOString().split("T")[0], // Default to today's date
    });

    const handleChange = (e) => {
        setDonor({ ...donor, [e.target.name]: e.target.value });
    };

    const handleChangeforQuantity = (e) => {
        const { name, value } = e.target;
        setDonor({
            ...donor,
            [name]: name === "quantity" ? Number(value) : value, // Convert quantity to number
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!/^\S+@\S+\.\S+$/.test(donor.email)) {
            alert("Please enter a valid Gmail address.");
            return;
        }

        if (!/^\d{10}$/.test(donor.phoneNo)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (donor.quantity <= 0) {
            alert("Blood quantity must be greater than 0.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/donors", donor, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200) {
                alert("Donor data added successfully!");
               
                setDonor({
                    donorFullName: "",
                    gender: "",
                    email: "",
                    phoneNo: "",
                    bloodGroup: "",
                    quantity: "",
                    registration_Date: new Date().toISOString().split("T")[0],
                });
                window.location.href = '/';
            }
        } catch (error) {
            alert("Error adding donor data: " + error.message);
        }
    };




    return (
        <div className="main-body">
            <Navbar />

            <section className="donor_patient_registrationform_section">

                <div className="donor_patient_registrationform_section-container">

                    <h2> Donor Registration Form</h2>

                    <div className="shape1"></div>
                    <div className="shape1"></div>



                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input type="text" name="donorFullName" value={donor.donorFullName} onChange={handleChange} required />

                        <label>Gender:</label>
                        <select name="gender" value={donor.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <label>Gmail:</label>
                        <input type="email" name="email" value={donor.email} onChange={handleChange} required />

                        <label>Mobile No:</label>
                        <input type="text" name="phoneNo" value={donor.phoneNo} onChange={handleChange} required pattern="\d{10}" title="Enter a 10-digit mobile number" />

                        <label>Blood Type:</label>
                        <select name="bloodGroup" value={donor.bloodGroup} onChange={handleChange} required>
                            <option value="">Select Blood Type</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>

                        <label>Quantity (Units):</label>
                        <select name="quantity" value={donor.quantity} onChange={handleChangeforQuantity} required>
                            <option value="">Select Quantity</option>
                            <option value="1">1 (200 ml)</option>
                            <option value="2">2 (400 ml)</option>
                        </select>




                        <label>Registration Date:</label>
                        <input type="date" name="registration_Date" value={donor.registration_Date} onChange={handleChange} required />


                        <button type="submit">Submit</button>
                    </form>


                </div>


            </section>


            {/* This is my footer */}
            <Footer></Footer>
        </div>
    );
};

export default DonateBloodForm;
