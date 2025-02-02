import React, { useState } from "react"; // For useState
import { useNavigate } from "react-router-dom"; // For useNavigate
import "../CSS/login.css"



const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Single state for all messages
  const [messageType, setMessageType] = useState(""); // Type of message ('success' or 'error')

  // Hardcoded admin credentials
  const adminUsername = "vaibhe@gmail.com";
  const adminPassword = "123";

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const passwordRegex = /^[a-zA-Z0-9]{2,}$/;

    if (!username || !password) {
      setMessage("Please fill in both fields.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be at least 6 characters long and contain only letters (a-z, A-Z) and numbers (0-9)."
      );
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setMessage(""); // Clear any previous messages

    // Hardcoded validation check
    if (username === adminUsername && password === adminPassword) {
      setMessage("Login successful!");
      setMessageType("success");
      setTimeout(() => setMessage(""), 1000);

      console.log("Form submitted successfully:");

      // Redirect to the donors page upon successful login
      navigate("/admindashBoard");

      // Clear form
      setUsername("");
      setPassword("");
    } else {
      setMessage("Invalid credentials. Please try again.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>

      <form onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        {/* Message Display */}
        {message && <p className={`message ${messageType}`}>{message}</p>}

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
