import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./container/HomePage/HomePage";
import Categories from "./container/Categories/Categories";
import AboutUs from "./container/AboutUs/AboutUs";
import ContactUs from "./container/ContactUs/ContactUs";
import ProductDetails from "./container/Categories/ProductDetails/ProductDetails";

import PageNotFound from "./components/UtilityComp/PageNotFound";
import DumpyPage from "./components/UtilityComp/MoreStuff";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const app = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/allListings" exact component={Categories} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route
          path="/singleListing/:listingID"
          exact
          component={ProductDetails}
        />
        <Route path="/MoreStuff" exact component={DumpyPage} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </div>
  );
};

export default app;
