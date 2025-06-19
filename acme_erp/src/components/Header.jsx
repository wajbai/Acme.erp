import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';
import '../css/Header.css'; 
const Header = () => {
  return (
    <header className="header-top  text-white py-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left side - Contact Information */}
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center contact-info">
              <div className="d-flex align-items-center me-4 mb-1">
                <FaMapMarkerAlt className="me-2" />
                <span className="contact-text">Yelagiri Hills, Tirupattur</span>
              </div>
              <div className="d-flex align-items-center me-4 mb-1">
                <FaPhone className="me-2" />
                <span className="contact-text">+91 96 26 800 800</span>
              </div>
              <div className="d-flex align-items-center mb-1">
                <FaEnvelope className="me-2" />
                <span className="contact-text">info@boscosofttech.com</span>
              </div>
            </div>
          </div>

          {/* Right side - Follow Us and Social Media Icons */}
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-md-end justify-content-start">
              <span className="follow-text me-3">Follow Us On :</span>
              <div className="social-icons d-flex">
                <a href="#" className="social-link me-2">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link me-2">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link me-2">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-link me-2">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link me-2">
                  <FaYoutube />
                </a>
                <a href="#" className="social-link">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;