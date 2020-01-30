// ClicktoolTopSection.js
import React from "react";
import Geometry from "./SVG/ClicktoolLogoGeometry.js";

class ClicktoolTopSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section className="relative pb30">
        <div className="geometry absolute flex-center whole md-p30">
          <Geometry />
        </div>
        <div className="sticky-top pl30 pr30 pb30">
          <h3 className="mb5">Project:</h3>
          <h5>Clicktool</h5>
          <p className="whole sm-two-thirds md-half lg-third xl-fourth">
            Clicktool is a marketing analytics app designed for digital
            marketers. Using our app, users can track clicks, phone calls,
            conversions, and many other types of metrics that help marketers
            make better decisions about where to spend their marketing dollars.
          </p>
        </div>
      </section>
    );
  }
}

export default ClicktoolTopSection;
