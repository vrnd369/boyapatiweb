import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

// Temporary mock data until we implement the API
const mockProducts = [
  {
    id: 1,
    name: "Kaju Nest",
    description: "Premium cashew-based sweet with a unique nest design",
    price: 24.99,
    image: "/images/kajunest.png",
  },
  {
    id: 2,
    name: "Milk Mithai",
    description: "Traditional milk-based sweets made with pure ingredients",
    price: 19.99,
    image: "/images/milk mithai.png",
  },
  {
    id: 3,
    name: "Dry Fruit Sweets",
    description: "Luxurious sweets made with premium dry fruits",
    price: 29.99,
    image: "/images/dry fruit.png",
  },
];

const heroImages = [
  "/images/hero slide-1.avif",
  "/images/hero slide-2.avif",
  "/images/hero slide-3.avif",
];

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFeaturedProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (idx) => setCurrentSlide(idx);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  return (
    <div className="home-page">
      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <div className="hero-carousel-wrapper">
          <div className="hero-carousel">
            {heroImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Hero Slide ${idx + 1}`}
                className={`hero-slide${idx === currentSlide ? " active" : ""}`}
                style={{ display: idx === currentSlide ? "block" : "none" }}
              />
            ))}
            <button className="carousel-arrow left" onClick={prevSlide}>
              &#8592;
            </button>
            <button className="carousel-arrow right" onClick={nextSlide}>
              &#8594;
            </button>
            <div className="carousel-dots">
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot${idx === currentSlide ? " active" : ""}`}
                  onClick={() => goToSlide(idx)}
                ></span>
              ))}
            </div>
          </div>
          <div className="hero-content-overlay">
            <div className="hero-content-overlay-inner">
              <h1>Welcome to Boyapati Foods</h1>
              <p>
                Premium Indian sweets and snacks crafted with traditional
                recipes and the finest ingredients
              </p>
              <div className="cta-buttons">
                <Link to="/shop" className="btn-primary">
                  Shop Now
                </Link>
                <Link to="/about" className="btn-secondary">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Our Premium Collection</h2>
        <div className="products-grid">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                hideAddToCart={true}
              />
            ))
          )}
        </div>
        {/* <Link to="/shop" className="btn-primary view-all">
          View All Products
        </Link> */}
      </section>

      {/* USP Section */}
      <section className="usp-section">
        <div className="usp-item">
          <img src="/images/traditional recepie.avif" alt="Handcrafted" />
          <div className="usp-content">
            <h3>Traditional Recipes</h3>
            <p>Authentic taste passed down through generations</p>
          </div>
        </div>
        <div className="usp-item">
          <img src="/images/premium quality.avif" alt="Pure Ingredients" />
          <div className="usp-content">
            <h3>Premium Quality</h3>
            <p>Only the finest ingredients used in our products</p>
          </div>
        </div>
        <div className="usp-item">
          <img src="/images/world wide.avif" alt="Fast Delivery" />
          <div className="usp-content">
            <h3>Worldwide Shipping</h3>
            <p>Available for both US and India customers</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="address">
              <h3>Visit Us</h3>
              <p>Shop-4, Deepthi Towers, Jammi Chettu Center,</p>
              <p>Mogalrajapuram, Vijayawada, Andhra Pradesh, India 520010</p>
            </div>
            <div className="contact-details">
              <h3>Get in Touch</h3>
              <p>Email: Boyapatifoodsanddairy@gmail.com</p>
              <p>US: +1-225-532-9732</p>
              <p>India: +91-765-991-0302</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .home-page {
          padding-top: 0;
        }

        .hero-section {
          position: relative;
          top: 0;
          padding: 0;
          background: #fff5f5;
          min-height: 100vh;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .hero-carousel-wrapper {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }

        .hero-carousel {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        }

        .hero-slide {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          transition: opacity 0.6s;
          z-index: 1;
        }

        .hero-slide.active {
          opacity: 1;
          z-index: 2;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.7);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 3;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .carousel-arrow.left {
          left: 16px;
        }

        .carousel-arrow.right {
          right: 16px;
        }

        .carousel-dots {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 4;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #e19898;
          cursor: pointer;
          opacity: 0.7;
          transition: background 0.2s, opacity 0.2s;
        }

        .dot.active {
          background: #e19898;
          opacity: 1;
        }

        .hero-content-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          pointer-events: none;
        }

        .hero-content-overlay-inner {
          background: rgba(255, 255, 255, 0.75);
          border-radius: 18px;
          padding: 2.5rem 2rem 2rem 2rem;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: auto;
          max-width: 90vw;
        }

        .hero-content-overlay h1,
        .hero-content-overlay p,
        .hero-content-overlay .cta-buttons {
          pointer-events: auto;
        }

        .hero-content-overlay h1 {
          font-size: 3rem;
          color: #333;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .hero-content-overlay p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
          text-align: center;
        }

        .cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .btn-primary,
        .btn-secondary {
          min-width: 200px;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          font-size: 1.5rem;
          font-family: "Playfair Display", serif;
          font-weight: 600;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          text-align: center;
          outline: none;
          border: none;
        }

        .btn-primary {
          background: #e19898;
          color: #fff;
          border: none;
        }

        .btn-primary:hover {
          background: #d18787;
          box-shadow: 0 6px 24px rgba(225, 152, 152, 0.18);
          transform: translateY(-2px) scale(1.03);
        }

        .btn-secondary {
          background: transparent;
          color: #e19898;
          border: 2px solid #e19898;
        }

        .btn-secondary:hover {
          background: #fff0f0;
          color: #d18787;
          border-color: #d18787;
          box-shadow: 0 6px 24px rgba(225, 152, 152, 0.1);
          transform: translateY(-2px) scale(1.03);
        }

        .btn-secondary br {
          margin-bottom: 0.3em;
          content: "";
          display: block;
        }

        .featured-products {
          padding: 4rem 2rem;
          text-align: center;
        }

        .featured-products h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 2rem;
          font-family: "Playfair Display", serif;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .view-all {
          display: inline-block;
          margin-top: 2rem;
        }

        .usp-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 4rem 2rem;
          background: #f8f8f8;
        }

        .usp-item {
          position: relative;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .usp-item:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
          transform: translateY(-6px) scale(1.03);
        }
        .usp-item img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          transition: filter 0.3s, transform 0.3s;
        }
        .usp-item::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 60%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.45) 70%,
            rgba(0, 0, 0, 0.05) 100%
          );
          z-index: 2;
        }
        .usp-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.85);
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .usp-content h3 {
          color: #222;
          margin-bottom: 0.5rem;
          font-family: "Playfair Display", serif;
          font-size: 1.3rem;
          font-weight: 700;
        }
        .usp-content p {
          color: #444;
          font-size: 1.05rem;
          margin: 0;
        }
        @media (max-width: 768px) {
          .hero-section,
          .hero-carousel-wrapper,
          .hero-carousel {
            min-height: 320px;
            height: 320px;
            width: 100vw;
          }
          .hero-slide {
            height: 320px;
            width: 100vw;
            object-fit: cover;
          }
          .hero-content-overlay {
            height: 320px;
            min-height: 320px;
            width: 100vw;
            padding: 0;
            justify-content: flex-end;
            align-items: center;
            display: flex;
          }
          .hero-content-overlay-inner {
            padding: 0.8rem 0.7rem 1rem 0.7rem;
            max-width: 90vw;
            width: 95vw;
            border-radius: 10px;
            box-sizing: border-box;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content-overlay h1 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            word-break: break-word;
          }
          .hero-content-overlay p {
            font-size: 0.95rem;
            margin-bottom: 1rem;
            word-break: break-word;
          }
          .cta-buttons {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            align-items: center;
          }
          .btn-primary,
          .btn-secondary {
            min-width: 120px;
            min-height: 40px;
            font-size: 0.95rem;
            border-radius: 7px;
            width: 100%;
            max-width: 220px;
          }
        }
      `}</style>
    </div>
  );
}
