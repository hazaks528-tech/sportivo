import React, { useState } from "react";
import "./Check.css";

function Check() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Saved product nikalo
  const savedProduct = localStorage.getItem("selectedProduct");

  const selectedProduct = savedProduct
    ? JSON.parse(savedProduct)
    : {
        id: 1,
        name: "Premium Cricket Bat",
        price: 8999,
        oldPrice: 10999,
        rating: 4.8,
        image: "/bat.jpg",
      };

  const deliveryFee = 200;

  const total = selectedProduct.price + deliveryFee;

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="checkout-page">

      <div className="checkout-header">

        <div>
          <h1>SPORTIVO</h1>
          <p>Secure Checkout</p>
        </div>

        <div className="checkout-secure">
          🔒 Secure & Safe
        </div>

      </div>

      <div className="checkout-title">

        <h2>Place Your Order</h2>

        <p>
          Complete your information to place the order
        </p>

      </div>

      <div className="checkout-container">

        {/* LEFT */}

        <div className="checkout-left">

          <div className="checkout-box">

            <div className="box-heading">
              <span>📍</span>
              <h3>Delivery Information</h3>
            </div>

            <form onSubmit={handleOrder}>

              <div className="input-row">

                <div className="input-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="03XX XXXXXXX"
                    required
                  />
                </div>

              </div>

              <div className="input-group">

                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

              <div className="input-group">

                <label>Complete Address</label>

                <textarea
                  placeholder="House number, street, area..."
                  rows="4"
                  required
                ></textarea>

              </div>

              <div className="input-row">

                <div className="input-group">

                  <label>City</label>

                  <select required>

                    <option value="">
                      Select City
                    </option>

                    <option>Islamabad</option>
                    <option>Rawalpindi</option>
                    <option>Lahore</option>
                    <option>Karachi</option>
                    <option>Peshawar</option>
                    <option>Gilgit</option>
                    <option>Other</option>

                  </select>

                </div>

                <div className="input-group">

                  <label>Postal Code</label>

                  <input
                    type="text"
                    placeholder="Postal code"
                    required
                  />

                </div>

              </div>

              {/* PAYMENT */}

              <div className="payment-section">

                <div className="box-heading">
                  <span>💳</span>
                  <h3>Payment Method</h3>
                </div>

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />

                  <div>
                    <strong>
                      Cash on Delivery
                    </strong>

                    <p>
                      Pay when your order arrives.
                    </p>
                  </div>

                </label>

                <label className="payment-option">

                  <input
                    type="radio"
                    name="payment"
                  />

                  <div>
                    <strong>
                      Bank Transfer
                    </strong>

                    <p>
                      Pay through bank transfer.
                    </p>
                  </div>

                </label>

              </div>

              <button
                type="submit"
                className="place-order-btn"
              >
                PLACE ORDER
              </button>

            </form>

          </div>

        </div>

        {/* RIGHT */}

        <div className="checkout-right">

          <div className="checkout-box order-summary">

            <div className="box-heading">
              <span>🛒</span>
              <h3>Order Summary</h3>
            </div>

            {/* SELECTED PRODUCT */}

            <div className="summary-product">

              <div className="summary-image">

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />

              </div>

              <div className="summary-info">

                <h4>
                  {selectedProduct.name}
                </h4>

                <p>
                  Sports Product
                </p>

                <span>
                  Qty: 1
                </span>

              </div>

              <strong>
                Rs.{" "}
                {selectedProduct.price.toLocaleString()}
              </strong>

            </div>

            {/* SUBTOTAL */}

            <div className="summary-line">

              <span>
                Subtotal
              </span>

              <strong>
                Rs.{" "}
                {selectedProduct.price.toLocaleString()}
              </strong>

            </div>

            {/* DELIVERY */}

            <div className="summary-line">

              <span>
                Delivery Fee
              </span>

              <strong>
                Rs. {deliveryFee}
              </strong>

            </div>

            {/* DISCOUNT */}

            <div className="summary-line">

              <span>
                Discount
              </span>

              <strong className="discount-text">
                - Rs. 0
              </strong>

            </div>

            {/* TOTAL */}

            <div className="total-line">

              <span>
                Total
              </span>

              <strong>
                Rs. {total.toLocaleString()}
              </strong>

            </div>

          </div>

          {/* BENEFITS */}

          <div className="checkout-box benefits">

            <h3>
              Why Shop With SPORTIVO?
            </h3>

            <div className="benefit">

              <span>🚚</span>

              <div>
                <strong>
                  Fast Delivery
                </strong>

                <p>
                  Quick delivery across Pakistan
                </p>
              </div>

            </div>

            <div className="benefit">

              <span>🔒</span>

              <div>
                <strong>
                  Secure Shopping
                </strong>

                <p>
                  Your information is protected
                </p>
              </div>

            </div>

            <div className="benefit">

              <span>⭐</span>

              <div>
                <strong>
                  Premium Quality
                </strong>

                <p>
                  Quality sports products
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SUCCESS */}

      {orderPlaced && (

        <div className="success-message">

          <div className="success-box">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Order Placed Successfully!
            </h2>

            <p>
              Thank you for shopping with SPORTIVO.
              Your order has been received.
            </p>

            <button
              onClick={() => setOrderPlaced(false)}
              className="close-success"
            >
              CONTINUE SHOPPING
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Check;