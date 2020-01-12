// Site.js

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NAV/Nav.js";
import Footer from "../FOOTER/Footer.js";
import React from "react";
import "./site.css";
import Home from './SITE_COMPONENTS/HOME/Home.js';
import About from './SITE_COMPONENTS/ABOUT/About.js';

class Site extends React.Component {
  // state = {
  //   displaymobileNav: false,
  //   menuText: "Menu"
  // };
  
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <button className="contact-button">contact button</button>
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default Site;
