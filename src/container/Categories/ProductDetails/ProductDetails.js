import React, { Component } from "react";
import { Link } from "react-router-dom";

import imgSlider1 from "../../../Assets/img/single-list-slider/1.jpg";
import imgSlider2 from "../../../Assets/img/single-list-slider/2.jpg";
import imgSlider3 from "../../../Assets/img/single-list-slider/3.jpg";
import imgSlider4 from "../../../Assets/img/single-list-slider/4.jpg";
import imgSlider5 from "../../../Assets/img/single-list-slider/5.jpg";

import authorImg from "../../../Assets/img/author.jpg";

import feature1 from "../../../Assets/img/feature/1.jpg";
import feature2 from "../../../Assets/img/feature/2.jpg";
import feature3 from "../../../Assets/img/feature/3.jpg";
import feature4 from "../../../Assets/img/feature/4.jpg";

import videoImg from "../../../Assets/img/video.jpg";
import videoImgButton from "../../../Assets/img/video-btn.png";

import sketchPlan1 from "../../../Assets/img/plan-sketch.jpg";

export class ProductDetails extends Component {
  state = {
    floorPlansToggleArray: [false, false, false],
  };
  floorPlansTogglehandler = (id) => {
    //console.log(id); //! LOGIC KE FUNC SE ID BHEJ WA RHE HE OR USKE BASES PE STATE CHARE RHE HRE TOGGLE KAR RJE HE
    if (id === 0) {
      this.setState({
        floorPlansToggleArray: [
          !this.state.floorPlansToggleArray[id],
          false,
          false,
        ],
      });
    } else if (id === 1) {
      this.setState({
        floorPlansToggleArray: [
          false,
          !this.state.floorPlansToggleArray[id],
          false,
        ],
      });
    } else if (id === 2) {
      this.setState({
        floorPlansToggleArray: [
          false,
          false,
          !this.state.floorPlansToggleArray[id],
        ],
      });
    }
  };
  render() {
    return (
      <div>
        {/*<!-- Page -->*/}
        <section className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 single-list-page">
                <div className="single-list-slider owl-carousel" id="sl-slider">
                  <div
                    className="sl-item set-bg"
                    data-setbg="img/single-list-slider/1.jpg"
                  >
                    <div className="sale-notic">FOR SALE</div>
                  </div>
                  <div
                    className="sl-item set-bg"
                    data-setbg="img/single-list-slider/2.jpg"
                  >
                    <div className="rent-notic">FOR Rent</div>
                  </div>
                  <div
                    className="sl-item set-bg"
                    data-setbg="img/single-list-slider/3.jpg"
                  >
                    <div className="sale-notic">FOR SALE</div>
                  </div>
                  <div
                    className="sl-item set-bg"
                    data-setbg="img/single-list-slider/4.jpg"
                  >
                    <div className="rent-notic">FOR Rent</div>
                  </div>
                  <div
                    className="sl-item set-bg"
                    data-setbg="img/single-list-slider/5.jpg"
                  >
                    <div className="sale-notic">FOR SALE</div>
                  </div>
                </div>
                <div
                  className="owl-carousel sl-thumb-slider"
                  id="sl-slider-thumb"
                >
                  <div
                    className="sl-thumb set-bg"
                    data-setbg="img/single-list-slider/1.jpg"
                  ></div>
                  <div
                    className="sl-thumb set-bg"
                    data-setbg="img/single-list-slider/2.jpg"
                  ></div>
                  <div
                    className="sl-thumb set-bg"
                    data-setbg="img/single-list-slider/3.jpg"
                  ></div>
                  <div
                    className="sl-thumb set-bg"
                    data-setbg="img/single-list-slider/4.jpg"
                  ></div>
                  <div
                    className="sl-thumb set-bg"
                    data-setbg="img/single-list-slider/5.jpg"
                  ></div>
                </div>
                <div className="single-list-content">
                  <div className="row">
                    <div className="col-xl-8 sl-title">
                      <h2>305 North Palm Drive</h2>
                      <p>
                        <i className="fa fa-map-marker"></i>Beverly Hills, CA
                        90210
                      </p>
                    </div>
                    <div className="col-xl-4">
                      <Link to="#" className="price-btn">
                        $4,500,000
                      </Link>
                    </div>
                  </div>
                  <h3 className="sl-sp-title">Property Details</h3>
                  <div className="row property-details-list">
                    <div className="col-md-4 col-sm-6">
                      <p>
                        <i className="fa fa-th-large"></i> 1500 Square foot
                      </p>
                      <p>
                        <i className="fa fa-bed"></i> 16 Bedrooms
                      </p>
                      <p>
                        <i className="fa fa-user"></i> Gina Wesley
                      </p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <p>
                        <i className="fa fa-car"></i> 2 Garages
                      </p>
                      <p>
                        <i className="fa fa-building-o"></i> Family Villa
                      </p>
                      <p>
                        <i className="fa fa-clock-o"></i> 1 days ago
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <i className="fa fa-bath"></i> 8 Bathrooms
                      </p>
                      <p>
                        <i className="fa fa-trophy"></i> 5 years age
                      </p>
                    </div>
                  </div>
                  <h3 className="sl-sp-title">Description</h3>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus egestas fermentum ornareste. Donec index lorem.
                      Vestibulum aliquet odio, eget tempor libero. Cras congue
                      cursus tincidunt. Nullam venenatis dui id orci egestas
                      tincidunt id elit. Nullam ut vuputate justo. Integer
                      lacnia pharetra pretium. Casan ante ipsum primis in
                      faucibus orci luctus et ultrice.
                    </p>
                  </div>
                  <h3 className="sl-sp-title">Property Details</h3>
                  <div className="row property-details-list">
                    <div className="col-md-4 col-sm-6">
                      <p>
                        <i className="fa fa-check-circle-o"></i> Air
                        conditioning
                      </p>
                      <p>
                        <i className="fa fa-check-circle-o"></i> Telephone
                      </p>
                      <p>
                        <i className="fa fa-check-circle-o"></i> Laundry Room
                      </p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <p>
                        <i className="fa fa-check-circle-o"></i> Central Heating
                      </p>
                      <p>
                        <i className="fa fa-check-circle-o"></i> Family Villa
                      </p>
                      <p>
                        <i className="fa fa-check-circle-o"></i> Metro Central
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <i className="fa fa-check-circle-o"></i> City views
                      </p>
                      <p>
                        <i className="fa fa-check-circle-o"></i> Internet
                      </p>
                      <p>
                        <i className="fa fa-check-circle-o"></i> Electric Range
                      </p>
                    </div>
                  </div>
                  <h3 className="sl-sp-title bd-no">Floorplans</h3>
                  <div id="accordion" className="plan-accordion">
                    <div className="panel">
                      <div className="panel-header" id="headingOne">
                        <button
                          className={
                            this.state.floorPlansToggleArray[0]
                              ? "panel-link active"
                              : "panel-link "
                          }
                          data-toggle="collapse"
                          data-target="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                          onClick={() => this.floorPlansTogglehandler(0)}
                        >
                          First Floor: <span>660 sq ft</span>
                          <i className="fa fa-angle-down"></i>
                        </button>
                      </div>
                      <div
                        id="collapse1"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                        style={{
                          display: this.state.floorPlansToggleArray[0]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div className="panel-body">
                          <img src={sketchPlan1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-header" id="headingTwo">
                        <button
                          className={
                            this.state.floorPlansToggleArray[1]
                              ? "panel-link active"
                              : "panel-link "
                          }
                          data-toggle="collapse"
                          data-target="#collapse2"
                          aria-expanded="true"
                          aria-controls="collapse2"
                          onClick={() => this.floorPlansTogglehandler(1)}
                        >
                          Second Floor:<span>610 sq ft.</span>
                          <i className="fa fa-angle-down"></i>
                        </button>
                      </div>
                      <div
                        id="collapse2"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                        style={{
                          display: this.state.floorPlansToggleArray[1]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div className="panel-body">
                          <img src={sketchPlan1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-header" id="headingThree">
                        <button
                          className={
                            this.state.floorPlansToggleArray[2]
                              ? "panel-link active"
                              : "panel-link "
                          }
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                          onClick={() => this.floorPlansTogglehandler(2)}
                        >
                          Third Floor :<span>580 sq ft</span>{" "}
                          <i className="fa fa-angle-down"></i>
                        </button>
                      </div>
                      <div
                        id="collapse3"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                        style={{
                          display: this.state.floorPlansToggleArray[2]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div className="panel-body">
                          <img src={sketchPlan1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="sl-sp-title bd-no">Video</h3>
                  <div className="perview-video">
                    <img src={videoImg} alt="" />
                    <Link
                      to="https://www.youtube.com/watch?v=v13nSVp6m5I"
                      className="video-link"
                    >
                      <img src={videoImgButton} alt="" />
                    </Link>
                  </div>
                  <h3 className="sl-sp-title bd-no">Location</h3>
                  <div className="pos-map" id="map-canvas">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9476188735366!2d66.953902214479!3d24.933854298453802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ad6bbbc4ced%3A0xcc983efcf8147d56!2sWater%20Pump!5e0!3m2!1sen!2s!4v1589752989500!5m2!1sen!2s"
                      title="SHOP MAP"
                      style={{
                        width: "688px",
                        height: "325px",
                        frameborder: "0",
                        border: "0",
                        allowfullscreen: "",
                        tabindex: "0",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
              {/*<!-- sidebar -->*/}
              <div className="col-lg-4 col-md-7 sidebar">
                <div className="author-card">
                  <div
                    className="author-img set-bg"
                    data-setbg="img/author.jpg"
                    style={{ backgroundImage: `url(${authorImg})` }}
                  ></div>
                  <div className="author-info">
                    <h5>Gina Wesley</h5>
                    <p>Real Estate Agent</p>
                  </div>
                  <div className="author-contact">
                    <p>
                      <i className="fa fa-phone"></i>(567) 666 121 2233
                    </p>
                    <p>
                      <i className="fa fa-envelope"></i>ginawesley26@gmail.com
                    </p>
                  </div>
                </div>
                <div className="contact-form-card">
                  <h5>Do you have any question?</h5>
                  <form>
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Your email" />
                    <textarea placeholder="Your question"></textarea>
                    <button>SEND</button>
                  </form>
                </div>
                <div className="related-properties">
                  <h2>Related Property</h2>
                  <div className="rp-item">
                    <div
                      className="rp-pic set-bg"
                      style={{ backgroundImage: `url(${feature1})` }}
                      data-setbg="img/feature/1.jpg"
                    >
                      <div className="sale-notic">FOR SALE</div>
                    </div>
                    <div className="rp-info">
                      <h5>1963 S Crescent Heights Blvd</h5>
                      <p>
                        <i className="fa fa-map-marker"></i>Los Angeles, CA
                        90034
                      </p>
                    </div>
                    <Link to="#" className="rp-price">
                      $1,200,000
                    </Link>
                  </div>
                  <div className="rp-item">
                    <div
                      className="rp-pic set-bg"
                      style={{ backgroundImage: `url(${feature2})` }}
                      data-setbg="img/feature/2.jpg"
                    >
                      <div className="rent-notic">FOR Rent</div>
                    </div>
                    <div className="rp-info">
                      <h5>17 Sturges Road, Wokingham</h5>
                      <p>
                        <i className="fa fa-map-marker"></i> Newtown, CT 06470
                      </p>
                    </div>
                    <Link to="#" className="rp-price">
                      $2,500/month
                    </Link>
                  </div>
                  <div className="rp-item">
                    <div
                      className="rp-pic set-bg"
                      style={{ backgroundImage: `url(${feature3})` }}
                      data-setbg="img/feature/4.jpg"
                    >
                      <div className="sale-notic">FOR SALE</div>
                    </div>
                    <div className="rp-info">
                      <h5>28 Quaker Ridge Road, Manhasset</h5>
                      <p>
                        <i className="fa fa-map-marker"></i>28 Quaker Ridge
                        Road, Manhasset
                      </p>
                    </div>
                    <Link to="#" className="rp-price">
                      $5,600,000
                    </Link>
                  </div>
                  <div className="rp-item">
                    <div
                      className="rp-pic set-bg"
                      style={{ backgroundImage: `url(${feature4})` }}
                      data-setbg="img/feature/5.jpg"
                    >
                      <div className="rent-notic">FOR Rent</div>
                    </div>
                    <div className="rp-info">
                      <h5>Sofi Berryessa 750 N King Road</h5>
                      <p>
                        <i className="fa fa-map-marker"></i>Sofi Berryessa 750 N
                        King Road
                      </p>
                    </div>
                    <Link to="#" className="rp-price">
                      $1,600/month
                    </Link>
                  </div>
                </div>
              </div>
              {/*<!-- SIDE BAR  end --> */}
            </div>
          </div>
        </section>
        {/*<!-- Page end -->*/}
      </div>
    );
  }
}

export default ProductDetails;
