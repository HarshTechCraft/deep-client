import React, { useState } from "react";
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
                  <strong>📍 Address:</strong> 198 West 21th Street, Suite 721,
                  New York NY 10016
                </p>
                <p>
                  <strong>📞 Phone:</strong> +1235 2355 98
                </p>
                <p>
                  <strong>📧 Email:</strong> info@yoursite.com
                </p>
                <p>
                  <strong>🌍 Website:</strong> yoursite.com
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
