import React from "react";


import contactImg from "../../Assets/img/contact.jpg";

const contactUs = () => {
  return (
    <div>
      {/**  <!-- page --> */}
      <section className="page-section blog-page">
        <div className="container">
          <div id="map-canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9476188735366!2d66.953902214479!3d24.933854298453802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ad6bbbc4ced%3A0xcc983efcf8147d56!2sWater%20Pump!5e0!3m2!1sen!2s!4v1589752989500!5m2!1sen!2s"
              title="SHOP MAP"
              style={{
                width: "1180px",
                height: "450px",
                frameborder: "0",
                border: "0",
                allowfullscreen: "",
                tabindex: "0",
              }}
            ></iframe>
          </div>
          <div className="contact-info-warp">
            <p>
              <i className="fa fa-map-marker"></i>3711-2880 Nulla St, Mankato,
              Mississippi
            </p>
            <p>
              <i className="fa fa-envelope"></i>info.estateWin@gmail.com
            </p>
            <p>
              <i className="fa fa-phone"></i>(+92) 363 503 012
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src={contactImg} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="contact-right">
                <div className="section-title">
                  <h3>Get in touch</h3>
                  <p>
                    Browse houses and flats for sale and to rent in your area
                  </p>
                </div>
                <form className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Your email" />
                    </div>
                    <div className="col-md-12">
                      <textarea placeholder="Your message"></textarea>
                      <button className="site-btn">SUMMIT NOW</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** <!-- page end -->*/}
    </div>
  );
};

export default contactUs;
