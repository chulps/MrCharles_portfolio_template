// Clicktool.js
import React from "react";
import "./clicktool.css";
import Project from "../../HOME/HOME_COMPONENTS/HomeProjectSection";
import Geometry from "./SVG/ClicktoolLogoGeometry.js";
import Logo from "../../../../../IMG/ClicktoolLogoHorizontal.js";
import Hat from "../../../../../IMG/myHat.png";

class Clicktool extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="clicktool">
        {/* top section */}
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
              make better decisions about where to spend their marketing
              dollars.
            </p>
          </div>
        </section>

        {/* roles section */}
        <section className="relative roles pt30">
          <div
            className="absolute whole flex-end flex-grow"
            style={{ height: "100%" }}
          >
            <img
              className="half"
              src={Hat}
              alt="hat"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="sticky-top pl30 pr30 pb30">
            <h3 className="mb5">MY ROLE:</h3>
            <div className="half one-column lg-two-columns gap30">
              <div>
                <h5>PRODUCT DESIGNER</h5>
                <p>
                  Understand business objectives and architect solutions based
                  on direction from the CEO and user research
                </p>
              </div>

              <div>
                <h5>CREATIVE DIRECTOR</h5>
                <p>
                  Lead the creation of this from top to bottom while
                  collaborating with other designers, developers, and
                  copywriters.
                </p>
              </div>

              <div>
                <h5>Lead UI/UX DESIGNER</h5>
                <p>
                  Create wireframes, prototypes, color schemes, brand guidelines
                  & design systems.
                </p>
              </div>
              <div>
                <h5>FRONT-END DEVELOPER</h5>
                <p>
                  Work closely with other developers to achieve the right look
                  and functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* challenges section */}
        <section className="challenges pt30">
          <div className="sticky-top relative pl30 pr30 pb30">
            <h3 className="mb5">The Challenge</h3>

            <div>
              <h5>BUSINESS OBJECTIVES</h5>
              <p className="whole sm-four-fifths md-half lg-third xl-fourth">
                Create an app where users can track and analyze their digital
                marketing campaigns. The ultimate goal of this platform is to
                one day be a 'one-stop-shop' for digital marketers where users
                can purchase phone numbers, domain names, create landing pages,
                and analyze their sites in order to further optimize their
                marketing efforts.
              </p>
            </div>
          </div>
        </section>

        <section className="relative challenges pt30">
          <div className="sticky-top relative pl30 pr30 pb30">
            <h5>ESTABLISHING THE BRAND</h5>

            <p className="whole sm-four-fifths md-half lg-third xl-fourth">
              This was my first task when I started working here. There were a
              few rules given by the CEO...
              <ul>
                <li>Flat illustration style</li>
                <li>
                  Use #2cb8d2{" "}
                  <div
                    style={{
                      background: "#2cb8d2",
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
            <div className="half m-auto">
              <Logo />
            </div>
          </div>
        </section>

        <section className="challenges pt30">
          <div className="sticky-top relative pl30 pr30 pb30">
            <h5>CREATING A DESIGN SYSTEM</h5>
            <p className="whole sm-four-fifths md-half lg-third xl-fourth">
              This was essential to establish consistency in the design of the
              app across a team of designers and developers. To achieve this we
              used Zeplin to as our source of truth for the design of the app.
              In here I documented the styles for all components. I also wrote a
              customized CSS framework, and collaborated with other developers
              to create a library of React components using Storybook to
              document them.
            </p>
          </div>
        </section>

        <section className="challenges pt30">
          <div className="sticky-top relative pl30 pr30 pb30">
            <h5>THE THING ABOUT SVG...</h5>
            <p className="whole sm-four-fifths md-half lg-third xl-fourth">
              This was essential to establish consistency in the design of the
              app across a team of designers and developers. To achieve this we
              used Zeplin to as our source of truth for the design of the app.
              In here I documented the styles for all components. I also wrote a
              customized CSS framework, and collaborated with other developers
              to create a library of React components using Storybook to
              document them.
            </p>
          </div>
        </section>

        {/* team section */}
        <section className="team p30">
          <div className="sticky-top xl-two-thirds">
            <h3 className="mb5">the team</h3>
            <div className="one-column sm-two-columns md-three-columns lg-four-columns gap30">
              <div>
                <h5>Carlos Cruz</h5>
                <p>CEO</p>
              </div>

              <div>
                <h5>Voranon Chumnansiri</h5>
                <p>Team Leader/Scrum Master/Manager</p>
              </div>

              <div>
                <h5>Elton Hsu</h5>
                <p>Senior Full-stack Developer</p>
              </div>

              <div>
                <h5>William Ha</h5>
                <p>Front-End Developer</p>
              </div>

              <div>
                <h5>Isaac Grey</h5>
                <p>Software Engineer</p>
              </div>

              <div>
                <h5>Jamie Su</h5>
                <p>Back-End Developer</p>
              </div>

              <div>
                <h5>Swarna Katkuri</h5>
                <p>Tester/Quality Analyst</p>
              </div>

              <div>
                <h5>Brittany Dodd</h5>
                <p>Graphic/Web Designer</p>
              </div>

              <div>
                <h5>Jean Lv</h5>
                <p>Graphic/Web Designer</p>
              </div>

              <div>
                <h5>Jacob Droeger</h5>
                <p>Copywriter/Content Creator</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Clicktool;
