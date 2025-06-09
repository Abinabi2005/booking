import '../components/Home.css';
import React, {useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import Slider from 'react-slick';
import delhi from '../images/delhi.jpg';
import munnar from '../images/munnar.jpg';
import goa from '../images/goa.jpg';
import ooty from '../images/ooty.jpg';
import mumbai from '../images/mumbai.jpg';
import hotel from '../images/hotel.jpeg';
import apart from '../images/apart.jpeg';
import cabin from '../images/cabin.jpeg';
import cott from '../images/cott.jpeg';
import glam from '../images/glam.jpeg';
import gues from '../images/gues.jpeg';
import holi from '../images/holi.jpeg';
import resort from '../images/resort.jpeg';
import serv from '../images/serv.jpeg';
import riads from '../images/riads.jpeg';
import black from '../images/black.jpg';



const Home = () => {
  const images = [
    { id: 1, title: 'Delhi', src: delhi, caption: "2,919 Properties", price: '$120/night', reviews: '4.5 ★ (1,234 reviews)', content: 'Modern comfort in the heart of the capital.' },
    { id: 2, title: 'Munnar', src: munnar, caption: "512 Properties", price: '$95/night', reviews: '4.7 ★ (840 reviews)', content: 'Peaceful stay surrounded by lush greenery.' },
    { id: 3, title: 'Goa', src: goa, caption: "5,251 Properties", price: '$140/night', reviews: '4.6 ★ (2,312 reviews)', content: 'Beachside stays with vibrant nightlife.' },
    { id: 4, title: 'Ooty', src: ooty, caption: "421 Properties", price: '$110/night', reviews: '4.4 ★ (630 reviews)', content: 'Charming cottages in a cool climate.' },
    { id: 5, title: 'Mumbai', src: mumbai, caption: "1,652 Properties", price: '$150/night', reviews: '4.3 ★ (980 reviews)', content: 'Stay near the bustling city life and sea view.' },
  ];

const location = useLocation(); 
const message = location.state?.message;
const username = location.state?.username;

   useEffect(() => {
      document.title = 'Home - Booking.com';
    }, []);

  const images1 = [
    { id: 1, title: 'Hotels', src: hotel },
    { id: 2, title: 'Apartments', src: apart },
    { id: 3, title: 'Resorts', src: resort },
    { id: 4, title: 'Cabins', src: cabin },
    { id: 5, title: 'Cottages', src: cott },
    { id: 6, title: 'Glamping Sites', src: glam },
    { id: 7, title: 'Serviced Apartments', src: serv },
    { id: 8, title: 'Holiday Homes', src: holi },
    { id: 9, title: 'Guest House', src: gues },
    { id: 10, title: 'Riads', src: riads },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="custom-arrow custom-prev">❮</button>,
    nextArrow: <button className="custom-arrow custom-next">❯</button>,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
    },
  },
]
  }

  return (
    <>
      {message && (
        <div style={{
          backgroundColor: '#29335c',
          color: '#eee',
          padding: '15px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontsize:'15px',
        }}>
          {message}
        </div>
      )}

              {username && (
  <div style={{ textAlign: 'center',fontSize: '15px',backgroundColor: '#29335c', color: '#eee',paddingBottom: '15px' }}>
    Logged in as: <strong>{username}</strong>
  </div>
)}

      <div>
        <img src={black} id='blac' alt='banner'/>
      </div>

      <div className='container1'>
        <h2>Browse by Property type</h2>
        <Slider {...settings} className="image-card-slider-container">
          {images1.map((image) => (
            <div key={image.id} className="image-card1">
              <div className="slider-image-wrapper">
                <img src={image.src} className="image1" alt={image.title} />
              </div>
              <div className="image-card-content1">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='container'>
        <h2>Explore India</h2>
        <h4>These popular destinations have a lot to offer</h4>
        <div className="explore-grid custom-grid">
          {images.map((image, index) => (
            <div key={image.id} className={`image-card ${index < 2 ? 'half-width' : 'third-width'}`}>
              <div className="image-wrapper">
                <img src={image.src} className="image" alt={image.title} />
                <div className="image-overlay">
                  <h3>{image.title}</h3>
                  <h5>{image.caption}</h5>
                  <div className="hover-details">
                    <p>{image.price}</p>
                    <p>{image.reviews}</p>
                    <p>{image.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
