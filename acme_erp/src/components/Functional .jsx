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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: [0, 10, -10, 10, -10, 0],
      scale: 1.3,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <>
      <style jsx>{`
        .features-container {
          background: linear-gradient(45deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .features-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 150%;
          height: 150%;
          background: radial-gradient(circle at 20% 20%, rgba(0, 172, 210, 0.1), transparent 50%),
                      radial-gradient(circle at 80% 30%, rgba(30, 94, 126, 0.1), transparent 50%),
                      radial-gradient(circle at 50% 80%, rgba(0, 172, 210, 0.15), transparent 50%);
          transform: translateX(-50%);
          z-index: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 5px;
        }

        .section-subtitle {
          color: #1E5E7E;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cards {
          background: #ffffff;
          border-radius: 16px;
          padding: 20px 15px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #e0e0e0;
          position: relative;
        }

        .cards:hover {
          background: linear-gradient(135deg, #1E5E7E, #00ACD2);
          color: white;
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .cards:hover .feature-title,
        .cards:hover .feature-description,
        .cards:hover .feature-icons {
          color: white;
          
        }

        .feature-icons {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #1E5E7E;
        }

        .feature-title {
          font-size: 1.05rem;
          font-weight: bold;
          margin-bottom: 6px;
          color: #004867;
        }

        .feature-description {
          font-size: 0.8rem;
          color: #444;
        }

        .col-lg-3 {
          flex: 0 0 20%;
          max-width: 20%;
          padding: 10px;
        }

        @media (max-width: 1200px) {
          .col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
          }
        }

        @media (max-width: 992px) {
          .col-lg-3 {
            flex: 0 0 33.33%;
            max-width: 33.33%;
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
      `}</style>

      <div className="features-container">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.p className="section-subtitle">Functional Suite</motion.p>
            <motion.h1 className="section-title">Acme.erp Features</motion.h1>
          </motion.div>

          <motion.div className="row" variants={containerVariants} initial="hidden" animate="visible">
            {features.map((feature, index) => (
              <motion.div key={feature.id} className="col-lg-3" variants={cardVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <motion.div className="cards" whileHover="hover">
                  <motion.div
                    className="feature-icons"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 className="feature-title">{feature.title}</motion.h3>
                  <motion.p className="feature-description">{feature.description}</motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Functional;
