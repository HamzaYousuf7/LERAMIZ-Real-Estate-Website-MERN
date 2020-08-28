import React from "react";
import { Link } from "react-router-dom";

import SingleItem from "../Categories/SingleItem/SingleItem";
const categories = () => {
  return (
    <div>
     

      {/** <!-- page Start --> */}
      <section className="page-section categories-page">
        <div className="container">
          <div className="row">
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </div>
          {/** PAGINATIONSTART */}
          <div className="site-pagination">
            <span>1</span>
            <Link to="/MoreStuff">2</Link>
            <Link to="/MoreStuff">3</Link>
            <Link to="/MoreStuff">
              <i className="fa fa-angle-right"></i>
            </Link>
          </div>
          {/** PAGINATION END */}
        </div>
      </section>
      {/** <!-- page end --> */}
    </div>
  );
};

export default categories;
