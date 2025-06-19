import React, { useState, useEffect } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';
import Acme_logo from '../assets/acme_logo.svg';
import { Link,useNavigate, useLocation } from 'react-router-dom';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false); 
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for DOM to update after navigation
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 100;
      setScrolled(window.scrollY > heroHeight - 80);
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
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('hero')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('about')}>About Us</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('cards')}>Modules</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('review')}>Customer</button>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link btn btn-link">Contact</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('blogpost')}>Blog</button>
            </li>
          </ul>
          <div className="navbar-nav">
          <button
              onClick={() => window.location.href = 'https://acmeerp.org/login.html'}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: isHovered ? '#141D38' : '#1e5e7e',
                color: 'white',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '25px',
                fontWeight: 500,
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxShadow: isHovered
                  ? '0 4px 8px rgba(30, 94, 126, 0.3)'
                  : '0 2px 4px rgba(30, 94, 126, 0.2)',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <FaUser style={{ marginRight: '0.5rem' }} size={14} />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
