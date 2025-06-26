import React from 'react';
import { motion } from 'framer-motion';
import {
  FaChartBar, FaMoneyBillWave, FaClipboardList, FaNetworkWired, FaMobileAlt,
  FaGem, FaGlobe, FaLink, FaChartLine, FaComments, FaBriefcase,
  FaExclamationTriangle, FaRegFileAlt, FaCogs
} from 'react-icons/fa';

const Functional = () => {
  const features = [
    { id: 1, title: "Book Keeping", description: "Helps Maintaining day to day account books", icon: <FaChartBar /> },
    { id: 2, title: "Payroll", description: "Processing of Wages and Monthly Salary made easier with Easy Handling of Attendance and Loans", icon: <FaMoneyBillWave /> },
    { id: 3, title: "Asset Tracking", description: "Keep track of the value changes in your assets and Insurance, AMC, Depreciation and maintenance of them", icon: <FaClipboardList /> },
    { id: 4, title: "Networking", description: "Helps to Keep in touch constantly with Donors through Email, SMS and Letters", icon: <FaNetworkWired /> },
    { id: 5, title: "Monitoring", description: "Helps Monitoring Branches/Communities from Head Office on Accounting and other Aspects", icon: <FaMobileAlt /> },
    { id: 6, title: "Consolidation", description: "Consolidation of Accounts across the Branches under a Head office made easier", icon: <FaGem /> },
    { id: 7, title: "Foreign Contribution", description: "Foreign Contribution management is made simpler and the Reports are generated instantly", icon: <FaGlobe /> },
    { id: 8, title: "Third Party Integration", description: "Integration and Migration of Accounts Data with third party Application is made available for Automating", icon: <FaLink /> },
    { id: 9, title: "Report Generation", description: "Reports needed for Auditing are made available with in few key stroke and User Friendly options are made for", icon: <FaChartLine /> },
    { id: 10, title: "Communication", description: "Helps in Communicating with Sub-Centers easily and pass on the information", icon: <FaComments /> },
    { id: 11, title: "Budgeting", description: "Budgeting and Cost Centers are Made Easier to keep the finance in control and to track in depth", icon: <FaBriefcase /> },
    { id: 12, title: "Alerts", description: "Alerts and reminders are given for any schedules like Data Submission, Correction, Investment Renewal, etc...", icon: <FaExclamationTriangle /> },
    { id: 13, title: "Policy Implementation", description: "Helps Head Offices to Implement Policies easily across the Multiple Branches", icon: <FaRegFileAlt /> },
    { id: 14, title: "Customization", description: "We customize modules based on your specific needs.", icon: <FaCogs /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <>
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          width: 75%;
          height: 180px;
          perspective: 1000px;
          margin-bottom: 30px;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-top-right-radius: 25px;
          border-bottom-left-radius: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .flip-card-front {
          background: linear-gradient(135deg, #004868 0%, #004868 100%);
          color: white;
        }

        .flip-card-back {
          background: linear-gradient(135deg, #EFF6F9 0%, #EFF6F9 100%);
          color: #004868;
          transform: rotateY(180deg);
        }

        .feature-icons {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .feature-description {
          font-size: 0.95rem;
          line-height: 1.4;
          text-align: center;
          opacity: 0.95;
        }

        .flip-card-back .feature-icons {
          margin-bottom: 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .section-subtitle {
          color: #7f8c8d;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .features-container {
          background: linear-gradient(45deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          padding: 80px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
        }

        .col-lg-3 {
          flex: 0 0 25%;
          max-width: 25%;
          padding: 15px;
        }

        @media (max-width: 992px) {
          .col-lg-3 {
            flex: 0 0 33.333%;
            max-width: 33.333%;
          }
        }

        @media (max-width: 768px) {
          .col-lg-3 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        @media (max-width: 576px) {
          .col-lg-3 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }

        .enhanced-shadow {
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .enhanced-shadow:hover {
          transform: translateY(-6px) scale(1.01);
        }
      `}</style>

      <div className="features-container">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.p className="section-subtitle">Functional Suite</motion.p>
            <motion.h1 className="section-title">Acme.erp Features</motion.h1>
          </motion.div>

          <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
            {features.map((feature, index) => {
              if (index < 12) {
                return (
                  <motion.div key={feature.id} className="col-lg-3" variants={cardVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <motion.div className="flip-card enhanced-shadow" whileHover="hover">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <motion.div className="feature-icons" variants={iconVariants} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}>
                            {feature.icon}
                          </motion.div>
                          <motion.h3 className="feature-title">{feature.title}</motion.h3>
                        </div>
                        <div className="flip-card-back">
                          <motion.div className="feature-icons" variants={iconVariants} animate={{ y: [0, -10, 0], opacity: [0, 1] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}>
                            {feature.icon}
                          </motion.div>
                          <motion.p className="feature-description">{feature.description}</motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }

              if (index === 12) {
                return (
                  <div className="row justify-content-center w-100" key="last-row">
                    {[12, 13].map((i) => (
                      <motion.div key={features[i].id} className="col-lg-4" variants={cardVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <motion.div className="flip-card enhanced-shadow" whileHover="hover">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <motion.div className="feature-icons" variants={iconVariants} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}>
                                {features[i].icon}
                              </motion.div>
                              <motion.h3 className="feature-title">{features[i].title}</motion.h3>
                            </div>
                            <div className="flip-card-back">
                              <motion.div className="feature-icons" variants={iconVariants} animate={{ y: [0, -10, 0], opacity: [0, 1] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}>
                                {features[i].icon}
                              </motion.div>
                              <motion.p className="feature-description">{features[i].description}</motion.p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Functional;
