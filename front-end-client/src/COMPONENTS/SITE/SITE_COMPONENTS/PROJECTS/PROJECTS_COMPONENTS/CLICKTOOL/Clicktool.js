// Clicktool.js
import React from "react";
import "./clicktool.css";
import ClicktoolTopSection from "./CLICKTOOL_COMPONENTS/ClicktoolTopSection.js";
import ClicktoolRolesSection from "./CLICKTOOL_COMPONENTS/ClicktoolRolesSection.js";
import ClicktoolChallengesSection from "./CLICKTOOL_COMPONENTS/ClicktoolChallengesSection.js";
import ClicktoolBrandSection from "./CLICKTOOL_COMPONENTS/ClicktoolBrandSection.js";
import ClicktoolDesignSystemSection from "./CLICKTOOL_COMPONENTS/ClicktoolDesignSystemSection.js";
import ClicktoolTeamSection from "./CLICKTOOL_COMPONENTS/ClicktoolTeamSection.js";

class Clicktool extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="clicktool">
        {/* top section */}
        <ClicktoolTopSection />

        {/* roles section */}
        <ClicktoolRolesSection />

        {/* challenges section */}
        <ClicktoolChallengesSection />

        {/* brand section  */}
        <ClicktoolBrandSection />

        {/* design system section */}
        <ClicktoolDesignSystemSection />
        <section className="challenges pt30">
          <div className="sticky-top relative pl30 pr30 pb30">
            <h5>THE THING ABOUT SVG...</h5>
            <p className="whole sm-four-fifths md-half lg-third xl-fourth">
              Since EVERYTHING needs to be animated, and it's all flat
              illustration style, that means we will need images that are:
            </p>
            <ul>
              <li>Programable</li>
              <li>Scalable</li>
              <li>Interactive</li>
              <li>Performant</li>
              <li>Can be made into reusable components</li>
              <li>Look nice!</li>
              <li>PLUS! We can pass data through these things!!!</li>
            </ul>
          </div>
        </section>

        {/* team section */}
        <ClicktoolTeamSection />
      </div>
    );
  }
}

export default Clicktool;
