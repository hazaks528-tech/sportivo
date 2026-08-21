import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <span>SPORT</span>
          <b>IVO</b>
        </Link>

        {/* Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/offers">Offers</Link>
        </div>

        {/* Cart */}
        <Link to="/cart" className="cart-btn">
          🛒 Cart
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;