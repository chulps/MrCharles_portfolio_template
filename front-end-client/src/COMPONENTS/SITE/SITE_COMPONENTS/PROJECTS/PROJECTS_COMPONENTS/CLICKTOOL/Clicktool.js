// Clicktool.js
import React from "react";
import "./clicktool.css";
import ClicktoolTopSection from "./CLICKTOOL_COMPONENTS/ClicktoolTopSection.js";
import ClicktoolRolesSection from "./CLICKTOOL_COMPONENTS/ClicktoolRolesSection.js";
import ClicktoolChallengesSection from "./CLICKTOOL_COMPONENTS/ClicktoolChallengesSection.js";
import ClicktoolBrandSection from "./CLICKTOOL_COMPONENTS/ClicktoolBrandSection.js";
import ClicktoolTeamSection from "./CLICKTOOL_COMPONENTS/ClicktoolTeamSection.js";
import Geometry from "./CLICKTOOL_COMPONENTS/SVG/ClicktoolLogoGeometry.js";
import LogoHorizontal from "../../../../../../IMG/ClicktoolLogoHorizontal.js";
import LogoStacked from "../../../../../../IMG/ClictoolLogoStacked.js";
import LogoMark from "../../../../../../IMG/ClicktoolLogoMark.js";

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

        <section className="design-system p30">
          <div className="sticky-top relative">
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
          <div className="whole md-half lg-two-thirds ml-auto">
            <div className="logo">
              <div className="shadow-out rounded p10 flex-center flex-column">
                <Geometry />
                <label className="mt30">CONTRUCTION_GEOMETRY.AI</label>
              </div>
              <div className="one-column lg-three-columns gap10 mt10">
                <div className="rounded shadow-out p10 flex-center flex-column">
                  <LogoHorizontal />
                  <label className="mt30">HORIZONTAL_LOCKUP.SVG</label>
                </div>
                <div className="rounded shadow-out p10 flex-center flex-column">
                  <LogoMark />
                  <label className="mt30">MARK.SVG</label>
                </div>
                <div className="rounded shadow-out p10 flex-center flex-column">
                  <LogoStacked />
                  <label className="mt30">VERTICAL_LOCKUP.SVG</label>
                </div>
              </div>
            </div>
            <div className="fonts">
              Helvetica Neue Regular & Helvetica Neue Condensed Bold &
              Antarctican Mono
            </div>

            <label className="mt30">colors</label>

            <div>
              {/* begin black */}
              <div className="rounded shadow-out flex-start flex-row mb10">
                <div className="colors flex-row flex-start whole">
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--black)" }}
                  >
                    <label>"black"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey1)" }}
                  >
                    <label>"grey1"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey2)" }}
                  >
                    <label>"grey2"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey3)" }}
                  >
                    <label>"grey3"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey4)" }}
                  >
                    <label>"grey4"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey5)" }}
                  >
                    <label>"grey5"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey6)" }}
                  >
                    <label>"grey6"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey7)" }}
                  >
                    <label>"grey7"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--grey8)" }}
                  >
                    <label>"grey8"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--white" }}
                  >
                    <label>"white"</label>
                  </div>
                </div>
              </div>
              {/* end black */}

              {/* begin navy */}
              <div className="rounded shadow-out flex-start flex-row mb10">
                <div className="colors flex-row flex-start whole">
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navyD" }}
                  >
                    <label>"navyD"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navyC" }}
                  >
                    <label>"navyC"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navyB" }}
                  >
                    <label>"navyB"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navyA" }}
                  >
                    <label>"navyA"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navy0" }}
                  >
                    <label>"navy0"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navy1" }}
                  >
                    <label>"navy1"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navy2" }}
                  >
                    <label>"navy2"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navy3" }}
                  >
                    <label>"navy3"</label>
                  </div>

                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--navy4" }}
                  >
                    <label>"navy4"</label>
                  </div>
                </div>
              </div>
              {/* end navy */}

              {/* begin cyan */}
              <div className="rounded shadow-out flex-start flex-row mb10">
                <div className="colors flex-row flex-start whole">
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyanD" }}
                  >
                    <label>"cyanD"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyanC" }}
                  >
                    <label>"cyanC"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyanB" }}
                  >
                    <label>"cyan0"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyanA" }}
                  >
                    <label>"cyan0"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyan0" }}
                  >
                    <label>"cyan0"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyan1" }}
                  >
                    <label>"cyan1"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyan2" }}
                  >
                    <label>"cyan2"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyan3" }}
                  >
                    <label>"cyan3"</label>
                  </div>
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyan4" }}
                  >
                    <label>"cyan4"</label>
                  </div>{" "}
                  <div
                    className="clicktool-color rounded shadow out flex-center"
                    style={{ background: "var(--cyan5" }}
                  >
                    <label>"cyan5"</label>
                  </div>
                </div>
              </div>
              {/* end cyan */}
            </div>
            <div className="illustrations">illustrations</div>
            <div className="components">components</div>
            <div className="tools">design tools</div>
          </div>
        </section>

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
              <li>Performant</li>
              <li>Reusable</li>
              <li>Looks nice!</li>
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
