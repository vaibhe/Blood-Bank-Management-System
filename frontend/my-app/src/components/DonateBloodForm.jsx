import React from "react";
import "../CSS/form.css"; // Make sure this path matches your CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

const DonateBloodForm = () => {
  return (
    <div className="main-body">
      <Navbar/>

      <section className="hero">
    <div className="form-container">
      <h2>Register for Blood Donation</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Blood Type</label>
          <select required>
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
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="3" placeholder="Additional information"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
    </section>


    {/* This is my footer */}
    <Footer></Footer>
    </div>
  );
};

export default DonateBloodForm;
