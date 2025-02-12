import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "./Navbar";
import "../CSS/contact.css";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xldgwjdn");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value) ? "" : "Invalid email format",
      }));
    }

    if (name === "phone") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: validatePhone(value) ? "" : "Phone must be 10 digits",
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    setErrors({
      email: isEmailValid ? "" : "Invalid email format",
      phone: isPhoneValid ? "" : "Phone must be 10 digits",
    });

    if (isEmailValid && isPhoneValid && formData.name && formData.reason && formData.message) {
      await handleSubmit(e); // Wait for Formspree submission
    }
  };

  // Watch for successful form submission
  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", reason: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    }
  }, [state.succeeded]);

  return (
    <div className="main-body">
      <Navbar />

      <div className="shape"></div>
      <div className="shape"></div>

      <div className="contact-container">
        <h2>WE'RE HERE TO HELP</h2>

        {isSubmitted && <p className="success-message">Form submitted successfully!</p>}

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <div className="form-row">
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} required />
          </div>
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <textarea placeholder="Any other information..." name="message" value={formData.message} onChange={handleChange} required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting || errors.email || errors.phone}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
