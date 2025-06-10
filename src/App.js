import { CartProvider } from "./context/CartContext";
import "./styles/globals.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/index";
import About from "./pages/about";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#E19898" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />

          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<CategoryProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
