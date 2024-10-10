import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const skills = [
    "Dribbling",
    "Passing",
    "Shooting",
    "Defending",
    "Goalkeeping",
    "Tackling",
    "Heading",
    "Ball Control"
  ];

  return (
    <div className="about-container">
      <div className="card">
        <h1>About Us</h1>
        <p>This application is dedicated to showcasing the profiles of some of the greatest soccer players in the world.</p>
        <p>Here, you can search for your favorite players and learn more about their jersey numbers, positions, and achievements.</p>
        <p>We aim to provide a simple and user-friendly interface for soccer enthusiasts.</p>
      </div>

      <div className="carousel-container">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-slide">
              <h2>{skill}</h2>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .about-container {
          background-color: #f0f8ff; /* Light blue background */
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: auto;
        }
        .card {
          text-align: center;
          margin-bottom: 30px;
        }
        h1 {
          color: #2c3e50; /* Dark blue */
          margin-bottom: 20px;
        }
        p {
          color: #34495e; /* Darker grey */
          font-size: 18px;
          line-height: 1.6;
        }
        .carousel-container {
          margin-top: 20px;
        }
        .skill-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px; /* Adjust as necessary */
          background-color: #2980b9; /* Dark blue */
          color: white; /* White text */
          font-size: 24px;
          border-radius: 8px;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
        }
        .slick-dots {
          bottom: -30px; /* Adjust position of dots */
        }
      `}</style>
    </div>
  );
};

export default About;
