import React, { useState, useEffect } from 'react';
import '../components/Flight.css';
import Slider from 'react-slick';
import chba from '../images/chba.jpg';
import chco from '../images/chco.jpg';
import chdu from '../images/chdu.jpg';
import chku from '../images/chku.jpg';
import chkut from '../images/chkut.jpg';
import chkuw from '../images/chkuw.jpg';
import chlo from '../images/chlo.jpg';
import chma from '../images/chma.jpg';
import chsi from '../images/chsi.jpg';
import chpa from '../images/chpa.jpg';
import trba from '../images/trba.jpg';
import trch from '../images/trch.jpg';
import trda from '../images/trda.jpg';
import trhy from '../images/trhy.jpg';
import trka from '../images/trka.jpg';
import trmu from '../images/trmu.jpg';
import trne from '../images/trne.jpg';
import trpu from '../images/trpu.jpg';

const Flight = () => {
  const [activeSlider, setActiveSlider] = useState('international'); 

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };

   useEffect(() => {
          document.title = 'Flight - Booking.com';
        }, []);

  const images1 = [
    { id: 1, title: 'Chennai to Bangkok', src: chba, caption: "10 Dec-17 Dec Round Trip" },
    { id: 2, title: 'Chennai to Colombo', src: chco, caption: "9 Dec-16 Dec Round Trip" },
    { id: 3, title: 'Chennai to Dubai', src: chdu, caption: "10 Dec-17 Dec Round Trip" },
    { id: 4, title: 'Chennai to Kuala Lumpur', src: chku, caption: "11 Dec-18 Dec Round Trip" },
    { id: 5, title: 'Chennai to Kuta', src: chkut, caption: "9 Dec-16 Dec Round Trip" },
    { id: 6, title: 'Chennai to Kuwait', src: chkuw, caption: "13 Dec-20 Dec Round Trip" },
    { id: 7, title: 'Chennai to London', src: chlo, caption: "10 Dec-17 Dec Round Trip" },
    { id: 8, title: 'Chennai to Male City', src: chma, caption: "13 Dec-20 Dec Round Trip" },
    { id: 9, title: 'Chennai to Paris', src: chpa, caption: "11 Dec-18 Dec Round Trip" },
    { id: 10, title: 'Chennai to Singapore', src: chsi, caption: "11 Dec-18 Dec Round Trip" },
  ];

  const images = [
    { id: 1, title: 'Trivandrum to Bangalore', src: trba, caption: "16 Dec-23 Dec Round Trip" },
    { id: 2, title: 'Trivandrum to Chennai', src: trch, caption: "12 Dec-19 Dec Round Trip" },
    { id: 3, title: 'Trivandrum to Dabolim', src: trda, caption: "12 Dec-19 Dec Round Trip" },
    { id: 4, title: 'Trivandrum to Hyderabad', src: trhy, caption: "13 Dec-20 Dec Round Trip" },
    { id: 5, title: 'Trivandrum to Kannur', src: trka, caption: "15 Dec-22 Dec Round Trip" },
    { id: 6, title: 'Trivandrum to Mumbai', src: trmu, caption: "11 Dec-18 Dec Round Trip" },
    { id: 7, title: 'Trivandrum to New Delhi', src: trne, caption: "11 Dec-18 Dec Round Trip" },
    { id: 8, title: 'Trivandrum to Pune', src: trpu, caption: "11 Dec-28 Dec Round Trip" },
  ];

  return (
    <>
      <div className="container1">
        <h2>Popular flights near you</h2>
        <div className="button-container">
          <button
            onClick={() => setActiveSlider('international')}
            className={`toggle-btn ${activeSlider === 'international' ? 'active' : ''}`}
          >
          International
          </button>
          <button
            onClick={() => setActiveSlider('domestic')}
            className={`toggle-btn ${activeSlider === 'domestic' ? 'active' : ''}`}
          >
          Domestic
          </button>
        </div>

        {activeSlider === 'international' ? (
          <>
            <h4>International</h4>
            <div className="image-card-slider-container1">
              <Slider {...settings}>
                {images1.map((image) => (
                  <div key={image.id} className="image-card1">
                    <img src={image.src} className="image1" />
                    <div className="image-card-content1">
                      <h3>{image.title}</h3>
                      <h5>{image.caption}</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </>
        ) : (
          <>
            <h4>Domestic</h4>
            <div className="image-card-slider-container1">
              <Slider {...settings}>
                {images.map((image) => (
                  <div key={image.id} className="image-card1">
                    <img src={image.src} className="image1" />
                    <div className="image-card-content1">
                      <h3>{image.title}</h3>
                      <h5>{image.caption}</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Flight;
