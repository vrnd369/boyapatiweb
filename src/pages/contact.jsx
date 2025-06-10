import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>CONTACT US</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-grid">
            <div className="content-block">
              <h2>Get in Touch</h2>
              <div className="info-list">
                <div className="info-item">
                  <h3>Visit Us</h3>
                  <p>
                    Shop-4, Deepthi Towers, Jammi Chettu Center,
                    <br />
                    Mogalrajapuram, Vijayawada,
                    <br />
                    Andhra Pradesh, India 520010
                  </p>
                </div>

                <div className="info-item">
                  <h3>Contact Details</h3>
                  <p>Email: Boyapatifoodsanddairy@gmail.com</p>
                  <p>US: +1-225-532-9732</p>
                  <p>India: +91-765-991-0302</p>
                </div>

                <div className="info-item">
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  <p>Sunday: 10:00 AM - 8:00 PM</p>
                </div>

                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-block">
              <img src="/images/contact-store.jpg" alt="Boyapati Foods Store" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-grid reverse">
            <div className="content-block">
              <h2>Send us a Message</h2>
              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="image-block">
              <img src="/images/contact-team.jpg" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1234567890123!2d80.6489!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0f0f0f0f0f0%3A0xf0f0f0f0f0f0f0f0!2sBoyapati%20Foods!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Boyapati Foods Google Map Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .contact-page {
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .contact-hero {
          background: #fff5f5;
          padding: 4rem 0;
          text-align: center;
        }

        .contact-hero h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
          text-align: center;
          width: 100%;
        }

        /* Common Section Styles */
        .contact-info-section,
        .contact-form-section {
          padding: 6rem 0;
        }

        .contact-info-section {
          background: #f8f8f8;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-grid.reverse {
          direction: rtl;
        }

        .section-grid.reverse .content-block {
          direction: ltr;
        }

        .content-block {
          max-width: 600px;
        }

        .content-block h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1.5rem;
          font-family: "Playfair Display", serif;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item h3 {
          color: #333;
          margin-bottom: 0.5rem;
          font-family: "Playfair Display", serif;
        }

        .info-item p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 0.5rem;
        }

        .social-links h3 {
          color: #333;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icons a {
          color: #e19898;
          font-size: 1.5rem;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #d88a8a;
        }

        .image-block {
          width: 100%;
        }

        .image-block img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: #333;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .form-group textarea {
          resize: vertical;
        }

        .btn-primary {
          background: #e19898;
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }

        .btn-primary:hover {
          background: #d88a8a;
        }

        .success-message {
          background: #e8f5e9;
          color: #2e7d32;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        /* Map Section */
        .map-section {
          padding: 4rem 0;
          background: #f8f8f8;
        }

        .map-section h2 {
          text-align: center;
          font-size: 2rem;
          color: #333;
          margin-bottom: 2rem;
          font-family: "Playfair Display", serif;
        }

        .map-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .section-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-grid.reverse {
            direction: ltr;
          }

          .image-block {
            order: -1;
          }

          .contact-hero h1 {
            font-size: 2rem;
          }

          .content-block h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
