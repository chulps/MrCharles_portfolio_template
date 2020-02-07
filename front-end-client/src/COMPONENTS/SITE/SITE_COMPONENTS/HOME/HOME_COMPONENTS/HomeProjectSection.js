// HomeProjectSection.js
import React from "react";
import "./homeprojectsection.css";
import Laptop from "../../../../../IMG/laptop.png";
import Clicktool from "../../../../../VIDEO/clicktool_dashboard.mp4";
import ClicktoolLogo from "../../../../../IMG/ClicktoolLogoHorizontal";
import ClicktoolCity from "./ClicktoolCity";

class HomeProjectsSection extends React.Component {
  render() {
    return (
      <div className="whole flex-center">
        {/* project section */}

        <div className="absolute whole md-two-thirds flex-column flex-center">
          <div
            className="whole absolute"
            style={{ transform: "translateY(-25%)" }}
          >
            <ClicktoolCity />
          </div>
          <div
            className="two-thirds mb30 relative"
            style={{
              transform: "translateY(-200%)"
            }}
          >
            <ClicktoolLogo />
          </div>
        </div>
        <div className="laptop-project-container flex-center whole md-half relative">
          <img className="whole absolute" src={Laptop} />
          <div className="relative laptop-project-video-container">
            <video
              className="laptop-project-video"
              controls
              loop
              src={Clicktool}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeProjectsSection;
