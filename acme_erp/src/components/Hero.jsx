import React from 'react';
import { FaPlay } from 'react-icons/fa';
import hero from '../assets/home_ills.png'; 
import '../css/Hero.css'; 
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row px-5 align-items-center min-vh-100 py-5">
          {/* Left Content */}
          <div className="col-lg-7 col-md-12 pe-lg-5">
            <div className="hero-content">
              <div className="welcome-tag mb-3">
                Welcome to Acme.erp
              </div>
              
              <h1 className="hero-title mb-4">
                Simplify Accounting for
                <br />
                <span style={{color:"#004867"}} >Purpose-Driven</span>
                <br />
                Organizations
              </h1>
              
              <p className="hero-description mb-5">
                Acme.erp is an easy-to-use accounting software built for NGOs, non-profits, and religious 
                institutions. Manage your finances clearly, save time, and stay focused on your mission.
              </p>
              
              <div className="hero-buttons align-items-center d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-trial">
                  Free Trial
                </button>
                <button className="btn btn-demo d-flex">
                  <div className="play-icon me-2 align-items-center" style={{ animation: 'pulsePlay 1.2s infinite' }}>
                    <FaPlay size={12} />
                  </div>
                  Watch Demo Video
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="col-lg-5 col-md-12 ps-lg-4 d-flex justify-content-center align-items-center">
            <img
              src={hero}
              alt="Accounting Illustration"
              className="hero-image"
              style={{ maxHeight: 400, objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="hero-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className=" circle-3"></div>
        {/* <div className="floating-circle circle-4"></div> */}
        {/* <div className="floating-circle circle-5"></div> */}
        
        <div className=" square-1"></div>
        {/* <div className=" square-2"></div> */}
        {/* <div className=" square-3"></div> */}
        
        <div className=" ring-2"></div>
        <div className=" ring-1"></div>
        
        <div className="bg-wave"></div>
        <div className="bg-gradient-circle"></div>
      </div>

     
    </section>
  );
};

export default Hero;