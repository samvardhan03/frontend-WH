import React, { useState } from "react";
import "./LoginPage.css";
import authService from "../services/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login({ email, password });
      alert("Login successful");
    } catch (error) {
      console.error("Error logging in", error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <div className="bold-line" />
      <div className="container">
        <div className="window">
          <div className="overlay" />
          <div className="content">
            <div className="welcome">Hello There!</div>
            <div className="subtitle">
              We're almost done. Before using our services you need to create an
              account.
            </div>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                className="input-line full-width"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-line full-width"
              />
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
              />
            </div>
            <div className="spacing">
              or continue with <span className="highlight">Facebook</span>
            </div>
            <div>
              <button className="ghost-round full-width">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
