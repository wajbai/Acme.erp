import React from 'react'
import '../css/About.css'; // Import the CSS file
import image1 from '../assets/img/normal/about_13_2.jpg';
import { IoCopy } from "react-icons/io5";
import aboutus from "../assets/img/bg/aboutus.jpg"
import about2 from "../assets/img/normal/about_13_3.jpg"
import about1 from "../assets/img/normal/about_13_2.jpg"

// Add these imports at the top with your other image imports
import org1 from "../assets/img/client/friars.jpg";
import org2 from "../assets/img/client/jac.jpg";
import org3 from "../assets/img/client/charity.jpg";
import org4 from "../assets/img/client/chengelpet.jpg";
import org5 from "../assets/img/client/claretian.jpg";
import org6 from "../assets/img/client/congregation-of sister.jpg";


const About = () => {
  const organizations = [
    { name: "Sisters of St. Anne Madras", image: org1 },
    { name: "Sisters of Charity", image: org2 },
    { name: "Roman Catholic Diocese of Chingleput", image: org3 },
    { name: "Claretian Missionaries", image: org4 },
    { name: "Congregation of Sisters of St. Anne, Tiruchirappalli", image: org5 },
    { name: "Congregation of the Sisters of St. Anne's, Bangalore", image: org6 }
  ];
  return (
    <div className="about-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Left side - Image */}
          <div className="image-side">
            <div className="image-container">

              {/* <img src="your-image-path.jpg" alt="ERP Dashboard" /> */}
              {/* You can replace the placeholder with your actual images */}
              <img className='image1' src={aboutus} />
              <img className='image2 move-right' src={about2} alt="Image 2" />
              <img className='image3 move-top' src={about1} alt="Image 3" />


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

        {/* Branch and Head Office Suite Section */}
        <div className="suite-section">
          <div className="suite-container">
            <div className="suite-item">
              <h2>Branch Office Suite</h2>
              <p>
                Branch Office Suite is a Windows application from a single or multiple terminals. The system can be configured for a single or multiple users.
                Branch office Application consists of seven Modules including Financial Accounting, Statutory Compliance, Asset Management, Payroll Processing, Networking (Donor Management).
              </p>
            </div>
            <div className="suite-item">
              <h2>Head Office Suite</h2>
              <p>
                Head Office Suite is a web-based application for generating financial reports from all Branch Offices at different levels.
                The data from the individual Branch Offices are updated to the Head Office on demand basis or asynchronously (on scheduled intervals).
                It provides easy access to the financial statements of any Branch Office, drilling down to the level of single transaction.
                Consolidated reports combining various branches on multiple criteria can be generated.
              </p>
            </div>
          </div>
        </div>


      </div>
      <div className="marquee-section">
        <h2 className="marquee-title">Our Partner Organizations</h2>
        <div className="marquee-container">
          <div className="marquee">
            {[...organizations, ...organizations, ...organizations].map((org, index) => (
              <div className="marquee-item" key={`org-${index}`}>
                <img src={org.image} alt={org.name} className="org-logo" />
                <span>{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
