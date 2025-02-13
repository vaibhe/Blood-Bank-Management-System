import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

function SignIn() {
  // Local state for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:8080/users/signin', {
        email,
        password,
      });

      // The backend returns a SigninResponse with these properties:
      // jwt, mesg, role, userId, user
      const { jwt, role, userId, user } = response.data;

      // Store items in localStorage
      localStorage.setItem('token', jwt);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId);
      localStorage.setItem('user', JSON.stringify(user));

      setSuccess('Sign-in successful! Redirecting...');
      // Optionally redirect to a protected route:
      if(role == "ADMIN"){
      window.location.href = '/admindashBoard';
      }
      if(role == "PATIENT"){
        window.location.href = '/patientform';
      }
      if(role == "DONOR"){
        window.location.href = '/donorform';
      }
    } catch (err) {
      console.error(err);
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        'Invalid credentials. Please try again.';
      setError(message);
    }
  };

  return (
    <div style={{margin: 'auto' }}>
      <Navbar/>
    
      <h2 style={{textAlign:'center'}}>Sign In</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}

      <form onSubmit={handleSignIn}  style={{margin:'8rem auto'}}>
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
        
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Sign In
        </button>
      </form>
     
      
     <Footer/>
    </div>
  );
}

export default SignIn;
