import React from 'react';
import { FaPlay } from 'react-icons/fa';
import hero from '../assets/home_ills.png'; // Adjust the path as necessary
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

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .hero-content {
          padding: 2rem 0;
          position: relative;
          z-index: 10;
        }

        .welcome-tag {
          color: #0369a1;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          display: inline-block;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #64748b;
        }

        .btn-trial {
          background-color: #1e5e7e;
          border: none;
          padding: 14px 32px;
          font-weight: 600;
          border-radius: 25px;
          height: 50px;
          font-size: 16px;
          transition: all 0.3s ease;
          color: white;
        }

        .btn-trial:hover {
          background-color: #164a61;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 94, 126, 0.3);
        }

        .btn-demo {
          align-items: center;
          font-weight: 600;
          border-radius: 25px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: transparent;
          border: none;
          color: #1e5e7e;
        }

        .play-icon {
          background-color: #1e5e7e;
          color: white;
          border-radius: 50%;
          padding: 6px;
          display: flex;
          height: 40px;
          width: 40px;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          max-width: 100%;
          height: auto;
          position: relative;
          z-index: 5;
        }

        /* Floating Background Elements */
        .hero-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        /* Floating Circles */
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }







        .circle-1 {
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          top: 10%;
          left: 8%;
        //   animation-delay: 0s;
          opacity: 0.7;
        }

        .circle-2 {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #45A0C8, #45A0C8);
          top: 12%;
          left: 45%;
        //   animation-delay: 0s;
          opacity: 0.7;
        }

        .circle-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(98deg,#ffffff,rgb(14, 108, 148));
          bottom: -5rem;
          position: absolute;
          left: -7rem;
          border-radius: 50%;
          opacity: 0.5;
        }

        .circle-4 {
          width: 25px;
          height: 25px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          top: 60%;
          left: 25%;
          animation-delay: 3s;
          opacity: 0.8;
        }

        .circle-5 {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #10b981, #059669);
          bottom: 30%;
          right: 25%;
          animation-delay: 4s;
          opacity: 0.6;
        }

        /* Floating Squares */
        .floating-square {
          position: absolute;
          animation: floatRotate 8s ease-in-out infinite;
          border-radius: 8px;
        }

        .square-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(-20deg,#ffffff,rgb(200, 222, 231));
          border-radius: 50%;
        top: -3rem;
          position: absolute;
          right: -10rem;
         
         
          
        }

        .square-2 {
          width: 25px;
          height: 25px;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          bottom: 40%;
          left: 15%;
          animation-delay: 2.5s;
          opacity: 0.6;
          transform: rotate(-20deg);
        }

        .square-3 {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          top: 40%;
          right: 30%;
          animation-delay: 0.5s;
          opacity: 0.5;
          transform: rotate(30deg);
        }
        
        .ring-2 {
          width: 27px;
          height: 27px;
          border: 3px solid;
          border-image: linear-gradient(135deg,rgb(220, 223, 230), rgb(208, 214, 226)) 1;
          top: 19.7%;
        left: 34%;
          position: absolute;
          animation-delay: 0s;
          /* Add rotation animation */
          animation: rotateRing 15s linear infinite;
        }
        /* Gradient Rings */
        .gradient-ring {
          position: absolute;
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        }

        .ring-1 {
          width: 24px;
          height: 24px;
          border: 3px solid;
          border-image: linear-gradient(135deg, #3b82f6,rgb(118, 135, 182)) 1;
          top: 22%;
        left: 34%;
          position: absolute;
          animation-delay: 0s;
          /* Add rotation animation */
          animation: rotateRing 15s linear infinite;
        }


        @keyframes rotateRing {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

       
        /* Large Background Wave */
        .bg-wave {
          position: absolute;
          bottom: -15rem;
          right: -15rem;
          width: 450px;
          height: 450px;
          border: 40px solid #48A1C9;
          border-radius: 50%;
          
         
        }

        /* Large Gradient Circle */
        .bg-gradient-circle {
          position: absolute;
          top: -100px;
          right: -150px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(79, 70, 229, 0.05) 70%, transparent 100%);
          border-radius: 50%;
          animation: breathe 8s ease-in-out infinite;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(8px);
          }
        }

        @keyframes floatRotate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(90deg);
          }
          50% {
            transform: translateY(-25px) rotate(180deg);
          }
          75% {
            transform: translateY(-15px) rotate(270deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(-15deg) translateY(0px);
          }
          50% {
            transform: rotate(-10deg) translateY(-20px);
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
        }

        @keyframes pulsePlay {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(30, 94, 126, 0.5);
          }
          70% {
            transform: scale(1.15);
            box-shadow: 0 0 0 10px rgba(30, 94, 126, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(30, 94, 126, 0);
          }
        }

        /* Responsive Design */
        @media (max-width: 991.98px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-image {
            max-width: 100%;
            height: auto;
          }

          .circle-1, .circle-3 {
            width: 40px;
            height: 40px;
          }

          .ring-1, .ring-2 {
            width: 90px;
            height: 90px;
          }
        }

        @media (max-width: 767.98px) {
          .hero-title {
            font-size: 2rem;
            text-align: center;
          }
          
          .hero-description {
            text-align: center;
            margin: 0 auto 2rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .btn-trial, .btn-demo {
            width: 100%;
            max-width: 200px;
          }
          
          .hero-image {
            max-width: 100%;
            height: auto;
          }

          /* Hide some floating elements on mobile for cleaner look */
          .circle-4, .circle-5, .square-2, .square-3 {
            display: none;
          }
        }

        @media (max-width: 575.98px) {
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .btn-trial, .btn-demo {
            padding: 12px 24px;
            font-size: 14px;
          }

          .bg-wave, .bg-gradient-circle {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;