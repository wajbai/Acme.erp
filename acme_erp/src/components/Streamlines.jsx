import React from 'react';
import '../css/Streamlines.css'; // make sure this CSS file exists

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
  return (
    <div className="streamline-section text-white text-center py-5">
      <p className="top-tagline">Everything You Need, All in One System</p>
      <h2 className="fw-bold mb-5">Acme.erp streamlines your daily operations<br />with essential tools</h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {featuresLeft.map((item, index) => (
              <div className="feature-box" key={index}>
                <span className="check-icon">&#x2713;</span> {item}
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {featuresRight.map((item, index) => (
              <div className="feature-box" key={index}>
                <span className="check-icon">&#x2713;</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streamlines;
