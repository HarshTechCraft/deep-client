import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../style/header.css";
import { Link } from "react-router-dom";
import "../style/Signup.css";
import "../style/Signin.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
  };

  return (
    <div>
      <nav className="navbar jkhskjh">
        <div className="navbar-logo">
          <a href="/">Sukhsangam</a>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
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

      <Modal
        className="ertyp"
        show={isLoginModalOpen}
        onHide={toggleLoginModal}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body className="signup-box ">
          <div>
            <h2>Join Sukhsangam</h2>
            <p>Book unique spaces directly from local hosts</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="signup-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="signup-input"
              />
              <button type="submit" className="signup-button">
                Log In
              </button>
            </form>
            <p className="signup-footer">
              create new account !!
              <Link to="/signup">Signup</Link>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleLoginModal}>
            Close
          </Button>
          <Button className="poiuytrea" onClick={toggleLoginModal}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isSignupModalOpen} onHide={toggleSignupModal}>
        <Modal.Body>
        <div>
            <h2>Join Sukhsangam</h2>
            <p>Book unique spaces directly from local hosts</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="signup-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="signup-input"
              />
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
            <p className="signup-footer">
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleSignupModal}>
            Close
          </Button>
          <Button className="poiuytrea" onClick={toggleSignupModal}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
