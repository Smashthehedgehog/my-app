import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

// Use this when using actual pictures in the page js
const images = ['a.png', 'b.png', 'c.png'];

export default function ImageCarousel({images}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`slide ${index}`} width={'230rem'} height={'230rem'}
          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}