import React from "react";

import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Xmart</title>
        <meta property="og:title" content="OnConf template" />
      </Helmet>
      <section className="sectionone">
        <div className="home-background">
          <img alt="image" src="/image.png" className="home-image" />
        </div>

        <div className="home-hero-content">
          <div className="home-caption">
            <p className="home-caption1">
              <span className="home-text09">
                real time data updates and forecast
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="home-notes">
        <div className="home-first">
          <div data-aos="fade-up-right" className="home-content">
            <h2 className="home-header1">Get real time data analytics</h2>
            <div className="home-list">
              <div className="home-note">
                <div className="home-point"></div>
                <p className="home-text14">
                  We use modern deep learning techniques to give you real time
                  update
                </p>
              </div>
              <div className="home-note1">
                <div className="home-point1"></div>
                <p className="home-text15">
                  Dashboard to overlook all the necessary entities
                </p>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/notes-1-1400w.png"
            className="home-image2 image-notes"
          />
        </div>
        <div className="home-second">
          <div data-aos="fade-up-left" className="home-content1">
            <h2 className="home-header2">
              Get a forecast for the products using our tool
            </h2>
            <button className="button button-style-2 home-register5">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
