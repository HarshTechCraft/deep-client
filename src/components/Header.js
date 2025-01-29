import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/header.css";
import "../style/Signup.css";
import "../style/Login.css";
import profile from "../images/profile.png";
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
  const [menuOpen, setMenuOpen] = useState(false);
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
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">Sukhsangam</Link>
        </div>

        {/* Hamburger Menu */}

        {/* Center Navigation Options */}

        <div className={`navbar-center nav-responsive-laptop `}>
          <ul className={`navbar-menu gap-menu `}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/venues">Venues</Link>
            </li>
            <li>
              <Link to="/vendors">Vendors</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/real-weddings">Real Weddings</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <span className="ms-3 auth-responsive" onClick={logout}>
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="auth-responsive">
                  <Link to="/signin">Sign In</Link>
                </li>
                <li className="auth-responsive">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div
          className={`navbar-center nav-responsive-mobile  ${
            menuOpen ? "show" : ""
          }`}
        >
          <ul className={`navbar-menu gap-menu ${menuOpen ? "show2" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/venues">Venues</Link>
            </li>
            <li>
              <Link to="/vendors">Vendors</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/real-weddings">Real Weddings</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            {/* {isLoggedIn ? (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            ) : (
              ""
            )} */}
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <span className="ms-3 auth-responsive" onClick={logout}>
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="auth-responsive">
                  <Link to="/signin">Sign In</Link>
                </li>
                <li className="auth-responsive">
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Auth Buttons */}

        <div className="navbar-end">
          <ul className="navbar-menu">
            {isLoggedIn ? (
              <>
                {/* <li>
                  <Link to="#" onClick={logout} className="profile-icon">
                    <img
                      src={profile}
                      alt="User Profile"
                      className="profile-image"
                    />
                  </Link>
                </li> */}
                <li>
                  <span className="ms-3" onClick={logout}>
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin" className="auth-btn">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="auth-btn">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
