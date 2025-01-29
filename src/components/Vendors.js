import React, { useEffect, useRef, useState } from "react";
import "../style/Vendors.css";
import img1 from "../images/Photographer1.jpeg";
import img2 from "../images/Photographer2.jpeg";
import img3 from "../images/Photographer3.jpeg";
import img4 from "../images/Photographer4.jpeg";
import img5 from "../images/Photographer5.jpeg";
import img6 from "../images/Photographer6.jpeg";
import img7 from "../images/Photographer7.jpeg";
import Header from "./Header";
import Footer from "./Footer";

function Vendors() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // Scroll functions for left and right arrows
  const scrollLeft = () => {
    console.log(scrollRef.current.scrollLeft);
    scrollRef.current.scrollBy({ left: 230, behavior: "smooth" });
  };

  const scrollRight = () => {
    console.log(scrollRef.current.scrollLeft);
    scrollRef.current.scrollBy({ left: -230, behavior: "smooth" });
  };

  // Check scroll position to toggle left arrow visibility
  const handleScroll = () => {
    if (scrollRef.current.scrollLeft > 0) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const photographer = [
    {
      id: 1,
      name: "Foto Cruise",
      location: "Pitampura, Delhi NCR",
      rating: 4.9,
      reviews: 80,
      price: "₹70,000 per day",

      image: img1, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Dream Weddings",
      location: "South Delhi",
      rating: 4.8,
      reviews: 95,
      price: "₹65,000 per day",

      image: img2, // Replace with actual image URL
    },
    {
      id: 3,
      name: "Golden Lens Photography",
      location: "Mumbai, Maharashtra",
      rating: 4.7,
      reviews: 120,
      price: "₹80,000 per day",

      image: img3, // Replace with actual image URL
    },
    {
      id: 4,
      name: "Royal Frames Studio",
      location: "Jaipur, Rajasthan",
      rating: 4.6,
      reviews: 110,
      price: "₹55,000 per day",

      image: img4, // Replace with actual image URL
    },
    {
      id: 5,
      name: "Wedlock Memories",
      location: "Bangalore, Karnataka",
      rating: 4.9,
      reviews: 135,
      price: "₹90,000 per day",

      image: img5, // Replace with actual image URL
    },
    {
      id: 6,
      name: "Shutter Stories",
      location: "Chennai, Tamil Nadu",
      rating: 4.5,
      reviews: 100,
      price: "₹60,000 per day",

      image: img6, // Replace with actual image URL
    },
    {
      id: 7,
      name: "Everlasting Moments",
      location: "Kolkata, West Bengal",
      rating: 4.7,
      reviews: 85,
      price: "₹50,000 per day",

      image: img7, // Replace with actual image URL
    },
    {
      id: 8,
      name: "Timeless Tales Photography",
      location: "Hyderabad, Telangana",
      rating: 4.8,
      reviews: 105,
      price: "₹75,000 per day",

      image: img1, // Replace with actual image URL
    },
    {
      id: 9,
      name: "Lens & Light Studios",
      location: "Ahmedabad, Gujarat",
      rating: 4.6,
      reviews: 90,
      price: "₹58,000 per day",

      image: img2, // Replace with actual image URL
    },
    {
      id: 10,
      name: "Perfect Pixel Productions",
      location: "Pune, Maharashtra",
      rating: 4.9,
      reviews: 150,
      price: "₹85,000 per day",

      image: img3, // Replace with actual image URL
    },
  ];

  const bridalMakeupArtists = [
    {
      id: 1,
      name: "Lily's Bridal Makeup",
      location: "New York, NY",
      rating: 4.8,
      reviews: 120,
      price: "₹41550",
      image:
        "https://i.pinimg.com/736x/02/ea/d7/02ead7833215ea1a57e9e427d609651b.jpg",
    },
    {
      id: 2,
      name: "Bella Beauty",
      location: "Los Angeles, CA",
      rating: 4.7,
      reviews: 95,
      price: "₹37350",
      image:
        "https://i.pinimg.com/236x/d2/c6/fd/d2c6fd4cc7a7cb1402d8836df873a210.jpg",
    },
    {
      id: 3,
      name: "Glamour by Grace",
      location: "Chicago, IL",
      rating: 4.9,
      reviews: 200,
      price: "₹49800",
      image:
        "https://i.pinimg.com/236x/e4/b6/01/e4b601f50d6aea026a2fe01694be8636.jpg",
    },
    {
      id: 4,
      name: "Pure Elegance Makeup",
      location: "Miami, FL",
      rating: 4.6,
      reviews: 78,
      price: "₹33200",
      image:
        "https://i.pinimg.com/236x/6d/37/5d/6d375d260affd786d1c9ebd42972695c.jpg",
    },
    {
      id: 5,
      name: "The Makeup Studio",
      location: "Dallas, TX",
      rating: 4.5,
      reviews: 50,
      price: "₹29150",
      image:
        "https://i.pinimg.com/236x/bb/36/00/bb3600c0f758e283104b3d7424de5ab3.jpg",
    },
    {
      id: 6,
      name: "Flawless Faces",
      location: "San Francisco, CA",
      rating: 5.0,
      reviews: 150,
      price: "₹58100",
      image:
        "https://i.pinimg.com/236x/5d/dd/f6/5dddf68922bb2b6eb04bbbaaa93bba0e.jpg",
    },
    {
      id: 7,
      name: "Bridal Glow by Sophie",
      location: "Houston, TX",
      rating: 4.8,
      reviews: 180,
      price: "₹45750",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPs6SSQ2YHtfysljzf1E2Iay-Upnq2R8n_VXiFCscpMdp5MeAMkfr1LE&s",
    },
    {
      id: 8,
      name: "Radiance Bridal Makeup",
      location: "Las Vegas, NV",
      rating: 4.7,
      reviews: 110,
      price: "₹39900",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6MVEnLjkw0wCSAh-GxtV0s7mfCU9_GBCqd2wjAex1OZxbpPppHERyWA&s",
    },
  ];

  const familyMakeupArtists = [
    {
      id: 1,
      name: "Family Glam by Ava",
      location: "Miami, FL",
      rating: 4.8,
      reviews: 90,
      price: "₹29050",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Kara's Family Beauty",
      location: "New York, NY",
      rating: 4.7,
      reviews: 115,
      price: "₹33200",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Flawless Family Faces",
      location: "Los Angeles, CA",
      rating: 4.9,
      reviews: 120,
      price: "₹37350",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Elite Family Makeup",
      location: "Chicago, IL",
      rating: 4.6,
      reviews: 80,
      price: "₹31125",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "The Family Glam Squad",
      location: "Dallas, TX",
      rating: 4.8,
      reviews: 140,
      price: "₹41550",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Luxe Family Beauty",
      location: "San Francisco, CA",
      rating: 4.7,
      reviews: 95,
      price: "₹34860",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Radiant Family Looks",
      location: "Houston, TX",
      rating: 5.0,
      reviews: 60,
      price: "₹45750",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Elegant Touch by Anna",
      location: "Las Vegas, NV",
      rating: 4.6,
      reviews: 110,
      price: "₹32370",
      image: "https://via.placeholder.com/150",
    },
  ];

  const mehendiArtists = [
    {
      id: 1,
      name: "Mehendi by Maya",
      location: "New Delhi, India",
      rating: 4.9,
      reviews: 150,
      price: "₹6640",
      image:
        "https://i.pinimg.com/474x/a1/24/aa/a124aa8cc50efa373ff02ec0463a738f.jpg",
    },
    {
      id: 2,
      name: "Rani Mehendi Creations",
      location: "Mumbai, India",
      rating: 4.7,
      reviews: 120,
      price: "₹5810",
      image:
        "https://i.pinimg.com/236x/84/1f/bd/841fbd62b4d2c80fbfbf4995c46a636e.jpg",
    },
    {
      id: 3,
      name: "Madhuri's Mehendi",
      location: "Bengaluru, India",
      rating: 5.0,
      reviews: 200,
      price: "₹8300",
      image:
        "https://i.pinimg.com/236x/d1/54/c5/d154c5f5a7e310dcdb91971f7245b978.jpg",
    },
    {
      id: 4,
      name: "Vibrant Mehendi Art",
      location: "Chennai, India",
      rating: 4.6,
      reviews: 95,
      price: "₹4980",
      image:
        "https://i.pinimg.com/236x/3f/d3/e8/3fd3e810714a560ae11b23f93f9041e6.jpg",
    },
    {
      id: 5,
      name: "Elegant Henna by Priya",
      location: "Kolkata, India",
      rating: 4.8,
      reviews: 140,
      price: "₹6225",
      image:
        "https://i.pinimg.com/236x/a6/cd/f4/a6cdf49ebe467ab6e62ec3f8e6bae8fe.jpg",
    },
    {
      id: 6,
      name: "Royal Mehendi Artistry",
      location: "Hyderabad, India",
      rating: 4.7,
      reviews: 110,
      price: "₹7055",
      image:
        "https://i.pinimg.com/474x/bd/a9/6d/bda96df7d043fccbd701f64bbf8a40a0.jpg",
    },
    {
      id: 7,
      name: "Traditional Henna by Neha",
      location: "Jaipur, India",
      rating: 4.9,
      reviews: 180,
      price: "₹7470",
      image:
        "https://i.pinimg.com/236x/34/77/e4/3477e4ea370ca9275700c9bec3b50ce4.jpg",
    },
    {
      id: 8,
      name: "Henna Bliss",
      location: "Ahmedabad, India",
      rating: 4.8,
      reviews: 130,
      price: "₹5395",
      image:
        "https://i.pinimg.com/236x/4f/ab/11/4fab1137ee5902502bda541c4b60038a.jpg",
    },
  ];

  const sherwani = [
    {
      id: 1,
      name: "Royal Sherwani Collection",
      location: "Mumbai, India",
      rating: 4.8,
      reviews: 150,
      price: "₹24900",
      image:
        "https://i.pinimg.com/236x/83/6f/dc/836fdcce573189937133ca9475f00c28.jpg",
    },
    {
      id: 2,
      name: "Elegant Sherwanis by Amir",
      location: "New Delhi, India",
      rating: 4.7,
      reviews: 120,
      price: "₹20750",
      image:
        "https://i.pinimg.com/474x/b3/35/7f/b3357f22cae523b4264da671f5a5c30e.jpg",
    },
    {
      id: 3,
      name: "Bridal Sherwani by Arjun",
      location: "Bengaluru, India",
      rating: 5.0,
      reviews: 200,
      price: "₹29050",
      image:
        "https://i.pinimg.com/236x/56/f4/38/56f438c58db22e7821fa804811981c8f.jpg",
    },
    {
      id: 4,
      name: "Traditional Sherwani Shop",
      location: "Chennai, India",
      rating: 4.6,
      reviews: 95,
      price: "₹23240",
      image:
        "https://i.pinimg.com/236x/60/8d/09/608d09b6cae67c93bf2d876b5ab4bd40.jpg",
    },
    {
      id: 5,
      name: "Sherwani Couture by Raj",
      location: "Kolkata, India",
      rating: 4.9,
      reviews: 180,
      price: "₹33200",
      image:
        "https://i.pinimg.com/474x/49/25/fd/4925fd0bed7531d4aed648785826a1ce.jpg",
    },
    {
      id: 6,
      name: "Heritage Sherwanis",
      location: "Hyderabad, India",
      rating: 4.7,
      reviews: 130,
      price: "₹22410",
      image:
        "https://i.pinimg.com/236x/5a/11/78/5a1178fdba60a4186d51123e124045c7.jpg",
    },
    {
      id: 7,
      name: "Luxurious Sherwanis by Manish",
      location: "Jaipur, India",
      rating: 5.0,
      reviews: 160,
      price: "₹34860",
      image:
        "https://i.pinimg.com/474x/0c/87/56/0c875647056b05072e8ca052b42cfcbb.jpg",
    },
    {
      id: 8,
      name: "Classic Sherwani Designs",
      location: "Ahmedabad, India",
      rating: 4.8,
      reviews: 140,
      price: "₹26660",
      image:
        "https://i.pinimg.com/236x/8c/c7/7a/8cc77ad8500e25ccfbc6f806868277c5.jpg",
    },
  ];

  const sherwaniOnRent = [
    {
      id: 1,
      name: "Sherwani Rental by Raj",
      location: "Mumbai, India",
      rating: 4.8,
      reviews: 140,
      price: "₹6640/day",
      image:
        "https://i.pinimg.com/236x/8c/c7/7a/8cc77ad8500e25ccfbc6f806868277c5.jpg",
    },
    {
      id: 2,
      name: "LuxRent Sherwanis",
      location: "New Delhi, India",
      rating: 4.7,
      reviews: 120,
      price: "₹6225/day",
      image:
        "https://i.pinimg.com/474x/0c/87/56/0c875647056b05072e8ca052b42cfcbb.jpg",
    },
    {
      id: 3,
      name: "Designer Sherwanis on Rent",
      location: "Bengaluru, India",
      rating: 5.0,
      reviews: 180,
      price: "₹7470/day",
      image:
        "https://i.pinimg.com/236x/5a/11/78/5a1178fdba60a4186d51123e124045c7.jpg",
    },
    {
      id: 4,
      name: "Elegant Sherwanis for Rent",
      location: "Chennai, India",
      rating: 4.6,
      reviews: 95,
      price: "₹7055/day",
      image:
        "https://i.pinimg.com/474x/49/25/fd/4925fd0bed7531d4aed648785826a1ce.jpg",
    },
    {
      id: 5,
      name: "Bridal Sherwani Rental",
      location: "Kolkata, India",
      rating: 4.9,
      reviews: 150,
      price: "₹7895/day",
      image:
        "https://i.pinimg.com/236x/60/8d/09/608d09b6cae67c93bf2d876b5ab4bd40.jpg",
    },
    {
      id: 6,
      name: "Luxury Sherwani Rentals",
      location: "Hyderabad, India",
      rating: 4.7,
      reviews: 110,
      price: "₹6640/day",
      image:
        "https://i.pinimg.com/236x/56/f4/38/56f438c58db22e7821fa804811981c8f.jpg",
    },
    {
      id: 7,
      name: "Royal Sherwani Rental",
      location: "Jaipur, India",
      rating: 4.8,
      reviews: 130,
      price: "₹8300/day",
      image:
        "https://i.pinimg.com/474x/b3/35/7f/b3357f22cae523b4264da671f5a5c30e.jpg",
    },
    {
      id: 8,
      name: "Sherwani on Rent by Aman",
      location: "Ahmedabad, India",
      rating: 4.7,
      reviews: 140,
      price: "₹5810/day",
      image:
        "https://i.pinimg.com/236x/83/6f/dc/836fdcce573189937133ca9475f00c28.jpg",
    },
  ];

  const cateringServices = [
    {
      id: 1,
      name: "Delicious Bites Catering",
      location: "Mumbai, India",
      rating: 4.8,
      reviews: 200,
      price: "₹1245/person",
      image:
        "https://i.pinimg.com/736x/b0/60/14/b060148f0c215b5ac8b72694d67e1136.jpg",
    },
    {
      id: 2,
      name: "Gourmet Catering by Shyam",
      location: "New Delhi, India",
      rating: 4.7,
      reviews: 150,
      price: "₹1494/person",
      image:
        "https://i.pinimg.com/236x/99/79/3a/99793a90172b8a7764e83659523ea02a.jpg",
    },
    {
      id: 3,
      name: "Luxury Banquet Catering",
      location: "Bengaluru, India",
      rating: 5.0,
      reviews: 250,
      price: "₹1660/person",
      image:
        "https://i.pinimg.com/474x/9b/12/d4/9b12d4492b8f9141ddcb98ea73759057.jpg",
    },
    {
      id: 4,
      name: "Taste of Tradition Catering",
      location: "Chennai, India",
      rating: 4.6,
      reviews: 100,
      price: "₹1328/person",
      image:
        "https://i.pinimg.com/236x/84/e0/96/84e096e70e8a7ff1e56be66b4e4e619f.jpg",
    },
    {
      id: 5,
      name: "Royal Wedding Catering",
      location: "Kolkata, India",
      rating: 4.9,
      reviews: 180,
      price: "₹1826/person",
      image:
        "https://i.pinimg.com/236x/84/e0/96/84e096e70e8a7ff1e56be66b4e4e619f.jpg",
    },
    {
      id: 6,
      name: "Saffron Catering Services",
      location: "Hyderabad, India",
      rating: 4.7,
      reviews: 120,
      price: "₹1411/person",
      image:
        "https://i.pinimg.com/236x/e9/18/7c/e9187cd9585a5d47844ab52604aef7f9.jpg",
    },
    {
      id: 7,
      name: "Divine Catering",
      location: "Jaipur, India",
      rating: 5.0,
      reviews: 200,
      price: "₹2075/person",
      image:
        "https://i.pinimg.com/236x/54/b6/c1/54b6c16b100962d6651c2190eb5a45e3.jpg",
    },
    {
      id: 8,
      name: "Exquisite Catering by Aman",
      location: "Ahmedabad, India",
      rating: 4.8,
      reviews: 160,
      price: "₹1577/person",
      image:
        "https://i.pinimg.com/236x/54/b6/c1/54b6c16b100962d6651c2190eb5a45e3.jpg",
    },
  ];

  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Default viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, options);
    const searchCards = document.querySelectorAll(".vendor-card");
    searchCards.forEach((card) => observer.current.observe(card));

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <div className="Vendors">
      <Header />

      <div className="Vendor mt-5">
        {/* List of vendor categories */}
        {[
          { title: "Photographers", data: photographer },
          { title: "Bridal Makeup", data: bridalMakeupArtists },

          { title: "Mehendi Artists", data: mehendiArtists },
          { title: "Sherwani", data: sherwani },
          { title: "Catering Services", data: cateringServices },
          { title: "Sherwani on Rent", data: sherwaniOnRent },
        ].map((vendor, index) => (
          <div key={index} className="vendor-section  container">
            <h2>{vendor.title}</h2>
            <div className="vendor-slider">
              {showLeftArrow && (
                <button className="nav-button left" onClick={scrollRight}>
                  &#8249;
                </button>
              )}

              <div className="vendor-list" ref={scrollRef}>
                {vendor.data.map((item) => (
                  <div className="vendor-card" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="vendor-image"
                    />
                    <h2>{item.name}</h2>
                    <p>{item.location}</p>
                    <p>
                      <span>⭐ {item.rating}</span> ({item.reviews} reviews)
                    </p>
                    <p className="vendor-price">{item.price}</p>
                  </div>
                ))}
              </div>

              <button className="nav-button right" onClick={scrollLeft}>
                &#8250;
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Vendors;
