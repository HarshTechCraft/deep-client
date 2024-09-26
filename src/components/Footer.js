import React from 'react';
import '../style/Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className="footer-section">
      <h3>Sukhsangam</h3>
      <ul>
        <li><a href="#">Home page</a></li>
        <li><a href="#">Book a Venue</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Customer support</a></li>
      </ul>
    </div>
  
    <div className="footer-section">
      <h3>Address</h3>
      <p>123, bdjbs office,<br />meofei road, vhgydas-123456</p>
      <p>+91 ---------</p>
    </div>
  
    <div className="footer-section">
      <h3>Follow us on</h3>
      <div className="social-links">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-snapchat"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
      </div>
    </div>
  
   
  </footer>
  
  );
};

export default Footer;
