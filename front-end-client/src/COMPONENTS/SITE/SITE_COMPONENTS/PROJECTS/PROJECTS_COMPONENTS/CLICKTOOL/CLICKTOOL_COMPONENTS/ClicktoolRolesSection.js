// ClicktoolTopSection.js
import React from "react";
import Hat from "../../../../../../../IMG/myHat.png";

class ClicktoolRolesSection extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <section className="relative roles pt30 mt30">
        <div className="whole flex-start flex-grow" style={{ height: "100%" }}>
          <div className="sticky-top half pl30 pr30 pb30 lg-ml-auto flex-column">
            <img
              className="whole"
              src={Hat}
              alt="hat"
              style={{ objectFit: "contain" }}
            />
            <label className="text-center">(actual hat)</label>
          </div>

          <div className="half lg-fourth flex-column pr20 xl-p30">
            <h3 className="mb5">MY ROLE:</h3>
            <div>
              <h5>PRODUCT DESIGNER</h5>
              <p>
                Understand business objectives and architect solutions based on
                direction from the CEO and user research
              </p>
            </div>

            <div>
              <h5>CREATIVE DIRECTOR</h5>
              <p>
                Lead the creation of this app from top to bottom while
                collaborating with other designers, developers, and copywriters.
              </p>
            </div>

            <div>
              <h5>Lead UI/UX DESIGNER</h5>
              <p>
                Create wireframes, prototypes, color schemes, brand guidelines &
                design systems.
              </p>
            </div>
            <div>
              <h5>FRONT-END DEVELOPER</h5>
              <p>
                Create a customized responsive CSS framework and work closely
                with other developers to achieve the right look and
                functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClicktoolRolesSection;
