import React from "react";
import { FaLeaf, FaGem, FaRocket, FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import bg from "../assets/img/bg/price_bg_1.jpg";
import { RiCloseCircleFill } from "react-icons/ri";
import "../css/Plan.css";
const Plan = () => {
  return (
    <>
      {/* Bootstrap CSS */}

      
      <div style={{ backgroundImage: `url(${bg})` }} className="pricing-container">
        <div className="container">
          <button className="yearly-toggle">
            Yearly
          </button>

          <div className="text-center mb-5">
            <div className="section-title">PRICING PLAN</div>
            <h1 className="main-title">Choose Our Plan</h1>
          </div>

          <div className="row justify-content-center">
            {/* Basic Plan */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card text-center">
                <div className="popular-badge">FREE</div>
                <div className="plan-head">
                  {/* <FaLeaf className="card-icon" /> */}

                  <h3 className="plan-title mt-3">Basic Plan</h3>
                  <p className="plan-subtitle">Perfect plan to get started</p>

                </div>

                <div className="price">₹0</div>
                <p className="price-description">
                  A free plan grants you access to some cool features of Spend.In.
                </p>

                <ul className="feature-list">
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Demo
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Only Finance Module
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    30 Days Trial
                  </li>
                  <li className="feature-item">
                    <RiCloseCircleFill className="feature-icon" />
                    With Head Office Features (Data Export)
                  </li>
                  <li className="feature-item">
                    <RiCloseCircleFill className="feature-icon" />
                    Free Online Support*
                  </li>
                </ul>

                <button className="btn btn-primary btn-get-plan">
                  Get Your Free Plan
                </button>
              </div>
            </div>

            {/* Acmeplus Customer */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card text-center">
                <div className="popular-badge">ULTIMATE</div>
                <div className="offer">
                  <span className="popular-span" >
                    Popular
                  </span>
                </div>
                {/* <FaGem className="card-icon" /> */}
                <div className="plan-head">

                  <h3 className="plan-title mt-3">Acmeplus Customer</h3>
                  <p className="plan-subtitle">Best suits for great company!</p>
                </div>

                <div className="price">₹15,000</div>
                <p className="price-description">
                  If you a finance manager at big company, this plan is a perfect match.
                </p>

                <ul className="feature-list">
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    20% AMC Per Year
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Demo
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Finance And Reports
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    With Head Office Features (Data Export)
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Support*
                  </li>
                </ul>

                <button className="btn btn-primary btn-get-plan">
                  Get Your Free Plan
                </button>
              </div>
            </div>

            {/* New Customer */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card text-center">
                <div className="popular-badge">PRO</div>
                {/* <FaRocket className="card-icon" /> */}
                <div className="plan-head">

                  <h3 className="plan-title mt-3">New Customer</h3>
                  <p className="plan-subtitle">Perfect plan for professionals*</p>
                </div>

                <div className="price">₹18,000</div>
                <p className="price-description">
                  For professional only! Start arranging your expenses with our ERP Solutions
                </p>

                <ul className="feature-list">
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    20% AMC Per Year
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Demo
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Finance And Reports
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    With Head Office Features (Data Export)
                  </li>
                  <li className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    Free Online Support*
                  </li>
                </ul>

                <button className="btn btn-primary btn-get-plan">
                  Get Your Free Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;