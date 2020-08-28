import React from "react";
import { Link } from "react-router-dom";

import bgImgHomePage from "../../Assets/img/footer-bg.jpg";
import footerLogo from "../../Assets/img/logo.png"
import classes from "./Footer.module.css";
const footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${bgImgHomePage})` }}
      className="footer-section set-bg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-widget">
            <img src={footerLogo} alt="footer lgog" />
            <p>
              Lorem ipsum dolo sit azmet, consecter dipise consult elit.
              Maecenas mamus antesme non anean a dolor sample tempor nuncest
              erat.
            </p>
            <div className="social">
              <Link to="/Categories">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/Categories">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="/Categories">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="/Categories">
                <i className="fa fa-pinterest"></i>
              </Link>
              <Link to="/Categories">
                <i className="fa fa-linkedin"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-widget">
            <div className="contact-widget">
              <h5 className="fw-title">CONTACT US</h5>
              <p>
                <i className="fa fa-map-marker"></i>3711-2880 Nulla St, Mankato,
                Mississippi
              </p>
              <p>
                <i className="fa fa-phone"></i>(+88) 666 121 4321
              </p>
              <p>
                <i className="fa fa-envelope"></i>info.leramiz@colorlib.com
              </p>
              <p>
                <i className="fa fa-clock-o"></i>Mon - Sat, 08 AM - 06 PM
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-widget">
            <div className="double-menu-widget">
              <h5 className="fw-title">POPULAR PLACES</h5>
              <ul>
                <li>
                  <Link to="/MoreStuff">Florida</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">New York</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">Washington</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">Los Angeles</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">Chicago</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/MoreStuff"> St Louis</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">Jacksonville</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">San Jose</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">San Diego</Link>
                </li>
                <li>
                  <Link to="/MoreStuff">Houston</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  footer-widget">
            <div className="newslatter-widget">
              <h5 className="fw-title">NEWSLETTER</h5>
              <p>
                Subscribe your email to get the latest news and new offer also
                discount
              </p>
              <form className="footer-newslatter-form">
                <input type="text" placeholder="Email address" />
                <button>
                  <i className="fa fa-send"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allListings">Featured Listing</Link>
              </li>
              <li>
                <Link to="/aboutUs">About us</Link>
              </li>

              <li>
                <Link to="/contactUs">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={classes.copyrightp}>
            All rights reserved | This template is made with
            <i className="fa fa-heart-o" aria-hidden="true"></i> by
            <Link to="https://colorlib.com">Colorlib</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
