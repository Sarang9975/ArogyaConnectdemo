import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import heroImage from './hero3.png'; // You should update the path to the actual image file
import missionImage from './missionpic.png'; // Update the path accordingly
import telemedicineImage from './enhacement.png'; // Update the path accordingly
import QueueImage from './whyqueue.png'; // Replace with your actual image path
import ChatbotImage from './whybot.jpg'; // Replace with your actual image path
import QrCodeImage from './whyqr.jpg'; // Replace with your actual image path
import EhrImage from './whyehr2.png'; // Replace with your actual image path
import Footer from './Footer.js';




function host() {
  
  return (
    <>
    <div className="App">
      
      <main>
        <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-image"/>
        <h1>Connecting Patients and Doctors <br></br>with a Touch of <span className="typewriter-text">Innovation</span></h1>

          <h2>Designed to transform the way patients and doctors interact, 
          <br></br>streamlining the entire healthcare journey using AI.</h2>
          <h1 className='darkwla'>From Diagnosis to Recovery, Just Scan!</h1>
          <a href='./about' className='seemore'><button>See More</button></a>
         <a href='./login'> <button className='login-button'>Log In</button></a>
        </section>
        
        <section className="mission">
        <div className="mission-image-container">
    <img src={missionImage} alt="Mission" className="mission-image"/>
  </div>
        <div className="whyarogya-info" >
        
          <h1>Our Mission</h1>
          <p>At ArogyaConnect, our mission is to revolutionize healthcare 
          accessibility in India through the power of technology. We are committed to:</p>
          <ul>
            <li>Connecting Doctors and Patients</li>
            <li>Empowering Patients</li>
            <li>Improving Healthcare Efficiency</li>
            <li>Enhancing Health Equity</li>
            <li>Continuous Innovation</li>
            <li>Community Impact</li>
          </ul>
          </div>
        </section>

        <section className="whyarogya">
      <div className="whyarogya-content">
        <div className="whyarogya-features">
          <div className="feature-block">
            <img src={QueueImage} alt="Queue Management" className="feature-image" />
            <b>Smart Queue Management:</b>
            Say goodbye to guesswork. Patients can check real-time wait times, ensuring that the neediest receive priority, reducing frustration during hospital visits.
          </div>
          <div className="feature-block">
            <img src={ChatbotImage} alt="Multilingual Chatbot" className="feature-image" />
            <b>Multilingual Chatbot:</b>
            Language barriers are no more. Our AI-powered chatbot communicates with patients in their preferred languages.
          </div>
          <div className="feature-block">
            <img src={QrCodeImage} alt="QR-Based Detection" className="feature-image" />
            <b>QR-Based Detection:</b>
            We've embraced cutting-edge technology with QR codes, offering doctors an efficient, cost-effective method for real-time presence updates.
          </div>
          <div className="feature-block">
            <img src={EhrImage} alt="Seamless EHR Integration" className="feature-image" />
            <b>Seamless EHR Integration</b>
            Your health history is at your fingertips. Our portal seamlessly integrates Electronic Health Records (EHR), granting doctors insights.
          </div>
        </div>
        <div className="whyarogya-info2">
          <h1>Why choose ArogyaConnect?</h1>
          <p><b>Easy Appointment Scheduling:</b> User-friendly interface, calendar integration, and real-time availability of doctors.</p>
          <p><b>Adherence to Regulations:</b> Our platform complies with stringent healthcare data protection regulation, such as DISHA. This means that your data is handled with the utmost care and in compliance with industry standards.</p>
          <p><b>Convenience and Accessibility:</b> Schedule consultations from the comfort of your homes, reducing the need for physical travel.</p>
          <p><b>AI-driven appointment predictions,</b>effortlessly fine-tune your doctor's schedule, while our system crafts seamless E-prescriptions, all aimed at elevating your healthcare journey to new heights</p>
          <p><b>Appointment security and transparency, </b>are as crystal-clear as recognizing the unique voices of patients and doctors during registration</p>
        </div>
      </div>
    </section>

        <section className="recent-enhancements">
        <img src={telemedicineImage} alt="Telemedicine" className="telemedicine-image"/>
        <h1>Recent Enhancements</h1>
          <h1 className='telemed'>Telemedicine Integration</h1>
           <p>Consult with doctors from the comfort of your home. ArogyaConnect offers telemedicine appointments, providing patients with the flexibility to connect with doctors remotely, particularly beneficial during emergencies or for those with mobility issues.</p>
           <button className="see-more-btn">See More</button>
        </section>



      </main>
    </div>
    <Footer/>
    </>
  );
}

export default host;
