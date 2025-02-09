import React, { useState } from 'react';
import Navbar from './Navbar';
import "../CSS/contact.css";
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) ? '' : 'Invalid email format' });
    }

    if (name === 'phone') {
      setErrors({ ...errors, phone: validatePhone(value) ? '' : 'Phone must be 10 digits' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.email && !errors.phone && formData.name && formData.reason && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', reason: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="main-body">
      <Navbar />

      <div className="shape"></div>
      <div className="shape"></div>

      <div className="contact-container">
        <h2>WE'RE HERE TO HELP</h2>

        {isSubmitted && <p className="success-message">Form submitted successfully!</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}

          <div className="form-row">
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} required />
          </div>
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <textarea placeholder="Any other information..." name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit" disabled={errors.email || errors.phone}>Send Message</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
