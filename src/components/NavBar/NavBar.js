import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import bgImgHomePage from "../../Assets/img/bg.jpg";
import bgImgOtherPage from "../../Assets/img/page-top-bg.jpg";
import mainLogo from "../../Assets/img/logo.png";
import classes from "./NavBar.module.css";

const navbar = (props) => {
  //!Var decleration
  let navBarElement = null;
  let navTitile = "";
  if (props.location.pathname === "/") {
    navBarElement = (
      <React.Fragment>
        <section
          style={{ backgroundImage: `url(${bgImgHomePage})` }}
          className="hero-section set-bg"
          data-setbg="img/bg.jpg"
        >
          <div className="container hero-text text-white">
            <h2>find your place with our local life style</h2>
            <p>
              Search real estate property records, houses, condos, land and more
              on leramiz.com®.
              <br />
              Find property info from the most comprehensive source data.
            </p>
            <NavLink to="/allListings" className="site-btn">
              VIEW DETAIL
            </NavLink>
          </div>
        </section>
        <div className="filter-search">
          <div className="container">
            <form className="filter-form">
              <input
                type="text"
                placeholder="Enter NavLink street name, address number or keyword"
              />
              <select>
                <option value="City">City</option>
              </select>
              <select>
                <option value="City">State</option>
              </select>
              <button className="site-btn fs-submit">SEARCH</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    //? url ke find kar ke nav bar ka title set kar rhe he

    if (props.location.pathname === "/allListings") {
      navTitile = "FEATURED LISTINGS";
    } else if (props.location.pathname === "/aboutUs") {
      navTitile = "ABOUT US";
    } else if (props.location.pathname === "/contactUs") {
      navTitile = "Contact US";
    } else if (props.location.pathname === "/MoreStuff") {
      navTitile = "More Stuff Coming Soon";
    } else if (props.location.pathname === "/singleListing/:listingID") {
      navTitile = "SINGLE LISTING";
    }
    console.log(props.location.pathname);
    navBarElement = (
      <section
        style={{ backgroundImage: `url(${bgImgOtherPage})` }}
        className="page-top-section set-bg"
        data-setbg="img/page-top-bg.jpg"
      >
        <div className="container text-white">
          <h2>{navTitile}</h2>
        </div>
      </section>
    );
  }
  return (
    <div style={{ marginBottom: "10px" }}>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 header-top-left">
                <div className="top-info">
                  <i className="fa fa-phone"></i>
                  (+88) 666 121 4321
                </div>
                <div className="top-info">
                  <i className="fa fa-envelope"></i>
                  info.leramiz@colorlib.com
                </div>
              </div>
              <div className="col-lg-6 text-lg-right header-top-right">
                <div className="top-social">
                  <NavLink to="/MoreStuff">
                    <i className="fa fa-facebook"></i>
                  </NavLink>
                  <NavLink to="/MoreStuff">
                    <i className="fa fa-twitter"></i>
                  </NavLink>
                  <NavLink to="/MoreStuff">
                    <i className="fa fa-instagram"></i>
                  </NavLink>

                  <NavLink to="/MoreStuff">
                    <i className="fa fa-linkedin"></i>
                  </NavLink>
                </div>
                <div className="user-panel">
                  <NavLink to="/MoreStuff">
                    <i className="fa fa-sign-in"></i> Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="site-navbar">
                <NavLink to="/" className="site-logo">
                  <img src={mainLogo} alt="" />
                </NavLink>
                <div className="nav-switch" onClick={props.toggleNavBar}>
                  <i className="fa fa-bars"></i>
                </div>
                <ul
                  className={
                    props.isMenuBarCollapse
                      ? classes.openNavBarSmallScreen.concat(" main-menu ")
                      : classes.closeNavBarSmallScreen.concat(" main-menu ")
                  }
                >
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/allListings">FEATURED LISTING</NavLink>
                  </li>
                  <li>
                    <NavLink to="/aboutUs">ABOUT US</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactUs">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {navBarElement}
      {/**<!-- Breadcrumb --> */}
      <div className="site-breadcrumb">
        <div className="container">
          <Link to="/">
            <i className="fa fa-home"></i>Home
          </Link>
          <span>
            <i className="fa fa-angle-right"></i>
            {navTitile}
          </span>
        </div>
      </div>
      {/** <!-- Breadcrumb end --> */}
    </div>
  );
};

export default withRouter(navbar);
