import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any sweets to your cart yet.</p>
            <Link to="/shop" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .cart-page {
          padding-top: 80px;
          min-height: calc(100vh - 80px);
          background: #f8f8f8;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        h1 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 2rem;
          font-family: "Playfair Display", serif;
        }

        .empty-cart {
          text-align: center;
          padding: 4rem 0;
        }

        .empty-cart h1 {
          margin-bottom: 1rem;
        }

        .empty-cart p {
          color: #666;
          margin-bottom: 2rem;
        }

        .cart-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .cart-items {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto auto auto;
          gap: 1rem;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #eee;
        }

        .cart-item:last-child {
          border-bottom: none;
        }

        .item-image img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          border-radius: 4px;
        }

        .item-details h3 {
          margin: 0 0 0.5rem;
          color: #333;
        }

        .item-price {
          color: #666;
        }

        .item-quantity {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .item-quantity button {
          width: 30px;
          height: 30px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item-quantity button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .item-quantity span {
          min-width: 30px;
          text-align: center;
        }

        .item-total {
          font-weight: bold;
          color: #333;
        }

        .remove-item {
          background: none;
          border: none;
          color: #999;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .remove-item:hover {
          color: #e19898;
        }

        .cart-summary {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          height: fit-content;
        }

        .cart-summary h2 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1.5rem;
          font-family: "Playfair Display", serif;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          color: #666;
        }

        .summary-row.total {
          font-weight: bold;
          color: #333;
          font-size: 1.2rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }

        .checkout-btn {
          width: 100%;
          margin-top: 1.5rem;
        }

        .continue-shopping {
          display: block;
          text-align: center;
          margin-top: 1rem;
          color: #666;
          text-decoration: none;
        }

        .continue-shopping:hover {
          color: #e19898;
        }

        .btn-primary {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #e19898;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 500;
          transition: background 0.2s;
        }

        .btn-primary:hover {
          background: #d88a8a;
        }

        @media (max-width: 768px) {
          .cart-content {
            grid-template-columns: 1fr;
          }

          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 1rem;
          }

          .item-quantity,
          .item-total,
          .remove-item {
            grid-column: 2;
          }

          .item-quantity {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
