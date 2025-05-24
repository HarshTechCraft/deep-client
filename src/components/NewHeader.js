import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/NewHeader.css"; // Import the CSS file
import logoImage from "../images/SSLogo.png";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    Cookies.remove("authToken");
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
  };

  return (
    <header className="ss-header">
      <div className="ss-logo">
        <img src={logoImage} alt="Website Logo" className="ss-logo-icon" />
        <span className="ss-logo-text">SUKHSANGAM</span>
      </div>
      <button
        className="ss-hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={`ss-hamburger-icon ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <nav className={`ss-nav ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className="ss-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          HOME
        </Link>
        <Link
          to="/venues"
          className="ss-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          VENUE
        </Link>
        <Link
          to="/vendors"
          className="ss-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          VENDORS
        </Link>
        <Link
          to="/aboutus"
          className="ss-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT US
        </Link>
        <Link
          to="/blog"
          className="ss-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          BLOG
        </Link>
        <Link
          to="/contactus"
          className="ss-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT US
        </Link>
        {isLoggedIn ? (
          <Link className="ss-nav-link" onClick={logout}>
            Logout
          </Link>
        ) : (
          <>
            <Link className="ss-nav-link" to="/signin">
              Sign In
            </Link>
            <Link className="ss-nav-link" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default NewHeader;
