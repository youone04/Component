import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const onClickItem = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${currentImage.src})`;
  }, [currentImage]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              key={index}
              onClick={() => onClickItem(index)}
              style={index === currentIndex ? { border: '3px solid #3AA6B9' } : {  }}
            >
              <img src={image.src} alt={`Gambar ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-description">{currentImage.description}</div>
      <button className="carousel-control prev" onClick={prevSlide}>Previous</button>
      <button className="carousel-control next" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
