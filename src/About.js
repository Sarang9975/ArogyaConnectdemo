import React from 'react';
import './About.css';
import aboutImage from './team3.png';

function AboutUs() {
  return (
    <>    
    <div className="about-container">
      <h3 className="about-title">Welcome to ArogyaConnect</h3>
      <p className="about-description">
        A platform created by a group of enthusiastic and tech-savvy students who share a common
        passion for using technology to make a difference in the world. At ArogyaConnect, we
        envision a future where healthcare is not just a service but a seamless experience. We
        believe that technology can transform healthcare delivery, making it more efficient,
        affordable, and patient-centric. Our vision is to create a healthier and smarter India where
        everyone can easily connect with healthcare professionals and receive the care they need
        when they need it.
      </p>
      <p className="about-mission">
        We are driven by the desire to solve real-world problems and improve the lives of people in
        our community.
      </p>
      <div className="about-team">
        <h4>Our Team:</h4>
        <p>
          We are a dedicated group of students, each bringing a unique set of skills and expertise
          to the table.
        </p>
      </div>
      <p className="about-thankyou">
        Thank you for visiting ArogyaConnect. We look forward to serving you and our community.
      </p>
    </div>
    
        <img src={aboutImage} alt="About Us" className="about-image" />
    </>
);
}

export default AboutUs;