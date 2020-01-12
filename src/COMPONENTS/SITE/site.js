import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NAV/nav.js";
import Footer from "../FOOTER/footer.js";
import React from "react";
import "./site.css";
import Home from './SITE_COMPONENTS/HOME/home.js';
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
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default Site;
