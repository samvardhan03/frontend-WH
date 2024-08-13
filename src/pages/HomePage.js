import React from "react";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <div>
        <img href="/public/image.png"></img>
      </div>
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
                <i className="fas fa-chart-line mb-3" />
                <h3>Advanced Predictions</h3>
                <p>Get accurate predictions based on your historical data</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-item text-center">
                <i className="fas fa-file-alt mb-3" />
                <h3>Comprehensive Reports</h3>
                <p>Generate detailed reports with just a few clicks</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-item text-center">
                <i className="fas fa-tachometer-alt mb-3" />
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
                <footer className="blockquote-footer text-white">
                  Devraj Jajoo
                </footer>
              </blockquote>
            </div>
            <div className="col-md-6 mb-4">
              <blockquote className="blockquote">
                <footer className="blockquote-footer text-white">
                  Samvardhan
                </footer>
              </blockquote>
            </div>
            <div className="col-md-6 mb-4">
              <blockquote className="blockquote">
                <footer className="blockquote-footer text-white">Naman</footer>
              </blockquote>
            </div>
            <div className="col-md-6 mb-4">
              <blockquote className="blockquote">
                <footer className="blockquote-footer text-white">Kshitj</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact">
        <div className="container text-center">
          <h2 className="mb-4" />
          <p />
          <p />
          <p />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
