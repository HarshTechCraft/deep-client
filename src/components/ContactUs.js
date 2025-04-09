import React, { useEffect, useState } from "react";
import img1 from "../images/contactus.jpeg";
import "../style/ContactUs.css";
import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "General Enquiry",
    message: "",
    consent: false,
  });
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the page is loaded
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <div className="ContactUs">
      <Header />
      <div className="container contactus-container">
        <div className="section-1">
          <div className="section-1-left">
            <h1>Contact Us</h1>
            <p className="CU-details" style={{ marginTop: "5em" }}>
              Call : **********
            </p>
            <p className="CU-details">Email : *******@gmail.com</p>
            <p className="CU-details2">
              We can’t wait to start planning your dream wedding with you!
              Please fill out our contact form below and we will be in touch
              very soon.
            </p>
          </div>
          <div className="section-1-right ms-2">
            <img src={img1} />
          </div>
        </div>
        <div className="section-2">
          <div className="section-2-center">
            <div className="contact-container">
              <div className="contact-form-section">
                <h2 className="contact-heading">Get in touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="contact-input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="contact-textarea"
                  ></textarea>
                  <button type="submit" className="contact-button">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-info-section">
                <h2 className="contact-heading">Contact us</h2>
                <p>
                  <strong>📍 Address:</strong> ***********
                </p>
                <p>
                  <strong>📞 Phone:</strong> +91 9925473547
                </p>
                <p>
                  <strong>📧 Email:</strong> team@sukhsangam.in
                </p>
                <p>
                  <strong>🌍 Website:</strong> sukhsangam.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
