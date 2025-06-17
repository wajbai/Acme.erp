import React from 'react'
import '../css/About.css'; // Import the CSS file
import image1 from '../assets/img/normal/about_13_2.jpg';
import { IoCopy } from "react-icons/io5";
const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Left side - Image */}
          <div className="image-side">
            <div className="image-container">
              <div className="image-placeholder">
                <img src="your-image-path.jpg" alt="ERP Dashboard" />
                {/* You can replace the placeholder with your actual images */}
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                <img src="image3.jpg" alt="Image 3" />
        
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="content-side">
            <div className="content-section">
                <h6 className='h6'>About Our Acme.erp</h6>
              <h1>
                Empowering Smarter<br />
                Decisions for Faith-Based &<br />
                Nonprofit Organizations
              </h1>
              
              <p className="subtitle">
                Acme.erp is an ERP Solution uniquely designed for Religious and Not-for-Profit Organisations
              </p>

              <div className="features">
                <div className="feature-item">
                  <div className='IoCopy'><IoCopy /></div>
                  <p className="feature-text">
                    Acme.erp is a client-server windows application integrated with a cloud-based application for administration and management of religious institutes and NGOs of any size, at multiple levels.
                  </p>
                </div>

                <div className="feature-item">
                  <div className='IoCopy'><IoCopy /></div>
                  <p className="feature-text">
                    It is developed and packaged as an Enterprise Resource Planning solution. Acme.erp is deployed as Head Office & Branch Office Suite. It is hosted in cloud to be accessible by all affected parties.
                  </p>
                </div>
              </div>

              {/* Up arrow button */}
              <div className="arrow-button-container">
                
              </div>
            </div>
          </div> 
        </div>
        
        <div><h2>Branch Office Suite</h2></div>
      </div>
    </div>
  )
}

export default About
