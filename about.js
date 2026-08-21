import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">

          <p className="about-small">
            ABOUT SPORTIVO
          </p>

          <h1>
            <span>SPORT</span>IVO
          </h1>

          <div className="about-orange-line"></div>

          <h2>
            YOUR TRUSTED SPORTS STORE
          </h2>

          <p>
            Your trusted destination for quality sports
            products at reasonable prices.
          </p>

        </div>
      </section>


      {/* CONTENT */}
      <main className="about-container">

        {/* WHO WE ARE */}
        <section className="about-section">

          <h2>Who We Are</h2>

          <div className="section-line"></div>

          <p>
            SPORTIVO is an online sports store offering
            quality products for cricket, football,
            basketball, boxing and fitness.
          </p>

          <p>
            We bring sports products together in one place
            so players and sports lovers can easily find
            what they need.
          </p>

        </section>


        {/* MISSION */}
        <section className="about-section">

          <h2>Our Mission</h2>

          <div className="section-line"></div>

          <p>
            Our mission is to provide reliable sports
            products at reasonable prices with a simple
            and convenient shopping experience.
          </p>

        </section>


        {/* FEATURES */}
        <section className="features-section">

          <div className="feature-card">
            <span>01</span>

            <h3>Quality</h3>

            <p>
              We focus on reliable and quality sports
              products.
            </p>
          </div>


          <div className="feature-card">
            <span>02</span>

            <h3>Fast Delivery</h3>

            <p>
              Quick delivery across Pakistan.
            </p>
          </div>


          <div className="feature-card">
            <span>03</span>

            <h3>Customer First</h3>

            <p>
              Our customers are always our priority.
            </p>
          </div>

        </section>


        {/* FINAL */}
        <section className="about-final">

          <h2>SPORTIVO</h2>

          <div></div>

          <p>
            YOUR ULTIMATE SPORTS STORE
          </p>

        </section>

      </main>

    </div>
  );
}

export default About;