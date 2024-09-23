import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../style/imageSlider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import image1 from '../images/image3.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image1.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const slideImages = [
      { url: image1 },
      { url: image2 },
      { url: image3 },
      { url: image4 },
      { url: image5 }
      
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      beforeChange: (current, next) => setCurrentSlide(next),
    };
  
    return (
      <div className="image-slider">
        <Slider {...settings}>
          {slideImages.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default ImageSlider;
