import React from "react";
import { Link } from "react-router-dom";
//IMAGES IMPORTS
import mainAboutImg from "../../Assets/img/about.jpg";
import teamParten1 from "../../Assets/img/team/1.jpg";
import teamParten2 from "../../Assets/img/team/2.jpg";
import teamParten3 from "../../Assets/img/team/3.jpg";
import teamParten4 from "../../Assets/img/team/4.jpg";
const aboutUs = () => {
  return (
    <div>
      {/**<!-- page Start--> */}
      <section className="page-section">
        <div className="container">
          <img className="mb-5" src={mainAboutImg} alt="" />
          <div className="row about-text">
            <div className="col-xl-6 about-text-left">
              <h5>ABOUT US</h5>
              <p>
                Lorem ipsum dolor sitdoni amet, consectetur donald adipis elite
                for. Vivamus interdum ultrices augue. Aenean dos cursus lania.
                Duis et fringilla leonardo. Mauris mattis sem, debut curus risus
                viverra sed. Vestibul vitae velit felis. Nulla placerat orci
                ante casat. Pellentesque ac placerat . Cras urna duis, ornare
                cursus purus.
              </p>
              <p>
                Ut vel auctor ligula. Aenean nec dui pretium, commodo ligula sit
                amet, faucibus purus. Mauris at dolor imperdiet, aliquet nisi
                non, vulputate est. Maecenas feugiat sagittis lacus. Mauris
                dinissim consequat tellus id congue. Mauris bendum mollis
                viverra. Vestibulum in leo placerat sollicitudin varius.
              </p>
            </div>
            <div className="col-xl-6 about-text-right">
              <h5>OUR QUALITY</h5>
              <p>
                Donec enim ipsum porta justo integer at velna vitae auctor
                integer congue magna at risus auctor purus unt pretium ligula
                rutrum integer sapien ultrice ligula luctus undo magna risus
              </p>
              <ul className="about-list">
                <li>
                  <i className="fa fa-check-circle-o"></i>Lorem ipsum dolor
                  sitdoni amet, consectetur dont adipis elite vivamus interdum.
                </li>
                <li>
                  <i className="fa fa-check-circle-o"></i>Integer pulvinar ante
                  nulla, ac fermentum ex congue id vestibulum ensectetur.{" "}
                </li>
                <li>
                  <i className="fa fa-check-circle-o"></i>Proin blandit nibh in
                  quam semper iaculis lorem ipsum dolor salama ender.
                </li>
                <li>
                  <i className="fa fa-check-circle-o"></i>Mauris at dolor
                  imperdiet, aliquet nisi non, vulputate est sit amet.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/**<!-- Team section --> */}
        <section className="team-section spad pb-0">
          <div className="container">
            <div className="section-title text-center">
              <h3>OUR AGENTS</h3>
              <p>Our directory of real estate agents who can help you</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team-member">
                  <div className="member-pic">
                    <img src={teamParten1} alt="#" />
                    <div className="member-social">
                      <Link to="/MoreStuff">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h5>Tony Holland</h5>
                    <span>Real Estate Agent</span>
                    <div className="member-contact">
                      <p>
                        <i className="fa fa-phone"></i>(567) 666 121 2288
                      </p>
                      <p>
                        <i className="fa fa-envelope"></i>tonyholland@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-member">
                  <div className="member-pic">
                    <img src={teamParten2} alt="#" />
                    <div className="member-social">
                      <Link to="/MoreStuff">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h5>Sasha Gordon</h5>
                    <span>Researcher</span>
                    <div className="member-contact">
                      <p>
                        <i className="fa fa-phone"></i>(567) 666 121 2243
                      </p>
                      <p>
                        <i className="fa fa-envelope"></i>sashagordon@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-member">
                  <div className="member-pic">
                    <img src={teamParten3} alt="#" />
                    <div className="member-social">
                      <Link to="/MoreStuff">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h5>Nicky Butt</h5>
                    <span>Nicky Butt</span>
                    <div className="member-contact">
                      <p>
                        <i className="fa fa-phone"></i>(567) 666 121 2255
                      </p>
                      <p>
                        <i className="fa fa-envelope"></i>nickybutt79@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-member">
                  <div className="member-pic">
                    <img src={teamParten4} alt="#" />
                    <div className="member-social">
                      <Link to="/MoreStuff">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link to="/MoreStuff">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="member-info">
                    <h5>Gina Wesley</h5>
                    <span>Real Estate Agent</span>
                    <div className="member-contact">
                      <p>
                        <i className="fa fa-phone"></i>(567) 666 121 2288
                      </p>
                      <p>
                        <i className="fa fa-envelope"></i>ginawesley@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**<!-- Team section end--> */}
      </section>
      {/**<!-- page END--> */}
    </div>
  );
};

export default aboutUs;
