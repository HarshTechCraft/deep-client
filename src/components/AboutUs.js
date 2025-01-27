import { useEffect, useState } from "react";
import aboutus from "../images/aboutus.png";
import aboutus2 from "../images/aboutus2.png";
import aboutus3 from "../images/aboutus3.png";
import "../style/AboutUs.css";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import profile from "../images/profile.png";
import AboutUsSection3 from "./AboutUsSection3";
import AboutUsSection4 from "./AboutUsSection4";
import Footer from "./Footer";

const AboutUs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    Cookies.remove("authToken");
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
  };

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
    const leftElement = document.querySelector(".AU-section2-left");
    const rightElement = document.querySelector(".AU-section2-right");

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the in-view class to trigger animation
            if (entry.target.classList.contains("AU-section2-left")) {
              entry.target.classList.add("in-view-left");
            } else if (entry.target.classList.contains("AU-section2-right")) {
              entry.target.classList.add("in-view-right");
            }
          }
        });
      },

      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    // Observe the left and right elements
    if (leftElement) observer.observe(leftElement);
    if (rightElement) observer.observe(rightElement);

    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`navbar `}>
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">Sukhsangam</a>
        </div>

        <div className="navbar-end">
          <ul className="navbar-menu">
            {isLoggedIn ? (
              <>
                <li>
                  <a href="#" onClick={logout} className="profile-icon">
                    <img
                      src={profile}
                      alt="User Profile"
                      className="profile-image"
                    />
                  </a>
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
      </nav>

      <div className="AboutUs">
        <div className="Aboutus-Section1">
          <div className="AU-Section1-left">
            <div>
              <h1 className="aboutus-text">About Us</h1>
              <span className="aboutus-text-back">
                <a href="/" style={{ textDecoration: "none", color: "black" }}>
                  BACK TO HOME
                </a>
              </span>
            </div>
          </div>
          <div className="AU-Section1-right">
            <img src={aboutus} width={"100%"} height={"100%"} />
          </div>
        </div>
        <div className="Aboutus-Section2 container mt-5 bg-white text-gray-900 py-12 px-6 md:px-24">
          {/* Heading Section */}
          <div className="mt-5 text-left ">
            <h1 className="">About Us</h1>
          </div>

          {/* Main Content Section */}
          <div className="flex justify-between">
            <div className="AU-section2-left slide-left mt-3">
              {/* Left Image */}
              <h1 className="text-3xl md:text-5xl font-bold mt-4">
                The Most Creative Wedding Planner Around The India.
              </h1>

              <div className="relative">
                <img
                  src={aboutus2}
                  alt="Wedding Couple"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="AU-section2-right slide-right">
              <div className="mt-8 flex items-center">
                <img
                  src={aboutus3}
                  alt="Founder"
                  className="w-16 h-16 AU-section2-img3 rounded-full shadow-md"
                />
              </div>
              <p className="text-gray-600 ms-5 mt-5 text-lg leading-relaxed">
                Planning your dream wedding should be an exciting and
                stress-free journey. At Sukhsangam, we bring your unique love
                story to life with creative designs, seamless coordination, and
                an unparalleled attention to detail. Whether you’re dreaming of
                an intimate celebration or a grand event, our expert team is
                dedicated to crafting unforgettable moments tailored just for
                you.
              </p>
            </div>
          </div>
        </div>

        <AboutUsSection3 />
        <AboutUsSection4 />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
