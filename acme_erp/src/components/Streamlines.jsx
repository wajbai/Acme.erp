import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../css/Streamlines.css';

const featuresLeft = [
  "Comprehensive Financial Management System",
  "Payroll Administration",
  "Inventory Control and Management",
  "Banking Operations Integration",
  "Financial Planning and Budget Management"
];

const featuresRight = [
  "Statutory Compliance and TDS Management",
  "Asset Management and Tracking",
  "Remote Access Capabilities with Multiple User Logins",
  "Data Consolidation and Report Generation",
  "Integrated Web Portal for Enhanced Accessibility"
];

const Streamlines = () => {
  const ref = useRef(null);

  // Remove once:true to trigger every time element is in view
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="streamline-section text-white text-center py-5"
    >
      <p className="top-tagline">Everything You Need, All in One System</p>
      <h2 className="fw-bold mb-5">
        Acme.erp streamlines your daily operations<br />with essential tools
      </h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {featuresLeft.map((item, index) => (
              <motion.div
                key={index}
                className="feature-box"
                initial={{ opacity: 0, x: -90 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <span className="check-icon">&#x2713;</span> {item}
              </motion.div>
            ))}
          </div>
          <div className="col-md-6">
            {featuresRight.map((item, index) => (
              <motion.div
                key={index}
                className="feature-box"
                initial={{ opacity: 0, x: 90 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <span className="check-icon">&#x2713;</span> {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Streamlines;
