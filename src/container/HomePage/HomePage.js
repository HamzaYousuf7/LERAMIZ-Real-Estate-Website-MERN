import React from "react";
import { Link } from "react-router-dom";

import SingleItem from "../Categories/SingleItem/SingleItem";

import recnetProperties1 from "../../Assets/img/propertie/1.jpg";
import recnetProperties2 from "../../Assets/img/propertie/2.jpg";
import recnetProperties3 from "../../Assets/img/propertie/3.jpg";
import recnetProperties4 from "../../Assets/img/propertie/4.jpg";

import ourService from "../../Assets/img/service-bg.jpg";
import servicesImg from "../../Assets/img/service.jpg";

import cate1 from "../../Assets/img/feature-cate/1.jpg";
import cate2 from "../../Assets/img/feature-cate/2.jpg";
import cate3 from "../../Assets/img/feature-cate/3.jpg";
import cate4 from "../../Assets/img/feature-cate/4.jpg";

import imgGallery1 from "../../Assets/img/gallery/1.jpg";
import imgGallery2 from "../../Assets/img/gallery/2.jpg";
import imgGallery3 from "../../Assets/img/gallery/3.jpg";
import imgGallery4 from "../../Assets/img/gallery/4.jpg";

const homePage = () => {
  return (
    <div>
      <section className="properties-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h3>RECENT PROPERTIES</h3>
            <p>Discover how much the latest properties have been sold for</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="propertie-item set-bg"
                style={{ backgroundImage: `url(${recnetProperties1})` }}
                data-setbg="img/propertie/1.jpg"
              >
                <div className="sale-notic">FOR SALE</div>
                <div className="propertie-info text-white">
                  <div className="info-warp">
                    <h5>176 Kingsberry, Dr Anderson</h5>
                    <p>
                      <i className="fa fa-map-marker"></i> Rochester, NY 14626
                    </p>
                  </div>
                  <div className="price">$1,777,000</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="propertie-item set-bg"
                style={{ backgroundImage: `url(${recnetProperties2})` }}
                data-setbg="img/propertie/2.jpg"
              >
                <div className="rent-notic">FOR Rent</div>
                <div className="propertie-info text-white">
                  <div className="info-warp">
                    <h5>45 Lianne Dr, Greece Street</h5>
                    <p>
                      <i className="fa fa-map-marker"></i> Tasley, VA 23441
                    </p>
                  </div>
                  <div className="price">$1255/month</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="propertie-item set-bg"
                style={{ backgroundImage: `url(${recnetProperties3})` }}
                data-setbg="img/propertie/3.jpg"
              >
                <div className="sale-notic">FOR SALE</div>
                <div className="propertie-info text-white">
                  <div className="info-warp">
                    <h5>6101 Aqua Ave Apt 603</h5>
                    <p>
                      <i className="fa fa-map-marker"></i> Miami Beach, FL 33141
                    </p>
                  </div>
                  <div className="price">$150,000</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="propertie-item set-bg"
                style={{ backgroundImage: `url(${recnetProperties4})` }}
                data-setbg="img/propertie/4.jpg"
              >
                <div className="rent-notic">FOR Rent</div>
                <div className="propertie-info text-white">
                  <div className="info-warp">
                    <h5>339 N Oakhurst Dr Apt 303</h5>
                    <p>
                      <i className="fa fa-map-marker"></i> Beverly Hills, CA
                      90210
                    </p>
                  </div>
                  <div className="price">$3000/month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** <!-- Services section -->*/}
      <section
        className="services-section spad set-bg"
        style={{ backgroundImage: `url(${ourService})` }}
        data-setbg="img/service-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={servicesImg} alt="" />
            </div>
            <div className="col-lg-5 offset-lg-1 pl-lg-0">
              <div className="section-title text-white">
                <h3>OUR SERVICES</h3>
                <p>We provide the perfect service for </p>
              </div>
              <div className="services">
                <div className="service-item">
                  <i className="fa fa-comments"></i>
                  <div className="service-text">
                    <h5>Consultant Service</h5>
                    <p>
                      In Aenean purus, pretium sito amet sapien denim consectet
                      sed urna placerat sodales magna leo.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <i className="fa fa-home"></i>
                  <div className="service-text">
                    <h5>Properties Management</h5>
                    <p>
                      In Aenean purus, pretium sito amet sapien denim consectet
                      sed urna placerat sodales magna leo.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <i className="fa fa-briefcase"></i>
                  <div className="service-text">
                    <h5>Renting and Selling</h5>
                    <p>
                      In Aenean purus, pretium sito amet sapien denim consectet
                      sed urna placerat sodales magna leo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- Services section end --> */}

      {/**  <!-- feature section -->*/}
      <section className="feature-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h3>Featured Listings</h3>
            <p>Browse houses and flats for sale and to rent in your area</p>
          </div>
          <div className="row">
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </div>
        </div>
      </section>
      {/** <!-- feature section end --> */}

      {/**	<!-- feature category section --> */}
      <section className="feature-category-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h3>LOOKING PROPERTY</h3>
            <p>What kind of property are you looking for? We will help you</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 f-cata">
              <img src={cate1} alt="" />
              <h5>Apartment for rent</h5>
            </div>
            <div className="col-lg-3 col-md-6 f-cata">
              <img src={cate2} alt="" />
              <h5>Family Home</h5>
            </div>
            <div className="col-lg-3 col-md-6 f-cata">
              <img src={cate3} alt="" />
              <h5>Resort Villas</h5>
            </div>
            <div className="col-lg-3 col-md-6 f-cata">
              <img src={cate4} alt="" />
              <h5>Office Building</h5>
            </div>
          </div>
        </div>
      </section>
      {/**	<!-- feature category section end-->*/}
    </div>
  );
};

export default homePage;
