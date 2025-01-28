import React, { useState } from "react";
import axios from "axios"; // Import axios
import "../CSS/login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Single state for all messages
  const [messageType, setMessageType] = useState(""); // Type of message ('success' or 'error')

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Updated regex: Allow only a-z, A-Z, 0-9 with a minimum of 6 characters
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

    if (!username || !password) {
      setMessage("Please fill in both fields.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000); // Hide message after 3 seconds
      return;
    }

    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be at least 6 characters long and contain only letters (a-z, A-Z) and numbers (0-9)."
      );
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000); // Hide message after 3 seconds
      return;
    }

    setMessage(""); // Clear any previous messages

    // Prepare the data to be sent
    const formData = {
      username: username,
      password: password,
    };

    try {
      // Make the POST request to the Spring Boot backend
      const response = await axios.post("http://localhost:8080/login", formData);

      // Show success message
      setMessage("Login successful!");
      setMessageType("success");
      setTimeout(() => setMessage(""), 1000); // Hide success message after 1 second

      // Handle success (for example, clear the form)
      console.log("Form submitted successfully:", response.data);
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle error
      console.error("There was an error submitting the form!", error);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000); // Hide error message after 3 seconds
    }
  };

  return (
    
    <div className="background">
     
      <div className="shape"></div>
      <div className="shape"></div>
       
      <form onSubmit={handleSubmit}>
        <h2>Donor Login</h2>

          {/* Message Display */}
       {message && (
          <p className={`message ${messageType}`}>{message}</p>
        )}
        
      

        <label htmlFor="username">Username</label>
        <input
          type="email"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
