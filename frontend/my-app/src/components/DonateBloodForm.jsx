import React, { useState, useEffect } from "react";
import "../CSS/donor_patient_registrationform.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const DonateBloodForm = () => {
    const [donor, setDonor] = useState({
        donorFullName: "",
        gender: "",
        email: "",
        phoneNo: "",
        bloodGroup: "",
        quantity: "",
        registration_Date: new Date().toISOString().split("T")[0], 
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setDonor((prevDonor) => ({
                ...prevDonor,
                donorFullName: parsedUser.name || "",
                email: parsedUser.email || "",
                phoneNo: parsedUser.phoneNumber || "",
            }));
        }
    }, []);

    const handleChange = (e) => {
        setDonor({ ...donor, [e.target.name]: e.target.value });
    };

    const handleChangeforQuantity = (e) => {
        const { name, value } = e.target;
        setDonor({
            ...donor,
            [name]: name === "quantity" ? Number(value) : value,
        });
    };

    const sendSuccessEmail = async (email, name, date) => {
        try {
            await axios.post("http://localhost:8080/api/email/send", {
                to: email,
                subject: "Blood Donation Appointment Confirmation",
                message: `Hi ${name},\n\nYour blood donation appointment has been scheduled on ${date}.\n\nThank you for your valuable contribution!\n\nBest Regards,\nBloodPrism Team`,
            });
            return true;
        } catch (err) {
            setError("Error sending confirmation email.");
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        if (!/^\S+@\S+\.\S+$/.test(donor.email)) {
            setError("Please enter a valid Gmail address.");
            setLoading(false);
            return;
        }

        if (!/^\d{10}$/.test(donor.phoneNo)) {
            setError("Please enter a valid 10-digit mobile number.");
            setLoading(false);
            return;
        }

        if (donor.quantity <= 0) {
            setError("Blood quantity must be greater than 0.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/donors", donor, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200) {
                const emailSent = await sendSuccessEmail(donor.email, donor.donorFullName, donor.registration_Date);

                if (emailSent) {
                    setSuccess("Thank you for registering! Your appointment is confirmed.");
                    
                    setDonor({
                        donorFullName: "",
                        gender: "",
                        email: "",
                        phoneNo: "",
                        bloodGroup: "",
                        quantity: "",
                        registration_Date: new Date().toISOString().split("T")[0],
                    });

                    setTimeout(() => (window.location.href = "/"), 2000);
                }
            }
        } catch (error) {
            setError("Error adding donor data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-body">
            <Navbar />

            <section className="donor_patient_registrationform_section">
                <div className="donor_patient_registrationform_section-container">
                    <h2>Donor Registration Form</h2>

                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}

                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="donorFullName" 
                            value={donor.donorFullName} 
                            onChange={handleChange} 
                            required 
                        />

                        <label>Gender:</label>
                        <select name="gender" value={donor.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <label>Gmail:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={donor.email} 
                            onChange={handleChange} 
                            required 
                        />

                        <label>Mobile No:</label>
                        <input 
                            type="text" 
                            name="phoneNo" 
                            value={donor.phoneNo} 
                            onChange={handleChange} 
                            required 
                            pattern="\d{10}" 
                            title="Enter a 10-digit mobile number" 
                        />

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
                        <input 
                            type="date" 
                            name="registration_Date" 
                            value={donor.registration_Date} 
                            onChange={handleChange} 
                            required 
                        />

                        <button type="submit" disabled={loading}>
                            {loading ? <div className="spinner"></div> : "Submit"}
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DonateBloodForm;
