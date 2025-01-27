// signUpPage.js
import React, { useState } from "react";
import "../style/signUpPage.css";
import axios from "axios";
import { toast } from "react-toastify"; // Assuming you use 'react-toastify' for alerts
import { Link } from "react-router-dom"; // Import Link for navigation

const SignUpPage = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loader, setLoader] = useState(false); // Loader state for signup button
  const [error, setError] = useState(""); // For showing validation errors

  const url =
    process.env.NODE_ENV === "production"
      ? "https://deep-server-c0bq.onrender.com"
      : "http://localhost:5000";

  // Validation check
  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }
    if (!termsAccepted) {
      setError("You must agree to the terms and conditions.");
      return false;
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  // SignUp function that makes the API call
  const signup = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Prevent signup if form is invalid

    setLoader(true);
    try {
      const response = await axios.post(`${url}/signup`, {
        Email: email,
        Password: password,
        Name: name,
      });

      if (response.data.signup) {
        toast.success("Account created successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setLoader(false);
      } else {
        toast.error("User details already exist!");
        setLoader(false);
      }
    } catch (error) {
      toast.error("Error during signup!");
      console.error("Error during signup:", error);
      setLoader(false);
    }
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signUp-page">
        <div className="signUp-box">
          <div className="signUp-header">
            <h2>
              Join <span style={{ color: "#ffb933" }}>Sukhsangam!</span>
            </h2>
            <p>
              Create an account to book unique spaces directly from local hosts.
            </p>
          </div>
          <form className="signUp-form" onSubmit={signup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              className="signUp-form-input"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              className="signUp-form-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="signUp-form-input"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="signUp-form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Display error */}
            <div className="signUp-options">
              <div>
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <label htmlFor="terms" className="remember">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <button type="submit" className="signUp-button" disabled={loader}>
              {loader ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {/* Redirect to Sign In page link */}
          <div className="redirect-signin">
            <p>
              Already have an account?{" "}
              <Link to="/signin" className="redirect-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
