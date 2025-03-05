import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import '../CSS/donor_patient_registrationform.css';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:8080/users/signin', {
        email,
        password,
      });

      const { jwt, role, userId, user } = response.data;
      localStorage.setItem('token', jwt);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId);
      localStorage.setItem('user', JSON.stringify(user));

      setSuccess("Sign-in successful! Redirecting...");
      setTimeout(() => {
        if (role === "ADMIN") {
          window.location.href = '/admindashBoard';
        } else if (role === "PATIENT") {
          window.location.href = '/patientform';
        } else if (role === "DONOR") {
          window.location.href = '/donorform';
        }
      }, 1500);
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || err.response?.data || 'Invalid credentials. Please try again.';
      setError(message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="main-body">
      <Navbar />
      <section className="donor_patient_registrationform_section">
        <div className="donor_patient_registrationform_section-container">
          <div className="shape1"></div>
          <div className="shape1"></div>
          <h2>Sign In</h2>
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}
          
          <form onSubmit={handleSignIn}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Sign In"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignIn;
