// ClicktoolTopSection.js
import React from "react";
import Sketchy from "../../../../../../../IMG/DESIGN_BIBLE.png";

class ClicktoolBrandSection extends React.Component {
  render() {
    return (
      <section className="relative brand p30">
        <div className="sticky-top relative">
          <h5>ESTABLISHING THE BRAND</h5>

          <p className="whole sm-four-fifths md-half lg-third xl-fourth">
            This was my first task when I started working here. There were a few
            rules given by the CEO...
            <ul>
              <li>Flat illustration style</li>
              <li>
                Use #2cb8d2{" "}
                <div
                  style={{
                    background: "var(--cyan0)",
                    height: "1em",
                    width: "1em",
                    display: "inline-block",
                    borderRadius: "0.5em"
                  }}
                ></div>
                &nbsp; as the main color for everything
              </li>
              <li>Animate everything!</li>
              <li>Squared buttons only!</li>
              <li>Lots of lines</li>
            </ul>
          </p>
          <div className="whole md-half m-auto flex-center lg-hidden">
            <img className="whole" src={Sketchy} alt="" />
          </div>
        </div>
        <div className="half lg-third m-auto flex-center hidden lg-flex">
          <img className="whole" src={Sketchy} alt="" />
        </div>
      </section>
    );
  }
}

export default ClicktoolBrandSection;