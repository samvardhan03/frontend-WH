import React from "react";
import { Link } from "react-router-dom";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>OnConf template</title>
        <meta property="og:title" content="OnConf template" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/circle-background.svg"
            className="home-image"
          />
          <img alt="image" src="/line-background.svg" className="home-image1" />
        </div>
        <header className="home-header">
          <header data-thq="thq-navbar" className="home-navbar">
            <h2 className="home-text">OnConf</h2>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <span className="navLink">Report</span>
                <span className="navLink">Dashboard</span>
                <span className="navLink">Forecast</span>
              </nav>
              <Link to="/sign-up" className="home-register button">
                <span>Register now</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </Link>
              <Link to="/login" className="home-navlink button">
                Login
              </Link>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container1">
                  <h2 className="home-text02">OnConf</h2>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="navLink home-text03">About</span>
                  <span className="navLink home-text04">Features</span>
                  <span className="navLink home-text05">Pricing</span>
                  <span className="navLink home-text06">Team</span>
                  <span className="navLink home-text07">Blog</span>
                </nav>
                <div className="home-button-container">
                  <button className="home-login button">Login</button>
                  <button className="button home-register1">Register</button>
                </div>
                <div className="home-icon-group">
                  <div className="home-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon06"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon10"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="home-background1"
              />
            </div>
          </header>
        </header>
        <div className="home-hero-content">
          <div className="home-caption">
            <Link
              to="/sign-up"
              className="home-register2 button-style-1 button"
            >
              <span className="home-text08">try now</span>
            </Link>
            <p className="home-caption1">
              <span className="home-text09">
                real time data updates and forecasting
              </span>
              <br className="home-text10"></br>
              <br></br>
            </p>
          </div>
        </div>
        <Link to="/sign-up" className="home-register3 button">
          <span>Register now</span>
          <svg viewBox="0 0 1024 1024" className="home-icon12">
            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
          </svg>
        </Link>
        <Link to="/sign-up" className="home-register4 button">
          <span>Register now</span>
          <svg viewBox="0 0 1024 1024" className="home-icon14">
            <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
          </svg>
        </Link>
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
      <section className="home-schedule"></section>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container5">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
