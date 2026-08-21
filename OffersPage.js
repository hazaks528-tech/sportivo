import React from "react";
import { useNavigate } from "react-router-dom";
import "./OffersPage.css";

function OffersPage() {
  const navigate = useNavigate();

  const offers = [
    {
      title: "CRICKET KIT SALE",
      discount: "30% OFF",
      product: "Complete Cricket Kit",
      oldPrice: "Rs. 25,000",
      newPrice: "Rs. 17,500",
      image: "/images/cricket-kit.jpg",
    },
    {
      title: "FOOTBALL SPECIAL",
      discount: "25% OFF",
      product: "Professional Football",
      oldPrice: "Rs. 4,000",
      newPrice: "Rs. 3,000",
      image: "/images/football.jpg",
    },
    {
      title: "FITNESS DEAL",
      discount: "20% OFF",
      product: "Premium Dumbbells",
      oldPrice: "Rs. 8,000",
      newPrice: "Rs. 6,400",
      image: "/images/dumbbells.jpg",
    },
    {
      title: "BOXING OFFER",
      discount: "35% OFF",
      product: "Professional Boxing Gloves",
      oldPrice: "Rs. 6,000",
      newPrice: "Rs. 3,900",
      image: "/images/boxing-gloves.jpg",
    },
    {
      title: "SPORTS SHOES DEAL",
      discount: "40% OFF",
      product: "Professional Sports Shoes",
      oldPrice: "Rs. 10,000",
      newPrice: "Rs. 6,000",
      image: "/images/football-shoes.jpg",
    },
    {
      title: "ACCESSORIES SALE",
      discount: "15% OFF",
      product: "Premium Sports Bag",
      oldPrice: "Rs. 3,500",
      newPrice: "Rs. 2,975",
      image: "/images/sports-bag.jpg",
    },
  ];

  const shopNow = (offer) => {
    const product = {
      name: offer.product,
      category: "SPECIAL OFFER",
      image: offer.image,
      price: Number(
        offer.newPrice.replace(/[^\d]/g, "")
      ),
      rating: "4.8",
      sold: "Special Offer",
    };

    localStorage.setItem(
      "selectedProduct",
      JSON.stringify(product)
    );

    navigate("/check");
  };

  return (
    <div className="offers-page">

      <section className="offers-hero">

        <div className="offers-orange-shape"></div>

        <div className="offers-hero-content">

          <p className="offers-small-title">
            SPECIAL DEALS
          </p>

          <h1>
            <span>SPORT</span>IVO
          </h1>

          <h2>MEGA OFFERS</h2>

          <div className="offers-line"></div>

          <p>
            Get your favorite sports products at
            amazing discounted prices.
          </p>

        </div>

        <div className="offers-badge">
          <strong>UP TO</strong>
          <span>40%</span>
          <small>OFF</small>
        </div>

      </section>

      <section className="offers-section">

        <div className="offers-heading">
          <h2>AZADI SPECIAL</h2>

          <p>
            enjoy spottivo Premium products up to 40% off
            Limited time deals — grab them before they are gone!
          </p>
        </div>

        <div className="offers-grid">

          {offers.map((offer, index) => (

            <div className="offer-card" key={index}>

              <div className="offer-discount">
                {offer.discount}
              </div>

              <div className="offer-image">
                <img
                  src={offer.image}
                  alt={offer.product}
                />
              </div>

              <div className="offer-info">

                <span className="offer-category">
                  SPECIAL OFFER
                </span>

                <h3>
                  {offer.title}
                </h3>

                <p className="offer-product">
                  {offer.product}
                </p>

                <div className="offer-prices">

                  <span className="offer-old-price">
                    {offer.oldPrice}
                  </span>

                  <span className="offer-new-price">
                    {offer.newPrice}
                  </span>

                </div>

                <button
                  className="offer-button"
                  onClick={() => shopNow(offer)}
                >
                  SHOP NOW
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default OffersPage;