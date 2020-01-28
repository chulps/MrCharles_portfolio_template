// Site.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NAV/Nav.js";
import Footer from "../FOOTER/Footer.js";
import "./site.css";
import Home from "./SITE_COMPONENTS/HOME/Home.js";
import Register from "./SITE_COMPONENTS/REGISTER/Register.js";
import Resume from "./SITE_COMPONENTS/RESUME/Resume.js";
import Clicktool from "./SITE_COMPONENTS/PROJECTS/PROJECTS_COMPONENTS/Clicktool.js";

class Site extends React.Component {
  // state = {
  //   displaymobileNav: false,
  //   menuText: "Menu"
  // };

  render() {
    return (
      <Router>
        <div className="site">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/projects/clicktool" component={Clicktool} />
          </Switch>
          <Navbar />
          <a className="lg-hidden" href="mailto:chuckoward@gmail.com">
            <button className="contact-button m0">contact</button>
          </a>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Site;
