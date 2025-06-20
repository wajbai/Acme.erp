import React from 'react'
import '../css/About.css';
import image1 from '../assets/img/normal/about_13_2.jpg';
import { IoCopy } from "react-icons/io5";
import aboutus from "../assets/img/bg/aboutus.jpg"
import about2 from "../assets/img/normal/about_13_3.jpg"
import about1 from "../assets/img/normal/about_13_2.jpg"
import { motion } from "framer-motion";

import org1 from "../assets/img/client/friars.jpg";
import org2 from "../assets/img/client/jac.jpg";
import org3 from "../assets/img/client/charity.jpg";
import org4 from "../assets/img/client/chengelpet.jpg";
import org5 from "../assets/img/client/claretian.jpg";
import org6 from "../assets/img/client/congregation-of sister.jpg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 60 }, // animate from right
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const itemLeftToRight = {
  hidden: { opacity: 0, x: -60 }, // animate from left
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const itemRightToLeft = {
  hidden: { opacity: 0, x: 60 }, // animate from right
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

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
              <motion.img
                className='image1'
                src={aboutus}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />
              <motion.img
                className='image2 move-right'
                src={about2}
                alt="Image 2"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              />
              <motion.img
                className='image3 move-top'
                src={about1}
                alt="Image 3"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              />
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

              <motion.div
                className="features"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div className="feature-item" variants={itemVariants}>
                  <div className='IoCopy'><IoCopy /></div>
                  <p className="feature-text">
                    Acme.erp is a client-server windows application integrated with a cloud-based application for administration and management of religious institutes and NGOs of any size, at multiple levels.
                  </p>
                </motion.div>

                <motion.div className="feature-item" variants={itemVariants}>
                  <div className='IoCopy'><IoCopy /></div>
                  <p className="feature-text">
                    It is developed and packaged as an Enterprise Resource Planning solution. Acme.erp is deployed as Head Office & Branch Office Suite. It is hosted in cloud to be accessible by all affected parties.
                  </p>
                </motion.div>
              </motion.div>

              {/* Up arrow button */}
              <div className="arrow-button-container">

              </div>
            </div>
          </div>
        </div>

        {/* Branch and Head Office Suite Section */}
        <motion.div
          className="suite-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="suite-container">
            <motion.div className="suite-item" variants={itemLeftToRight}>
              <h2>Branch Office Suite</h2>
              <p>
                Branch Office Suite is a Windows application from a single or multiple terminals. The system can be configured for a single or multiple users.
                Branch office Application consists of seven Modules including Financial Accounting, Statutory Compliance, Asset Management, Payroll Processing, Networking (Donor Management).
              </p>
            </motion.div>
            <motion.div className="suite-item" variants={itemRightToLeft}>
              <h2>Head Office Suite</h2>
              <p>
                Head Office Suite is a web-based application for generating financial reports from all Branch Offices at different levels.
                The data from the individual Branch Offices are updated to the Head Office on demand basis or asynchronously (on scheduled intervals).
                It provides easy access to the financial statements of any Branch Office, drilling down to the level of single transaction.
                Consolidated reports combining various branches on multiple criteria can be generated.
              </p>
            </motion.div>
          </div>
        </motion.div>
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
