import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import '../CSS/donor_patient_registrationform.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('PATIENT');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true); // Start loading

    if (!isValidEmail(email)) {
      setError('Invalid email format.');
      setLoading(false);
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Phone number must be exactly 10 digits.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/users/signup', {
        name,
        email,
        password,
        phoneNumber,
        role,
      });

      const createdUser = response.data;
      localStorage.setItem('createdUser', JSON.stringify(createdUser));
      await sendSuccessEmail(email);

      setSuccess('Sign-up successful! A confirmation email has been sent.');
      setTimeout(() => (window.location.href = '/signin'), 2000);
    } catch (err) {
      const message = err.response?.data?.message || 'Error during registration. Please try again.';
      setError(message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const sendSuccessEmail = async (email) => {
    try {
      await axios.post('http://localhost:8080/api/email/send', {
        to: email,
        subject: 'Welcome to BloodPrism!',
        message: `Hi ${name},\n\nThank you for registering! Your account has been created successfully.\n\nBest regards,\nBloodPrism`,
      });
    } catch (err) {
      setError('Error sending confirmation email.');
    }
  };

  return (
    <div className="main-body">
      <Navbar />
      <section className="donor_patient_registrationform_section">
        <div className="donor_patient_registrationform_section-container">
        <div className="shape1"></div>
        <div className="shape1"></div>
          <h2>Sign up</h2>

          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}

          <form onSubmit={handleSignUp}>
            <label>Full Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <label>Phone No:</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required pattern="\d{10}" title="Enter a 10-digit phone number" />

            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="PATIENT">PATIENT</option>
              <option value="DONOR">DONOR</option>
              <option value="ADMIN">ADMIN</option>
            </select>

            <button type="submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Sign Up"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
