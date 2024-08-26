import React, { useState, useEffect } from 'react';
import './App.css';
import starImage from '../src/assets/star.png';
import reviewImg03 from "../src/assets/review01.jpeg" // Update path to your review image

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'slider-bg-01 bg-color-01',
    'slider-bg-01 bg-color-02',
    'slider-bg-01 bg-color-03',
    'slider-bg-01 bg-color-04'
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={starImage}
          alt="star"
          className="star"
          style={{
            width: '15px',
            filter: i <= rating ? 'none' : 'grayscale(100%)',
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className='home'>
      <div id="carousel" className="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${slide} ${index === currentSlide ? 'active' : ''}`}
            >
              {/* Add specific content or styling for each slide here */}
              {index === 1 && (
                <div className='con-1'>
                  <img src={reviewImg03} alt="Image" style={{ width: '70px' }} className='profile-img' />
                  <p className='re'>
                    "The BuildMate+ platform has revolutionized our project management approach. The seamless integration of 3D designs has made it easier to visualize and plan our projects. The streamlined communication tools ensure that everyone is on the same page, minimizing errors and delays. The transparent progress tracking feature is a favorite among our clients, as it provides real-time updates and fosters trust. I can't imagine managing our projects without BuildMate+."
                  </p>
                  <div className='line-re'></div>
                  <div className="footer-con">
                    <div className="position">
                      <p className='re-name'>James Anderson</p>
                      <p className='re-po'>Project Manager</p>
                    </div>
                    <div className="reviewStar">{renderStars(5)}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="prev" onClick={prevSlide}>{'<'}</button>
          <button className="next" onClick={nextSlide}>{'>'}</button>
        </div>
        <div className="carousel-indicators d-none d-lg-block">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
