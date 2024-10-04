import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../style/header.css";
import "../style/Signup.css";
import "../style/Login.css";
import Admin from "./Admin";
import { Loader } from "./Loader";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const url =
    process.env.NODE_ENV === "production"
      ? "https://deep-server-c0bq.onrender.com"
      : "http://localhost:5000";

  


  const signup = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/signup`, { Email, Password });

      if (response.data.signup) {
        toast.success("Account created successfully!");
        setEmail("");
        setPassword("");
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

  const login = async (e) => {
    setLoader(true);
    e.preventDefault();

    try {
      if (Email === "admin@g.com" && Password === "admin") {
        setLoader(false);
        navigate("/admin", Admin);
      } else {
        const response = await axios.post(`${url}/login`, { Email, Password });

        if (response.data.Email) {
          if (response.data.Password) {
            toast.success("Login successful!");
            setEmail("");
            setPassword("");
            setLoader(false);
          } else {
            toast.error("Incorrect password!");
            setLoader(false);
          }
        } else {
          toast.error("Email does not exist!");
          setLoader(false);
        }
      }
    } catch (error) {
      toast.error("Error during login!");
      console.error("Error during login:", error);
      setLoader(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsSignupModalOpen(false);
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
    setIsLoginModalOpen(false);
  };

  const switchToSignupModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const switchToLoginModal = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Spaces");

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  const dropdownItems = ["Option 1", "Option 2", "Option 3"];

  return (
    <div>
      {loader ? <Loader /> : ""}
      <ToastContainer  position="top-center" // Add this to center the toast
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      <nav className="navbar jkhskjh">
        <div className="navbar-logo">
          <a href="/">Sukhsangam</a>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li>
            <div className="dropdown-container">
              <div className="dropdown-header" onClick={handleDropdownClick}>
                {selectedItem}
              </div>
              {dropdownOpen && (
                <ul className="dropdown-list">
                  {dropdownItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleItemClick(item)}
                      className="dropdown-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li>
            <a href="#" onClick={toggleLoginModal}>
              <b>Log In</b>
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleSignupModal}>
              <b>Sign Up</b>
            </a>
          </li>
        </ul>
      </nav>

      {/* Login Modal */}
      <Modal
        className="ertyp"
        show={isLoginModalOpen}
        onHide={toggleLoginModal}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body className="login-box">
          <div>
            <h2>Join Sukhsangam</h2>
            <p>Book unique spaces directly from local hosts</p>
            <form onSubmit={login}>
              <input
                type="email"
                placeholder="Email"
                className="login-input"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="login-button">
                Log In
              </button>
            </form>
            <p className="login-footer">
              Create new account!!{" "}
              <Link onClick={switchToSignupModal}>Signup</Link>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleLoginModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Signup Modal */}
      <Modal show={isSignupModalOpen} onHide={toggleSignupModal}>
        <Modal.Body className="login-box">
          <div>
            <h2>Join Sukhsangam</h2>
            <p>Book unique spaces directly from local hosts</p>
            <form onSubmit={signup}>
              <input
                type="email"
                placeholder="Email"
                className="signup-input"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="signup-input"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
            <p className="signup-footer">
              Already have an account?{" "}
              <Link onClick={switchToLoginModal}>Login</Link>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleSignupModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
