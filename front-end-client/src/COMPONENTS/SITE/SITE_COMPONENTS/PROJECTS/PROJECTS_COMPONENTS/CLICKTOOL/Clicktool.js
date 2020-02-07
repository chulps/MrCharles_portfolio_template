// Clicktool.js
import React from "react";
import "./clicktool.css";
import ClicktoolTopSection from "./CLICKTOOL_COMPONENTS/ClicktoolTopSection.js";
import ClicktoolRolesSection from "./CLICKTOOL_COMPONENTS/ClicktoolRolesSection.js";
import ClicktoolChallengesSection from "./CLICKTOOL_COMPONENTS/ClicktoolChallengesSection.js";
import ClicktoolBrandSection from "./CLICKTOOL_COMPONENTS/ClicktoolBrandSection.js";
import ClicktoolDesignSystemSection from "./CLICKTOOL_COMPONENTS/ClicktoolDesignSystemSection.js";
import ClicktoolTeamSection from "./CLICKTOOL_COMPONENTS/ClicktoolTeamSection.js";
import NonRedirectTracking from "./CLICKTOOL_COMPONENTS/SVG/NonRedirectTracking.js";
import ClicktoolCity from "../../../HOME/HOME_COMPONENTS/ClicktoolCity.js";
import MagnifyingGlass from "./CLICKTOOL_COMPONENTS/SVG/magnifying_glass_animation.svg";
import OnePlace from "./CLICKTOOL_COMPONENTS/SVG/ONE_PLACE.svg";
import RotateLanders from "./CLICKTOOL_COMPONENTS/SVG/RotateLandingPages.svg";
import Laptop from "../../../HOME/HOME_COMPONENTS/HomeProjectSection.js";

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
        <section className="challenges p30">
          <div className="relative md-sticky-top">
            <h5>THE THING ABOUT SVG...</h5>
            <p className="whole sm-four-fifths md-half lg-third xl-fourth">
              Since EVERYTHING needs to be animated and flat, that means we will
              need images that are:
            </p>
            <ul className="whole sm-four-fifths md-half lg-third xl-fourth">
              <li>Programable</li>
              <li>Scalable</li>
              <li>Interactive</li>
              <li>Performant</li>
              <li>
                Can be made into reusable components that take in props and
                state
              </li>
              <li>Look nice!</li>
              <li>PLUS! We can pass data through these things!!!</li>
            </ul>
            <p className="whole sm-four-fifths md-half lg-third xl-fourth">
              Seems like the right choice for this project so I became an expert
              in SVG animation!
            </p>
          </div>

          <div className="whole md-half lg-two-thirds xl-three-fourths ml-auto md-pl30">
            <div className="rounded shadow-out p10 md-p30 flex-center flex-column mb10">
              <ClicktoolCity />
              <label className="mt30">clicktool_city.svg</label>
            </div>
            <div className="one-column lg-two-columns gap10">
              <div className="rounded shadow-out p10 md-p30 flex-center flex-column flex">
                <NonRedirectTracking />
                <label className="mt30">clicktool_city.svg</label>
              </div>
              <div className="rounded shadow-out p10 md-p30 flex-center flex-column">
                <img src={MagnifyingGlass} alt="" />
                <label className="mt30">magnifying_glass.svg</label>
              </div>
              <div className="rounded shadow-out p10 md-p30 flex-center flex-column">
                <img src={OnePlace} alt="" />
                <label className="mt30">one-place.svg</label>
              </div>
              <div className="rounded shadow-out p10 md-p30 flex-center flex-column">
                <img src={RotateLanders} alt="" />
                <label className="mt30">clicktool_city.svg</label>
              </div>
            </div>
          </div>
        </section>
        <section className="p30 flex-center flex-column">
          <div className="whole flex-center">
            <Laptop />
          </div>
          <a href="https://clicktool.com/">
            <button target="_blank" className="visit-clicktool">
              See it in action
            </button>
          </a>
        </section>

        {/* team section */}
        <ClicktoolTeamSection />
      </div>
    );
  }
}

export default Clicktool;
