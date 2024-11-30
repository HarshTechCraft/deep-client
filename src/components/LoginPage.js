import React, { useState } from "react";
import "../style/LoginPage.css";
import imgbg from "../images/login-bg.jpg";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom"; // Importing Link for navigation

const LoginPage = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const url =
    process.env.NODE_ENV === "production"
      ? "https://deep-server-c0bq.onrender.com"
      : "http://localhost:5000";

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Simple validation
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear errors if validation passes

    try {
      // Making the API call
      const response = await axios.post(`${url}/login`, { email, password });

      if (response.data.Email && response.data.Password) {
        Cookies.set("authToken", response.data.token, {
          secure: true,
          sameSite: "Strict",
          expires: 1,
        });
        alert("Sign in successful!");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while signing in.");
      console.error(error);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <div className="login-second-div"></div>

        <div className="login-box">
          <div className="login-header">
            <h2>
              Welcome <span style={{ color: "#ffb933" }}>back</span> <br />
              to <br /> <span>Sukhsangam!</span>
            </h2>
            <p>Book unique spaces directly from local hosts</p>
          </div>
          <form className="login-form" onSubmit={handleSignIn}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              className="login-form-input"
              onChange={(e) => setEmail(e.target.value)} // Update state
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="login-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
            />
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Display errors */}
            <div className="login-options">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="remember">
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
          <div className="redirect-to-signup">
            <p>Don't have an account?</p>
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
