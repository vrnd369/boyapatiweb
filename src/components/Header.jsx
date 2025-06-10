import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AuthModal from "./AuthModal";

export default function Header() {
  const location = useLocation();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Toggle body scroll lock when menu is open
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAuthClick = (type) => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link to="/" className="logo">
            <img src="/logo.svg" alt="Boyapati Foods" />
          </Link>

          <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={location.pathname === "/shop" ? "active" : ""}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="mobile-auth">
                <button
                  onClick={() => {
                    handleAuthClick("login");
                    setIsMenuOpen(false);
                  }}
                  className="btn-text"
                >
                  Login
                </button>
                <span>/</span>
                <button
                  onClick={() => {
                    handleAuthClick("register");
                    setIsMenuOpen(false);
                  }}
                  className="btn-text"
                >
                  Register
                </button>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <div className="auth-buttons">
              <button
                onClick={() => handleAuthClick("login")}
                className="btn-text"
              >
                Login
              </button>
              <span>/</span>
              <button
                onClick={() => handleAuthClick("register")}
                className="btn-text"
              >
                Register
              </button>
            </div>

            <Link to="/cart" className="cart-btn">
              <img src="/icons/cart.svg" alt="Cart" />
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>

            <button
              className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        type={authType}
        onSwitchType={() =>
          setAuthType((prev) => (prev === "login" ? "register" : "login"))
        }
      />

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 90px;
        }

        .site-header.scrolled {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "Playfair Display", serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #e19898;
          text-decoration: none;
        }

        .logo img {
          height: 3rem;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .menu-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: #333;
          margin: 5px 0;
          transition: all 0.3s ease;
        }

        .main-nav ul {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .main-nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.2s;
        }

        .main-nav a:hover,
        .main-nav a.active {
          color: #e19898;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .cart-btn {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #e19898;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
        }

        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-text {
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
          padding: 0;
          font-size: 0.9rem;
        }

        .btn-text:hover {
          color: #e19898;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
            margin-left: 1rem;
            padding: 0.5rem;
            z-index: 1001;
          }

          .menu-toggle span {
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          .menu-toggle.active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .menu-toggle.active span:nth-child(2) {
            opacity: 0;
          }

          .menu-toggle.active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }

          .auth-buttons {
            display: none;
          }

          .main-nav {
            position: fixed;
            top: var(--header-height);
            right: 0;
            left: auto;
            bottom: 0;
            width: 100vw;
            max-width: 350px;
            height: calc(50vh - var(--header-height));
            background: #fff;
            padding: 0;
            box-shadow: -4px 0 16px rgba(0, 0, 0, 0.08);
            transform: translateX(100%);
            opacity: 0;
            transition: transform 0.3s cubic-bezier(0.77, 0, 0.18, 1),
              opacity 0.3s;
            pointer-events: none;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .main-nav.open {
            transform: translateX(0);
            opacity: 1;
            pointer-events: auto;
          }

          .main-nav ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 2.5rem;
            padding: 0;
            margin: 0;
            flex: 1;
          }

          .main-nav li {
            width: 100%;
            border: none;
            display: flex;
            justify-content: center;
          }

          .main-nav a {
            display: block;
            padding: 0;
            font-size: 1.2rem;
            color: var(--text-color);
            font-weight: 500;
            text-align: center;
            transition: color 0.2s;
          }

          .main-nav a.active {
            color: var(--primary-color);
            font-weight: 700;
          }

          .main-nav a:hover {
            color: var(--primary-color);
          }

          .mobile-auth {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            margin-top: 2.5rem;
          }

          .mobile-auth .btn-text {
            font-size: 1.1rem;
            padding: 0;
          }

          .mobile-auth span {
            color: var(--text-light);
          }

          /* Prevent body scroll when menu is open */
          body.menu-open {
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
