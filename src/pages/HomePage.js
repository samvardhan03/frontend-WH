import React from "react";
import { Helmet } from "react-helmet";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>DataPredictPro - Your Data Prediction Solution</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link rel="stylesheet" href="HomePage.css" />
      </Helmet>
      <header className="hero" id="home">
        <div className="container text-center">
          <h1 className="mb-4">Unlock the Power of Your Data</h1>
          <p className="lead mb-5">
            Advanced predictions and comprehensive reporting at your fingertips
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </header>

      <section className="features" id="features">
        <div className="container">
          <h2 className="text-center mb-5">Our Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-item text-center">
                <i className="fas fa-chart-line mb-3"></i>
                <h3>Advanced Predictions</h3>
                <p>Get accurate predictions based on your historical data</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-item text-center">
                <i className="fas fa-file-alt mb-3"></i>
                <h3>Comprehensive Reports</h3>
                <p>Generate detailed reports with just a few clicks</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-item text-center">
                <i className="fas fa-tachometer-alt mb-3"></i>
                <h3>Interactive Dashboard</h3>
                <p>Visualize your data with our user-friendly dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container text-center">
          <h2 className="mb-5">People responsible</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <blockquote className="blockquote">
                <p>
                  "DataPredictPro has been a game-changer for our business.
                  Their predictions have helped us make informed decisions and
                  stay ahead of the competition."
                </p>
                <footer className="blockquote-footer text-white">
                  Devraj Jajoo
                </footer>
              </blockquote>
            </div>
            <div className="col-md-6 mb-4">
              <blockquote className="blockquote">
                <p>
                  "The comprehensive reports provided by DataPredictPro have
                  helped us identify areas of improvement and optimize our
                  operations."
                </p>
                <footer className="blockquote-footer text-white">
                  Samvardhan
                </footer>
              </blockquote>
            </div>
            <div className="col-md-6 mb-4">
              <blockquote className="blockquote">
                <p>
                  "The interactive dashboard is so easy to use, even our
                  non-technical team members can use it to make data-driven
                  decisions."
                </p>
                <footer className="blockquote-footer text-white">Naman</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
