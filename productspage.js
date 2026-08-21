import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";

function ProductsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const products = [
    {
      name: "Premium Cricket Bat",
      category: "CRICKET",
      image: "/images/cricket-bat.jpg",
      price: "Rs. 8,500",
      rating: "4.8",
      sold: "120+ sold",
    },
    {
      name: "Professional Cricket Shoes",
      category: "CRICKET",
      image: "/images/cricket-shoes.jpg",
      price: "Rs. 5,500",
      rating: "4.6",
      sold: "85+ sold",
    },
    {
      name: "Premium Cricket Gloves",
      category: "CRICKET",
      image: "/images/cricket-gloves.jpg",
      price: "Rs. 3,200",
      rating: "4.8",
      sold: "150+ sold",
    },
    {
      name: "Professional Cricket Helmet",
      category: "CRICKET",
      image: "/images/cricket-helmet.jpg",
      price: "Rs. 6,800",
      rating: "4.7",
      sold: "95+ sold",
    },
    {
      name: "Professional Football",
      category: "FOOTBALL",
      image: "/images/football.jpg",
      price: "Rs. 2,500",
      rating: "4.7",
      sold: "200+ sold",
    },
    {
      name: "Football Sports Shoes",
      category: "FOOTBALL",
      image: "/images/football-shoes.jpg",
      price: "Rs. 6,999",
      rating: "4.7",
      sold: "90+ sold",
    },
    {
      name: "Basketball Pro",
      category: "BASKETBALL",
      image: "/images/basketball.jpg",
      price: "Rs. 3,500",
      rating: "4.8",
      sold: "110+ sold",
    },
    {
      name: "Professional Boxing Gloves",
      category: "BOXING",
      image: "/images/boxing-gloves.jpg",
      price: "Rs. 4,000",
      rating: "4.6",
      sold: "90+ sold",
    },
    {
      name: "Fitness Dumbbells",
      category: "FITNESS",
      image: "/images/dumbbells.jpg",
      price: "Rs. 6,500",
      rating: "4.9",
      sold: "75+ sold",
    },
    {
      name: "Sports Water Bottle",
      category: "FITNESS",
      image: "/images/water-bottle.jpg",
      price: "Rs. 1,299",
      rating: "4.5",
      sold: "100+ sold",
    },
    {
      name: "Sports Bag",
      category: "ACCESSORIES",
      image: "/images/sports-bag.jpg",
      price: "Rs. 2,800",
      rating: "4.7",
      sold: "80+ sold",
    },
    {
      name: "UGREEN 65W Fast Charger",
      category: "ACCESSORIES",
      image: "/images/charger.jpg",
      price: "Rs. 8,324",
      rating: "4.7",
      sold: "100+ sold",
    },
  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const placeOrder = (product) => {
    const productData = {
      ...product,
      price: Number(product.price.replace(/[^\d]/g, "")),
    };

    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(productData)
    );

    navigate("/check");
  };

  return (
    <div className="products-page">

      {/* HERO */}
      <section className="products-hero">
        <div className="products-orange-shape"></div>

        <div className="products-hero-content">
          <p className="products-explore">
            GET PREMIUM PRODUCTS
          </p>

          <h1 className="products-logo">
            <span>SPORT</span>IVO
          </h1>

          <h2>ALL SPORTS PRODUCTS</h2>

          <div className="products-orange-line"></div>

          <p className="products-description">
            ALL OUR PRODUCTS SHOWN HERE
          </p>
        </div>

        <div className="products-hero-icons">
          <div className="hero-icon">⚽</div>
          <div className="hero-icon">🏏</div>
          <div className="hero-icon">🏀</div>
          <div className="hero-icon">🥊</div>
          <div className="hero-icon">🏋️</div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="products-category-buttons">

        <button
          className={selectedCategory === "ALL" ? "active" : ""}
          onClick={() => setSelectedCategory("ALL")}
        >
          🛍️ All
        </button>

        <button
          className={selectedCategory === "CRICKET" ? "active" : ""}
          onClick={() => setSelectedCategory("CRICKET")}
        >
          🏏 Cricket
        </button>

        <button
          className={selectedCategory === "FOOTBALL" ? "active" : ""}
          onClick={() => setSelectedCategory("FOOTBALL")}
        >
          ⚽ Football
        </button>

        <button
          className={selectedCategory === "BASKETBALL" ? "active" : ""}
          onClick={() => setSelectedCategory("BASKETBALL")}
        >
          🏀 Basketball
        </button>

        <button
          className={selectedCategory === "BOXING" ? "active" : ""}
          onClick={() => setSelectedCategory("BOXING")}
        >
          🥊 Boxing
        </button>

        <button
          className={selectedCategory === "FITNESS" ? "active" : ""}
          onClick={() => setSelectedCategory("FITNESS")}
        >
          🏋️ Fitness
        </button>

        <button
          className={selectedCategory === "ACCESSORIES" ? "active" : ""}
          onClick={() => setSelectedCategory("ACCESSORIES")}
        >
          🎒 Accessories
        </button>

      </div>

      {/* PRODUCTS */}
      <section className="products-list-section">

        <div className="products-heading">
          <h2>
            {selectedCategory === "ALL"
              ? "All Products"
              : `${selectedCategory} Products`}
          </h2>

          <p>
            Choose your favorite sports product
          </p>
        </div>

        <div className="products-page-grid">

          {filteredProducts.map((product, index) => (

            <div
              className="products-page-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="products-page-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              {/* INFO */}
              <div className="products-page-info">

                <span className="products-category">
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="products-rating">
                  ⭐ {product.rating}
                  <span>|</span>
                  {product.sold}
                </div>

                <div className="products-price">
                  {product.price}
                </div>

                <button
                  className="products-order-btn"
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

export default ProductsPage;