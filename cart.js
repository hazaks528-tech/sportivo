import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const navigate = useNavigate();

  const productData = localStorage.getItem("selectedProduct");

  const product = productData
    ? JSON.parse(productData)
    : null;

  return (
    <div className="cart-page">

      <div className="cart-header">
        <div>
          <p>CART</p>

          <h1>
            <span>SPORT</span>IVO
          </h1>

          <div className="cart-line"></div>

          <h2>YOUR SELECTED PRODUCT</h2>
        </div>
      </div>


      <div className="cart-container">

        {!product ? (
          <div className="cart-empty">

            <h2>Your Cart is Empty</h2>

            <p>
              No product has been selected yet.
            </p>

            <button
              onClick={() => navigate("/products")}
            >
              SHOP PRODUCTS
            </button>

          </div>
        ) : (

          <div className="cart-content">

            <div className="cart-product">

              <div className="cart-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="cart-info">

                <span>
                  {product.category}
                </span>

                <h2>
                  {product.name}
                </h2>

                <p>
                  ⭐ {product.rating} | {product.sold}
                </p>

                <h3>
                  Rs. {Number(product.price).toLocaleString()}
                </h3>

              </div>

            </div>


            <div className="cart-summary">

              <h2>Order Summary</h2>

              <div className="cart-summary-line"></div>

              <div className="summary-row">
                <span>Product</span>
                <b>{product.name}</b>
              </div>

              <div className="summary-row">
                <span>Price</span>

                <b>
                  Rs. {Number(product.price).toLocaleString()}
                </b>
              </div>

              <div className="summary-total">
                <span>Total</span>

                <b>
                  Rs. {Number(product.price).toLocaleString()}
                </b>
              </div>

              <button
                className="place-order"
                onClick={() => navigate("/check")}
              >
                PLACE ORDER
              </button>

              <button
                className="continue-shopping"
                onClick={() => navigate("/products")}
              >
                CONTINUE SHOPPING
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;