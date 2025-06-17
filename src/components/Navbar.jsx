import React, { useState, useEffect } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';
import Acme_logo from '../assets/acme_logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 100;
      setScrolled(window.scrollY > heroHeight - 80); // Adjust offset
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light shadow-sm ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid px-3 px-md-4">
        <div className="navbar-brand d-flex align-items-center">
          <div className="logo-container">
            <img src={Acme_logo} alt="ACME Logo" className="logo-svg" />
          </div>
        </div>

        <button className="navbar-toggler border-0 p-0" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#modules">Modules</a></li>
            <li className="nav-item"><a className="nav-link" href="#customer">Customer</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
          </ul>

          <div className="navbar-nav">
            <button className="btn login-btn d-flex align-items-center">
              <FaUser className="me-2" size={14} />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
