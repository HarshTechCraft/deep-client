import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/header.css";
import "../style/Signup.css";
import "../style/Login.css";
import Admin from "./Admin";
import { Loader } from "./Loader";
import Cookies from "js-cookie";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for tracking scroll

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      const response = await axios.post(`${url}/login`, { Email, Password });

      if (response.data.Email) {
        if (response.data.Password) {
          Cookies.set("authToken", response.data.token, {
            secure: true,
            sameSite: "Strict",
            expires: 1,
          });

          toast.success("Login successful!");
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
          toggleLoginModal();
        } else {
          toast.error("Incorrect password!");
        }
      } else {
        toast.error("Email does not exist!");
      }
    } catch (error) {
      toast.error("Error during login!");
      console.error("Error during login:", error);
    } finally {
      setLoader(false);
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsSignupModalOpen(false);
    setIsOpen(false);
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
    setIsLoginModalOpen(false);
    setIsOpen(false);
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        style={{ zIndex: 9999999 }}
        pauseOnHover
      />
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">
          <a href="/">Sukhsangam</a>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          {isLoggedIn ? (
            <li>
              <a href="#" onClick={logout}>
                <b>Log Out</b>
              </a>
            </li>
          ) : (
            <>
              <li>
                <a href="#">
                  <b>
                    <Link to="/signin">Log In</Link>
                  </b>
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleSignupModal}>
                  <b>
                    <Link to="/signup">Sign Up</Link>
                  </b>
                </a>
              </li>
            </>
          )}
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
