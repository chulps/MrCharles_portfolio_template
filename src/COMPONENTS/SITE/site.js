import React from "react";
import "./site.css";
import Home from './SITE_COMPONENTS/HOME/home.js';

class Site extends React.Component {
  // state = {
  //   displaymobileNav: false,
  //   menuText: "Menu"
  // };
  
  render() {
    return (
      <div className="site">
        <Home />
      </div>
    );
  }
}

export default Site;