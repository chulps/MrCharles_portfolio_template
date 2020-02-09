// ClicktoolSVGSection.js
import React from "react";
import Hat from "../../../../../../../IMG/myHat.png";
import NonRedirectTracking from "../CLICKTOOL_COMPONENTS/SVG/NonRedirectTracking.js";
import ClicktoolCity from "../../../../HOME/HOME_COMPONENTS/ClicktoolCity.js";
import MagnifyingGlass from "../CLICKTOOL_COMPONENTS/SVG/magnifying_glass_animation.svg";
import OnePlace from "../CLICKTOOL_COMPONENTS/SVG/ONE_PLACE.svg";
import RotateLanders from "../CLICKTOOL_COMPONENTS/SVG/RotateLandingPages.svg";

class ClicktoolSVGSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section className="clicktool-svg section p30">
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
              Can be made into reusable components that take in props and state
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
          <div className="rounded shadow-in p10 md-p30 flex-center flex-column mb10">
            <ClicktoolCity />
            <label className="mt30">clicktool_city.svg</label>
          </div>
          <div className="one-column lg-two-columns gap10">
            <div className="rounded shadow-in p10 md-p30 flex-center flex-column flex">
              <NonRedirectTracking />
              <label className="mt30">clicktool_city.svg</label>
            </div>
            <div className="rounded shadow-in p10 md-p30 flex-center flex-column">
              <img src={MagnifyingGlass} alt="" />
              <label className="mt30">magnifying_glass.svg</label>
            </div>
            <div className="rounded shadow-in p10 md-p30 flex-center flex-column">
              <img src={OnePlace} alt="" />
              <label className="mt30">one-place.svg</label>
            </div>
            <div className="rounded shadow-in p10 md-p30 flex-center flex-column">
              <img src={RotateLanders} alt="" />
              <label className="mt30">clicktool_city.svg</label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClicktoolSVGSection;
