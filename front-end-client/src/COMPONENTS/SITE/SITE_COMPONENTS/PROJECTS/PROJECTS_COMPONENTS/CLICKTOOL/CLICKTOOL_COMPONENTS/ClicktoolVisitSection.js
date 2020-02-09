// ClicktoolVisitSection.js
import React from "react";
import Laptop from "../../../../HOME/HOME_COMPONENTS/HomeProjectSection.js";

class ClicktoolVisitSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section
        className="clicktool-visit-section p30 flex-center flex-column"
        style={{ minHeight: "130vh" }}
      >
        <div className="whole flex-center">
          <Laptop />
        </div>
        <a href="https://clicktool.com/">
          <button target="_blank" className="visit-clicktool">
            See it in action
          </button>
        </a>
      </section>
    );
  }
}

export default ClicktoolVisitSection;
