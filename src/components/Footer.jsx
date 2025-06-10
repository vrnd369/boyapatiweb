import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sweet House</h3>
            <p>
              Handcrafted traditional Indian sweets made with pure ingredients
              and generations of expertise.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>123 Sweet Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@sweethouse.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Sweet House. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #f8f8f8;
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: #e19898;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .footer-section h4 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .footer-section p {
          color: #666;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section a {
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #e19898;
        }

        .contact-info li {
          color: #666;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
        }

        .social-links a:hover {
          color: #e19898;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #ddd;
          color: #666;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
