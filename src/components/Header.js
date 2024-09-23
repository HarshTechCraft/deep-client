import React, { useState } from 'react';
import '../style/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          
          <li><a href="/login"><b>Log In</b></a></li>
          <li><a href="/signup"><b>Sign Up</b></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
