// Site.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../NAV/Nav.js";
import Footer from "../FOOTER/Footer.js";
import "./site.css";
import Home from "./SITE_COMPONENTS/HOME/Home.js";
import Register from "./SITE_COMPONENTS/REGISTER/Register.js";
import Resume from "./SITE_COMPONENTS/RESUME/Resume.js";
import Clicktool from "./SITE_COMPONENTS/PROJECTS/PROJECTS_COMPONENTS/CLICKTOOL/Clicktool.js";

class Site extends React.Component {
  componentDidMount() {
    let viewportMeta = document.createElement("meta");
    viewportMeta.setAttribute("name", "viewport");
    viewportMeta.setAttribute(
      "content",
      "width=device-width, initial-scale=1, shrink-to-fit=no"
    );
    document.getElementsByTagName("head")[0].appendChild(viewportMeta);
  }

  setUser = user => {
    this.setState(
      {
        profile: user
      },
      () => {
        if (!this.state.profile) {
          this.setState({
            userNotFound: true
          });
        }
      }
    );
  };

  render() {
    return (
      <Router>
        <div className="site">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/Resume"
              render={() => <Resume setUser={this.setUser} />}
            />
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
