import React from "react";
import {Link} from "react-router-dom";

import dumyImg from "../../../Assets/img/feature/2.jpg";
const singleItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="feature-item">
        <div className="feature-pic set-bg" style={{ backgroundImage: `url(${dumyImg})` }}>
          <div className="sale-notic">FOR SALE</div>
        </div>
        <div className="feature-text">
          <div className="text-center feature-title">
            <h5>1963 S Crescent Heights Blvd</h5>
            <p>
              <i className="fa fa-map-marker"></i> Los Angeles, CA 90034
            </p>
          </div>
          <div className="room-info-warp">
            <div className="room-info">
              <div className="rf-left">
                <p>
                  <i className="fa fa-th-large"></i> 800 Square foot
                </p>
                <p>
                  <i className="fa fa-bed"></i> 10 Bedrooms
                </p>
              </div>
              <div className="rf-right">
                <p>
                  <i className="fa fa-car"></i> 2 Garages
                </p>
                <p>
                  <i className="fa fa-bath"></i> 6 Bathrooms
                </p>
              </div>
            </div>
            <div className="room-info">
              <div className="rf-left">
                <p>
                  <i className="fa fa-user"></i> Tony Holland
                </p>
              </div>
              <div className="rf-right">
                <p>
                  <i className="fa fa-clock-o"></i> 1 days ago
                </p>
              </div>
            </div>
          </div>
          <Link to="#" className="room-price">
            $1,200,000
          </Link>
        </div>
      </div>
    </div>
  );
};

export default singleItem;
