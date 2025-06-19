import React, { useState } from 'react';
import contactBg from '../assets/img/bg/contact_bg_1.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Handle form submission here
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      <style>{`
        body {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }
        
        .contact-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          padding: 30px;
          margin-bottom: 30px;
          transition: transform 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          margin-bottom: 20px;
        }
        
        .contact-title {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 15px;
        }
        
        .contact-info {
          color: #7f8c8d;
          line-height: 1.6;
        }
        
       
        
        .trial-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 5;
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #667eea20, #764ba220);
          border-radius: 50%;
          transform: translate(100px, -100px);
        }
        
        .trial-title {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 30px;
        }
        
        .form-control {
          border: 2px solid #e9ecef;
          border-radius: 10px;
          padding: 15px 20px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }
        
        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
          background: white;
        }
        
        .input-group-text {
          background: #667eea;
          border: 2px solid #667eea;
          color: white;
          border-radius: 10px 0 0 10px;
        }
        
        .input-group .form-control {
          border-left: none;
          border-radius: 0 10px 10px 0;
        }
        
        .btn-send {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 15px 40px;
          border-radius: 10px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }
        
        .btn-send:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          color: white;
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .contact-subtitle {
          color: #667eea;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
        }
        
        .map-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          height: 400px;
          margin-top: 40px;
        }
        
        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .floating-shape {
          position: absolute;
          background: linear-gradient(135deg, #667eea20, #764ba220);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 80px;
          height: 80px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 5%;
          animation-delay: 2s;
        }
        
        .shape-3 {
          width: 40px;
          height: 40px;
          top: 80%;
          right: 15%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          .trial-section {
            padding: 30px 20px;
          }
          
          .trial-title {
            font-size: 28px;
          }
          
          .contact-card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
        <div className="container">
          {/* Header */}
          <div className="contact-header">
            <p className="contact-subtitle">Contact with us!</p>
          </div>

          {/* Contact Cards */}
          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card h-100">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="contact-title">Our Office Address</h3>
                <div className="contact-info">
                  <strong>Bosco Soft Technologies Pvt.Ltd.</strong><br />
                  231/77, SHC Complex,<br />
                  Vaniyambadi Road, Tirupattur<br />
                  Tirupattur Dist - 635 601<br />
                  Tamil Nadu, India.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card h-100">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="contact-title">Call Us Anytime</h3>
                <div className="contact-info">
                  <strong>Ph.: +91 96 26 800 800</strong>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-card h-100">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="contact-title">Send An Email</h3>
                <div className="contact-info">
                  <strong>acmeerp@boscosofttech.com</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Trial Section */}
          <div className="row"  style={{
    backgroundImage: `url(${contactBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginRight: '-150px',
  }}>
            <div className="col-lg-8" >

              <div className="trial-section position-relative">
                <div className="floating-elements">
                  <div className="floating-shape shape-1"></div>
                  <div className="floating-shape shape-2"></div>
                  <div className="floating-shape shape-3"></div>
                </div>
                
                <h2 className="trial-title">Join now for a free trial</h2>
                
                <div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-building"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Organization Name"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-phone"></i>
                        </span>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-comment"></i>
                      </span>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{ borderRadius: '0 10px 10px 0' }}
                      ></textarea>
                    </div>
                  </div>

                  <button onClick={handleSubmit} className="btn btn-send">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            
          </div>

          {/* Map Section */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.4190281391565!2d78.631636!3d12.5866634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1718738464156!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosco Soft Technologies Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Contact;