import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <link rel="stylesheet" href="HomePage.css" />
      <section class="hero">
        <div class="hero-content">
          <h1>Your Technology Partner</h1>
          <p>
            We design and build digital experiences that drive growth and
            digital transformation.
          </p>
          <button onclick="showMore()">Learn More</button>
        </div>
      </section>
      <section class="services">
        <h2>Our Services</h2>
        <div class="service-item" id="service-1">
          <h3>Service 1</h3>
          <p>Description of Service 1</p>
        </div>
        <div class="service-item" id="service-2">
          <h3>Service 2</h3>
          <p>Description of Service 2</p>
        </div>
        <div class="service-item" id="service-3">
          <h3>Service 3</h3>
          <p>Description of Service 3</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
