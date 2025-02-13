import Navbar from './Navbar'
import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';


const Register = () => {
    // Local state for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('PATIENT'); // default role
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle form submission
    const handleSignUp = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');

      try {
        const response = await axios.post('http://localhost:8080/users/signup', {
          name,
          email,
          password,
          phoneNumber,
          role,
        });

        // The backend returns the newly created user in the response
        const createdUser = response.data;
        // Store user details in localStorage (optional)
        localStorage.setItem('createdUser', JSON.stringify(createdUser));

        setSuccess('Sign-up successful! You can now log in.');
        // Optionally redirect to sign in page:
        window.location.href = '/signin';
      } catch (err) {
        console.error(err);
        // Attempt to read the error message from the server
        const message =
          err.response?.data?.message ||
          err.response?.data ||
          'Error during registration. Please try again.';
        setError(message);
      }
    };
    return (
        <div style={{ margin: 'auto' }}>
           
                <Navbar></Navbar>
            
 <h2 style={{textAlign:'center'}}>Sign Up</h2>
{error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
{success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}

<form onSubmit={handleSignUp}  style={{margin:'7rem auto'}}>
  <div style={{ marginBottom: '1rem' }}>
    <label>Full Name</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      style={{ display: 'block', width: '100%', padding: '0.5rem' }}
    />
  </div>
  
  <div style={{ marginBottom: '1rem' }}>
    <label>Email</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      style={{ display: 'block', width: '100%', padding: '0.5rem' }}
    />
  </div>
  
  <div style={{ marginBottom: '1rem' }}>
    <label>Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      style={{ display: 'block', width: '100%', padding: '0.5rem' }}
    />
  </div>
  
  <div style={{ marginBottom: '1rem' }}>
    <label>Phone Number</label>
    <input
      type="text"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      required
      style={{ display: 'block', width: '100%', padding: '0.5rem' }}
    />
  </div>
  
  <div style={{ marginBottom: '1rem' }}>
    <label>Role</label>
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      style={{ display: 'block', width: '100%', padding: '0.5rem' }}
    >
      <option value="PATIENT">PATIENT</option>
      <option value="DONOR">DONOR</option>
      <option value="ADMIN">ADMIN</option>
    </select>
  </div>
  
  <button type="submit" style={{ padding: '0.5rem 1rem' }}>
    Sign Up
  </button>
</form> 
 
<Footer/> 
</div> 
)
}

export default Register
