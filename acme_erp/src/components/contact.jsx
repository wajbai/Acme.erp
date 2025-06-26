import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactBg from '../assets/img/bg/contact_bg_1.png';
import '../css/Contact.css';

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
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_aesl0pb',
      'template_480i33k',
      formData,
      'HAt7sYcyqeRxEYEN-'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you! Your message has been sent.');
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Oops! Something went wrong. Please try again.');
    });
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />

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

          {/* Contact Form */}
          <div className="row contact-bg">
            <div className="col-lg-8">
              <div className="trial-section position-relative">
                <div className="floating-elements">
                  <div className="floating-shape shape-1"></div>
                  <div className="floating-shape shape-2"></div>
                  <div className="floating-shape shape-3"></div>
                </div>

                <h2 className="trial-title">Join now for a free trial</h2>

                <form onSubmit={handleSubmit}>
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
                          required
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
                          required
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
                          required
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
                          required
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
                        required
                        style={{ borderRadius: '0 10px 10px 0' }}
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-send">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-container mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.4190281391565!2d78.631636!3d12.5866634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaea950786f3%3A0x5f3b489cca9a30a2!2sBosco%20Soft%20Technologies%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1718738464156!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosco Soft Technologies Location"
              style={{ width: '100%', height: '400px', border: '0' }}
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
