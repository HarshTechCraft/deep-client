import React, { useEffect } from "react";
import "../style/Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const footerElements = entry.target.querySelectorAll(
            ".footer-section, .social-media-icons, .footer-note"
          );
          if (entry.isIntersecting) {
            footerElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("fadeIn");
              }, index * 500); // Staggered animation effect
            });
          } else {
            footerElements.forEach((element) => {
              element.classList.remove("fadeIn"); // Remove animation if not in view
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is in view
    );

    const footerSection = document.querySelector(".footer-section-wrapper");
    if (footerSection) observer.observe(footerSection);

    // Cleanup on unmount
    return () => {
      if (footerSection) observer.unobserve(footerSection);
    };
  }, []);

  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="footer-section-wrapper">
        {/* Social Media Section */}
        <section
          className="d-flex w-100 justify-content-center justify-content-lg-between p-4 border-bottom footer-section"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="me-5 d-none d-lg-block">
            <span
              style={{ fontSize: "16px", fontWeight: "500", color: "black" }}
            >
              Connect with us on social media for wedding inspirations:
            </span>
          </div>

          <div className="social-media-icons">
            <a
              href="https://www.facebook.com/Sukhsangam"
              className="me-4 text-reset"
              style={{ color: "#4267B2" }}
            >
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a
              href="https://twitter.com/Sukhsangam"
              className="me-4 text-reset"
              style={{ color: "#1DA1F2" }}
            >
              <MDBIcon fab icon="twitter" />
            </a>
            <a
              href="https://www.instagram.com/Sukhsangam"
              className="me-4 text-reset"
              style={{ color: "#E4405F" }}
            >
              <MDBIcon fab icon="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/sukhsangam"
              className="me-4 text-reset"
              style={{ color: "#0077B5" }}
            >
              <MDBIcon fab icon="linkedin" />
            </a>
            <a
              href="https://github.com/Sukhsangam"
              className="me-4 text-reset"
              style={{ color: "#333" }}
            >
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-100" style={{ backgroundColor: "#fff5f7" }}>
          <MDBContainer className="text-center text-md-start mt-5 footer-section">
            <MDBRow className="mt-3">
              {/* Company Info */}
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#FFB933" }}
                >
                  <MDBIcon icon="gem" className="me-3" />
                  Sukhsangam
                </h6>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.8",
                    color: "black",
                  }}
                >
                  At Sukhsangam, we make your dream wedding come true. From
                  planning to execution, we provide a seamless experience for
                  your big day.
                </p>
              </MDBCol>

              {/* Services */}
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#FFB933" }}
                >
                  Services
                </h6>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px" }}
                  >
                    Wedding Planning
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px" }}
                  >
                    Venue Selection
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px" }}
                  >
                    Catering
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px" }}
                  >
                    Photography
                  </a>
                </p>
              </MDBCol>

              {/* Useful Links */}
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#FFB933" }}
                >
                  Useful Links
                </h6>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px", color: "black" }}
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px", color: "black" }}
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px", color: "black" }}
                  >
                    Testimonials
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ fontSize: "14px", color: "black" }}
                  >
                    Contact Us
                  </a>
                </p>
              </MDBCol>

              {/* Contact Info */}
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "#FFB933" }}
                >
                  Contact
                </h6>
                <p style={{ fontSize: "14px" }}>
                  <MDBIcon
                    icon="home"
                    className="me-2"
                    style={{ color: "black" }}
                  />
                  Rajkot, Gujarat, India
                </p>
                <p style={{ fontSize: "14px", color: "black" }}>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@sukhsangam.in
                </p>
                <p style={{ fontSize: "14px", color: "black" }}>
                  <MDBIcon icon="phone" className="me-3" /> +91 987 654 3210
                </p>
                <p style={{ fontSize: "14px", color: "black" }}>
                  <MDBIcon icon="print" className="me-3" /> +91 123 456 7890
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Footer Note */}
        <div
          className="text-center p-4 w-100 footer-note"
          style={{
            backgroundColor: "#fdc3568a",
            color: "black",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          © {new Date().getFullYear()} Sukhsangam | All Rights Reserved
        </div>
      </div>
    </MDBFooter>
  );
};

export default Footer;
