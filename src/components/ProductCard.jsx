import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, hideAddToCart }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        {!hideAddToCart && (
          <button className="btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>

      <style jsx>{`
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .product-card:hover {
          transform: translateY(-4px);
        }

        .product-image {
          display: block;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-info {
          padding: 1rem;
        }

        .product-info h3 {
          margin: 0 0 0.5rem;
          font-size: 1.2rem;
          color: #333;
        }

        .price {
          font-size: 1.25rem;
          color: #e19898;
          font-weight: bold;
          margin: 0.5rem 0;
        }

        .description {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .btn-primary {
          width: 100%;
          padding: 0.75rem;
          background: #e19898;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s;
        }

        .btn-primary:hover {
          background: #d88a8a;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
