import React, { useState } from 'react';
import { Mail, Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import '../css/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer-wrapper">
      {/* Newsletter Section */}
      <div className="newsletter-section newsletter-container">
        <h2 className="newsletter-title">Subscribe for daily update</h2>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <div className="newsletter-input-wrapper">
            <Mail className="newsletter-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="newsletter-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: isHovered ? '#0f5a7a' : '#1e5e7e' }}
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <div className="footer-main footer-grid footer-container">
        {/* About Company */}
        <div>
          <h3>About Company</h3>
          <p>
            Our strength lies in our innovative approach, user friendliness and staunch customer support with a focus on mobile access and AI Integration.
          </p>
          <div className="footer-social-icons">
            {[
              { Icon: Facebook, color: '#1877F2' },
              { Icon: Twitter, color: '#1DA1F2' },
              { Icon: Linkedin, color: '#0A66C2' },
              { Icon: Instagram, color: '#E4405F' },
              { Icon: Youtube, color: '#FF0000' },
              { Icon: MessageCircle, color: '#25D366' }
            ].map((social, index) => (
              <a key={index} href="#" className="social-icon">
                <social.Icon size={18} color={social.color} />
              </a>
            ))}
          </div>
          <div className="company-logo">
            <div className="company-name">boscosoft</div>
            <div className="company-sub">Management Pvt. Ltd.</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            {[
              { label: 'About Us', id: 'about' },
              { label: 'Module', id: 'cards' },
              { label: 'Customer', id: 'review' },
              { label: 'Contact', id: 'contact' },
              { label: 'Blog', id: 'blogpost' }
            ].map((item, index) => (
              <li key={index}>
                <button onClick={() => handleNavClick(item.id)}>▷ {item.label}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Products */}
        <div>
          <h3>Other Products & Services</h3>
          <ul>
            {[
              'School Management Software',
              'College Management Software',
              'Church Management Software',
              'Accounting Management Software',
              'Web Design & App Development',
              'Mobile App Development and Modularization'
            ].map((item, index) => (
              <li key={index}><a href="#">▷ {item}</a></li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3>Address</h3>
          <p>Bosco Soft Technologies Pvt Ltd.</p>
          <p>No. 231/77, S.H.C Complex<br />
            Tirupattur, Tirupattur District<br />
            Tamil Nadu, India<br />
            635 601
          </p>
          <p>+91 9626 800 800</p>
          <a href="mailto:binfo@boscosofttech.com">binfo@boscosofttech.com</a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom footer-container">
        <div>Copyright © 2025 <span style={{ color: '#1e5e7e' }}>Boscosoft</span>. All Rights Reserved.</div>
        <div className="footer-links">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
