import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Premium Cricket Bat",
      category: "CRICKET",
      image: "/images/cricket-bat.jpg",
      price: 8500,
      rating: "4.8",
      sold: "120+ sold",
    },
    {
      name: "Professional Cricket Shoes",
      category: "CRICKET",
      image: "/images/cricket-shoes.jpg",
      price: 5500,
      rating: "4.6",
      sold: "85+ sold",
    },
    {
      name: "Premium Cricket Gloves",
      category: "CRICKET",
      image: "/images/cricket-gloves.jpg",
      price: 3200,
      rating: "4.8",
      sold: "150+ sold",
    },
    {
      name: "Professional Cricket Helmet",
      category: "CRICKET",
      image: "/images/cricket-helmet.jpg",
      price: 6800,
      rating: "4.7",
      sold: "95+ sold",
    },
    {
      name: "Professional Football",
      category: "FOOTBALL",
      image: "/images/football.jpg",
      price: 2500,
      rating: "4.7",
      sold: "200+ sold",
    },
    {
      name: "Basketball Pro",
      category: "BASKETBALL",
      image: "/images/basketball.jpg",
      price: 3500,
      rating: "4.8",
      sold: "110+ sold",
    },
    {
      name: "Professional Boxing Gloves",
      category: "BOXING",
      image: "/images/boxing-gloves.jpg",
      price: 4000,
      rating: "4.6",
      sold: "90+ sold",
    },
    {
      name: "Fitness Dumbbells",
      category: "FITNESS",
      image: "/images/dumbbells.jpg",
      price: 6500,
      rating: "4.9",
      sold: "75+ sold",
    },
  ];

  const placeOrder = (product) => {
    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(product)
    );

    navigate("/check");
  };

  return (
    <div className="categories-page">

      {/* HERO */}
      <section className="category-hero">

        <div className="category-hero-content">

          <p className="explore-text">
            WELCOME TO CATEGORIES
          </p>

          <h1>
            <span>SPORT</span>IVO
          </h1>

          <h2>SPORTS CATEGORIES</h2>

          <div className="orange-line"></div>

          <p className="hero-description">
            IF YOU FINDING Premium Quality CHOOSE SPORTIVO
          </p>

        </div>

        <div className="sports-icons">
          ⚽ 🏏 🏀 🥊 🏋️
        </div>

      </section>

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">

        <button>🏏 Cricket</button>
        <button>⚽ Football</button>
        <button>🏀 Basketball</button>
        <button>🥊 Boxing</button>
        <button>🏋️ Fitness</button>
        <button>🎒 Accessories</button>

      </div>

      {/* PRODUCTS */}
      <section className="products-section">

        <h2>All Products</h2>

        <p className="products-subtitle">
          Choose your favorite sports product
        </p>

        <div className="products-grid">

          {products.map((product, index) => (

            <div
              className="product-card"
              key={index}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-info">

                <small>
                  {product.category}
                </small>

                <h3>
                  {product.name}
                </h3>

                <div className="price">
                  Rs. {product.price.toLocaleString()}
                </div>

                <p className="rating">
                  ⭐ {product.rating}
                  {" | "}
                  {product.sold}
                </p>

                <button
                  className="place-order"
                  onClick={() => placeOrder(product)}
                >
                  PLACE ORDER
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Categories;