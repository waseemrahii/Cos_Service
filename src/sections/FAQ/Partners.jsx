import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CosmicLogo from '../../assets/CosmicLogo.png';  // Adjust the path as needed

export default function Partners({ partnersLogos }) {
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  };

  return (
      <section className="partner-section" style={{ backgroundColor: '#F4F4F4' }}>
          <div className="container">
              <div className="row">
                  <div className="col">
                      <Slider {...settings}>
                          {partnersLogos.map((logo, index) => (
                              <div key={index}>
                                  <img src={CosmicLogo} alt={logo.alt} style={{ width: '100px', height: 'auto', margin: '0 10px' }} />
                              </div>
                          ))}
                      </Slider>
                  </div>
              </div>
          </div>
      </section>
  );
}
