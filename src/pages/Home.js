import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import SearchVenue from '../components/SearchVenue';
import Footer from '../components/Footer';
import Section1 from '../components/Section1';
import '../style/Home.css'

function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY+10;
      const maxScroll = 700; 

      // Calculate opacity based on scroll position (between 0 and 1)
      const newOpacity = Math.min(scrollY / maxScroll, 1); // Caps at 1 when scrollY reaches maxScroll
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Apply the fixed class and dynamically set background color */}
      <div className="fixed-section">
        {/* Adding the darkening effect as a background overlay */}
        <div
          className="background-overlay"
          style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}
        ></div>

        <ImageSlider />
        <SearchVenue />
      </div>

      <Header />

      <Section1 />

      <Footer />
    </div>
  );
}

export default Home;
