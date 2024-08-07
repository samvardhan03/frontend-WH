import React from "react";
import "./HomePage.css";
const HomePage = () => {
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
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
    </head>
    <body>
      <header class="hero" id="home">
        <div class="container text-center">
          <h1 class="mb-4">Unlock the Power of Your Data</h1>
          <p class="lead mb-5">
            Advanced predictions and comprehensive reporting at your fingertips
          </p>
          <a href="#" class="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </header>

      <section class="features" id="features">
        <div class="container">
          <h2 class="text-center mb-5">Our Features</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="feature-item text-center">
                <i class="fas fa-chart-line mb-3"></i>
                <h3>Advanced Predictions</h3>
                <p>Get accurate predictions based on your historical data</p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="feature-item text-center">
                <i class="fas fa-file-alt mb-3"></i>
                <h3>Comprehensive Reports</h3>
                <p>Generate detailed reports with just a few clicks</p>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="feature-item text-center">
                <i class="fas fa-tachometer-alt mb-3"></i>
                <h3>Interactive Dashboard</h3>
                <p>Visualize your data with our user-friendly dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials" id="testimonials">
        <div class="container text-center">
          <h2 class="mb-5">People responsible</h2>
          <div class="row">
            <div class="col-md-6 mb-4">
              <blockquote class="blockquote">
                <footer class="blockquote-footer text-white">
                  Devraj Jajoo
                </footer>
              </blockquote>
            </div>
            <div class="col-md-6 mb-4">
              <blockquote class="blockquote">
                <footer class="blockquote-footer text-white">Samvardhan</footer>
              </blockquote>
            </div>
            <div class="col-md-6 mb-4">
              <blockquote class="blockquote">
                <footer class="blockquote-footer text-white">Naman</footer>
              </blockquote>
            </div>
            <div class="col-md-6 mb-4">
              <blockquote class="blockquote">
                <footer class="blockquote-footer text-white">Kshitj</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div class="container text-center">
          <h2 class="mb-4"></h2>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </body>
  </html>;
};

export default HomePage;
