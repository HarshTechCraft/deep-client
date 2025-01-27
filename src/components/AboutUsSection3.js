import React, { useEffect } from "react";
import aboutus4 from "../images/aboutus4.png";
import { useNavigate } from "react-router-dom";

function AboutUsSection3() {
  const navigate = useNavigate();
  useEffect(() => {
    const firstSection = document.querySelector(".AU-Section3-First");
    const secondSection = document.querySelector(".AU-Section3-second");
    const thirdSection = document.querySelector(".AU-Section3-Third");
    const leftSection = document.querySelector(".AU-S3-left");
    const rightSection = document.querySelector(".AU-S3-right");

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the in-view class to trigger animation
            if (entry.target.classList.contains("AU-Section3-First")) {
              entry.target.classList.add("in-view-left");
            } else if (entry.target.classList.contains("AU-Section3-second")) {
              entry.target.classList.add("in-view-right");
            } else if (entry.target.classList.contains("AU-Section3-Third")) {
              entry.target.classList.add("in-view-left");
            } else if (entry.target.classList.contains("AU-S3-left")) {
              entry.target.classList.add("in-view-right");
            } else if (entry.target.classList.contains("AU-S3-right")) {
              entry.target.classList.add("in-view-left");
            }

            // Stop observing after the section is in view
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // This ensures the section has to be further in view before triggering
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    // Observe the specific sections
    if (firstSection) observer.observe(firstSection);
    if (secondSection) observer.observe(secondSection);
    if (thirdSection) observer.observe(thirdSection);
    if (leftSection) observer.observe(leftSection);
    if (rightSection) observer.observe(rightSection);

    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="AboutUs">
      <div className="Aboutus-Section3 container">
        <div className="AU-Section3-First text-center">
          <span> Who We Are?</span>
        </div>
        <div className="AU-Section3-second">
          <span>
            We are your partners in creating unforgettable wedding experiences.
            At Sukhsangam, we specialize in turning your vision into reality.
            With years of expertise, a passion for creativity, and a commitment
            to excellence, our team works tirelessly to design and execute
            weddings that reflect your personality, style, and love story. From
            concept to completion, we ensure every detail is handled with care,
            so you can focus on enjoying the journey to your big day.
          </span>
        </div>
        <div className="AU-Section3-Third">
          <div className="AU-S3-left">
            <span>
              At Sukhsangam, we are more than just planners – we are dream
              makers. Our mission is to transform your special day into a
              celebration of love and joy that you will cherish forever. With a
              dedicated team of creative professionals and a passion for
              perfection, we take pride in crafting bespoke weddings tailored to
              your unique story. From the first consultation to the final dance,
              we are here to bring your vision to life with elegance and ease.
            </span>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
          <div className="AU-S3-right">
            <img src={aboutus4} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection3;
