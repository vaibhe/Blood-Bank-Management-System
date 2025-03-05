import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/donor_patient_registrationform.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

const PatientForm = () => {
    const [patient, setPatient] = useState({
        patientFullName: "",
        gender: "",
        email: "",
        phoneNo: "",
        bloodGroup: "",
        registration_Date: new Date().toISOString().split("T")[0],
    });

    const [bloodStocks, setBloodStocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setPatient((prevPatient) => ({
                ...prevPatient,
                patientFullName: parsedUser.name || "",
                email: parsedUser.email || "",
                phoneNo: parsedUser.phoneNumber || "",
            }));
        }
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/api/bloodstocks")
            .then((response) => {
                setBloodStocks(response.data);
            })
            .catch((error) => console.error("Error fetching blood stock data!", error));
    }, []);

    const handleChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const sendSuccessEmail = async (email, name, date) => {
        try {
            await axios.post("http://localhost:8080/api/email/send", {
                to: email,
                subject: "Blood Request Confirmation",
                message: `Hi ${name},\n\nYour blood request has been recorded on ${date}. Our team will contact you soon.\n\nBest Regards,\nBloodPrism Team`,
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

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patient.email)) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        if (!/^\d{10}$/.test(patient.phoneNo)) {
            setError("Please enter a valid 10-digit phone number.");
            setLoading(false);
            return;
        }

        const matchingStock = bloodStocks.find(
            (stock) => stock.bloodType === patient.bloodGroup && stock.quantity > 0
        );

        if (!matchingStock) {
            setError(`Sorry, stock is not available for blood group ${patient.bloodGroup}.`);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/patients", patient, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 200) {
                const emailSent = await sendSuccessEmail(patient.email, patient.patientFullName, patient.registration_Date);

                if (emailSent) {
                    setSuccess("Patient registered successfully! Confirmation email sent.");
                    setPatient({
                        patientFullName: "",
                        gender: "",
                        email: "",
                        phoneNo: "",
                        bloodGroup: "",
                        registration_Date: new Date().toISOString().split("T")[0],
                    });
                }
                setTimeout(() => (window.location.href = "/"), 2000);
            }
        } catch (error) {
            setError("Error registering patient. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-body">
            <Navbar />

            <section className="donor_patient_registrationform_section">
                <div className="donor_patient_registrationform_section-container">
                    <h2>Patient Registration Form</h2>

                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}

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

                        <button type="submit" disabled={loading}>{loading ? <div className="spinner"></div> : "Register Patient"}</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PatientForm;
