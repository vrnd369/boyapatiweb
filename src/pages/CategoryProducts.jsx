import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategoryProducts = useCallback(async () => {
    try {
      // TODO: Replace with actual API call
      const mockProducts = {
        "milk-mithai": [
          {
            id: 1,
            name: "Gulab Jamun",
            description:
              "Traditional Indian sweet made from milk solids, deep-fried and soaked in sugar syrup.",
            price: 299,
            image: "/images/gulab jamun.png",
            rating: 4.8,
            reviews: 128,
            inStock: true,
          },
          {
            id: 2,
            name: "Rasgulla",
            description:
              "Soft and spongy cottage cheese balls soaked in light sugar syrup.",
            price: 249,
            image: "/images/rasgulla.avif",
            rating: 4.7,
            reviews: 95,
            inStock: true,
          },
        ],
        "traditional-sweets": [
          {
            id: 3,
            name: "Kaju Katli",
            description:
              "Diamond-shaped cashew fudge, a rich and luxurious sweet.",
            price: 399,
            image: "/images/kaju katli.png",
            rating: 4.9,
            reviews: 156,
            inStock: true,
          },
          {
            id: 4,
            name: "Laddu",
            description: "Round sweet balls made from flour, sugar, and ghee.",
            price: 199,
            image: "/images/laddu.png",
            rating: 4.6,
            reviews: 89,
            inStock: true,
          },
        ],
        fusion: [
          {
            id: 5,
            name: "Chocolate Barfi",
            description: "Traditional barfi with a modern chocolate twist.",
            price: 349,
            image: "/images/chocolate burfi.png",
            rating: 4.7,
            reviews: 112,
            inStock: true,
          },
          {
            id: 6,
            name: "Pista Roll",
            description: "Creamy pistachio-flavored sweet roll.",
            price: 299,
            image: "/images/pista.png",
            rating: 4.8,
            reviews: 78,
            inStock: true,
          },
        ],
        "dry-fruit": [
          {
            id: 7,
            name: "Dry Fruit Mix",
            description: "Premium assortment of dry fruits and nuts.",
            price: 599,
            image: "/images/dry fruit.png",
            rating: 4.9,
            reviews: 145,
            inStock: true,
          },
          {
            id: 8,
            name: "Almond Burfi",
            description: "Rich almond-based sweet with a delicate texture.",
            price: 449,
            image: "/images/almond burfi.png",
            rating: 4.7,
            reviews: 92,
            inStock: true,
          },
        ],
        "hot-snacks": [
          {
            id: 9,
            name: "Samosa",
            description: "Crispy pastry filled with spiced potatoes and peas.",
            price: 149,
            image: "/images/samosa.png",
            rating: 4.8,
            reviews: 167,
            inStock: true,
          },
          {
            id: 10,
            name: "Kachori",
            description: "Flaky pastry filled with spiced lentils.",
            price: 129,
            image: "/images/kachori.png",
            rating: 4.6,
            reviews: 98,
            inStock: true,
          },
        ],
      };

      setProducts(mockProducts[category] || []);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchCategoryProducts();
  }, [category, fetchCategoryProducts]);

  const getCategoryTitle = (category) => {
    const titles = {
      "milk-mithai": "Milk Mithai",
      "traditional-sweets": "Traditional Sweets",
      fusion: "Delicious Fusion",
      "dry-fruit": "Dry Fruit",
      "hot-snacks": "Hot Snacks",
    };
    return titles[category] || "Products";
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        ← Back
      </button>
      <div style={styles.header}>
        <h1 style={styles.title}>{getCategoryTitle(category)}</h1>
        <p style={styles.subtitle}>
          Discover our delicious {getCategoryTitle(category).toLowerCase()}
        </p>
      </div>

      <div style={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    position: "relative",
  },
  backButton: {
    background: "#e19898",
    border: "none",
    color: "#fff",
    fontSize: "1.2rem",
    cursor: "pointer",
    padding: "0.75rem 2rem",
    marginBottom: "2rem",
    marginTop: "1rem",
    marginLeft: "-1rem",
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "inherit",
    borderRadius: "6px",
    fontWeight: "600",
    boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
    zIndex: 10,
    transition: "background 0.3s, color 0.3s",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "1rem",
    fontFamily: '"Playfair Display", serif',
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
  },
  loading: {
    textAlign: "center",
    padding: "4rem 0",
    color: "#666",
    fontSize: "1.1rem",
  },
  error: {
    textAlign: "center",
    padding: "4rem 0",
    color: "#e74c3c",
    fontSize: "1.1rem",
  },
};

export default CategoryProducts;
