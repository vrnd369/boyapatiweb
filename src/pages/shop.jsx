import React, { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Our Shop</h1>
        <p style={styles.subtitle}>
          Discover our delicious collection of sweets
        </p>
      </div>

      <div style={styles.productCategories}>
        <h2 style={styles.categoriesTitle}>Our Product Categories</h2>
        <div style={styles.categoryGrid}>
          {[
            {
              to: "/shop/milk-mithai",
              img: "/images/milk mithai.png",
              alt: "Milk Mithai",
              name: "Milk Mithai",
            },
            {
              to: "/shop/traditional-sweets",
              img: "/images/TraditionalSweets.avif",
              alt: "Traditional Sweets",
              name: "Traditional Sweets",
            },
            {
              to: "/shop/fusion",
              img: "/images/delicioiusfusion.avif",
              alt: "Delicious Fusion",
              name: "Delicious Fusion",
            },
            {
              to: "/shop/dry-fruit",
              img: "/images/dry.avif",
              alt: "Dry Fruit",
              name: "Dry Fruit",
            },
            {
              to: "/shop/hot-snacks",
              img: "/images/hot snacks.avif",
              alt: "Hot Snacks",
              name: "Hot Snacks",
            },
          ].map((cat, idx) => (
            <Link
              to={cat.to}
              style={{
                ...styles.categoryCard,
                ...(hovered === idx ? styles.categoryCardHover : {}),
              }}
              key={cat.name}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={cat.img}
                alt={cat.alt}
                style={{
                  ...styles.categoryImage,
                  ...(hovered === idx ? { filter: "brightness(0.85)" } : {}),
                }}
              />
              <h3
                style={{
                  ...styles.categoryName,
                  ...(hovered === idx ? styles.categoryNameHover : {}),
                }}
              >
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
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
  productCategories: {
    marginBottom: "3rem",
  },
  categoriesTitle: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "2.5rem",
    fontFamily: '"Playfair Display", serif',
    textAlign: "center",
  },
  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2.5rem",
    justifyItems: "center",
    alignItems: "center",
  },
  categoryCard: {
    background: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    textDecoration: "none",
    transition:
      "transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s, filter 0.25s",
    width: "320px",
    height: "340px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    cursor: "pointer",
  },
  categoryCardHover: {
    transform: "translateY(-8px) scale(1.04)",
    boxShadow: "0 12px 36px rgba(225,152,152,0.18)",
    filter: "brightness(0.92)",
  },
  categoryImage: {
    width: "100%",
    height: "258px",
    objectFit: "cover",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    transition: "filter 0.25s",
  },
  categoryName: {
    padding: "1.5rem 0 1.2rem 0",
    margin: 0,
    color: "#333",
    fontSize: "1.45rem",
    textAlign: "center",
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    letterSpacing: "0.01em",
    transition: "color 0.2s",
  },
  categoryNameHover: {
    color: "#e19898",
  },
};

export default Shop;
