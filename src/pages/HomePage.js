import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="section">
        <h1>Section 1</h1>
        <p>This is the first section.</p>
      </div>
      <div className="section">
        <h1>Section 2</h1>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="section">
        <h1>Section 3</h1>
        <img src="image.jpg" alt="An image" />
      </div>
    </div>
  );
};

export default HomePage;
