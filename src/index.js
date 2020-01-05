import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./COMPONENTS/NAV/nav.js";
import Site from "./COMPONENTS/SITE/site.js";
import Footer from "./COMPONENTS/FOOTER/./footer.js";
// import global styles
import "./GLOBAL_STYLES/styles.css";
import "./GLOBAL_STYLES/responsive.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Site} />
        </Switch>
        <Navbar />
        <Footer/>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);