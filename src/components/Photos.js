import React, { useEffect } from "react";
import "../style/Photos.css";
import img1 from "../images/photo.jpeg";
import img2 from "../images/photo2.jpeg";
import img3 from "../images/photo3.jpeg";
import img4 from "../images/photo4.jpeg";
import img5 from "../images/photo5.jpeg";
import img6 from "../images/photo6.jpeg";
import img7 from "../images/photo7.jpeg";
import img8 from "../images/photo8.jpeg";
import img9 from "../images/photo9.jpeg";
import img10 from "../images/photo10.jpeg";
import img11 from "../images/photo11.jpeg";
import img12 from "../images/photo12.jpeg";
import Header from "./Header";
import Footer from "./Footer";

const photosData = [
  {
    id: 1,
    title: "Manasvi and Anirudh",
    location: "Real Wedding, Jaipur",
    description:
      "Classic bridal portrait with the bride in a light pink and red lehenga...",
    image:
      "https://i.pinimg.com/236x/a9/bd/1a/a9bd1a998f826cc85c7662980ee68b4d.jpg",
  },
  {
    id: 2,
    title: "Surbhi and Anmol",
    location: "Real Wedding, Jaipur",
    description:
      "Bride walking down the stairs in a stunning white and pink lehenga...",
    image: img2,
  },
  {
    id: 3,
    title: "Ridhima and Pravir",
    location: "Real Wedding, Delhi NCR",
    description: "Pretty bridal shot",
    image: img3,
  },
  {
    id: 4,
    title: "Keya and Arjun",
    location: "Real Wedding, Jaipur",
    description: "Bride in white lehenga",
    image: img4,
  },
  {
    id: 5,
    title: "Kashish and Divyajot",
    location: "Real Wedding, Udaipur",
    description: "Colorful bridal lehenga for mehendi",
    image: img5,
  },
  {
    id: 6,
    title: "Manasvi and Anirudh",
    location: "Real Wedding, Jaipur",
    description:
      "Classic bridal portrait with the bride in a light pink and red lehenga...",
    image: img6,
  },
  {
    id: 7,
    title: "Surbhi and Anmol",
    location: "Real Wedding, Jaipur",
    description:
      "Bride walking down the stairs in a stunning white and pink lehenga...",
    image: img7,
  },
  {
    id: 8,
    title: "Ridhima and Pravir",
    location: "Real Wedding, Delhi NCR",
    description: "Pretty bridal shot",
    image: img8,
  },
  {
    id: 9,
    title: "Keya and Arjun",
    location: "Real Wedding, Jaipur",
    description: "Bride in white lehenga",
    image: img9,
  },
  {
    id: 10,
    title: "Kashish and Divyajot",
    location: "Real Wedding, Udaipur",
    description: "Colorful bridal lehenga for mehendi",
    image: img10,
  },
  {
    id: 11,
    title: "Keya and Arjun",
    location: "Real Wedding, Jaipur",
    description: "Bride in white lehenga",
    image: img11,
  },
  {
    id: 12,
    title: "Kashish and Divyajot",
    location: "Real Wedding, Udaipur",
    description: "Colorful bridal lehenga for mehendi",
    image: img12,
  },
];

const Photos = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the page is loaded
  }, []);

  return (
    <div>
      <Header />
      <div className="photos-container mt-5">
        {photosData.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.image} alt={photo.title} className="photo-image" />
            <h3 className="photo-title">{photo.title}</h3>
            <p className="photo-location">{photo.location}</p>
            <p className="photo-description">{photo.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Photos;
