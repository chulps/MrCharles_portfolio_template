// Resume.js
import React from "react";
import "./resume.css";
import skills from "../HOME/HOME_COMPONENTS/skills.json";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import axios from "axios";

const skillsImages = require.context("../../../../IMG/SKILLS", true);
const printImages = require.context("../../../../IMG/PNGSKILLS", true);

class Resume extends React.Component {
  componentDidMount() {
    axios.get("getUser/chuck").then(data => {
      this.props.setUser(data.data);
    });
  }
  printDocument = async () => {
    document.getElementById("myResume").style.display = "block";
    await new Promise(resolve => {
      this.resume.save();
      setTimeout(() => {
        resolve();
      }, 30);
    });
    document.getElementById("myResume").style.display = "none";
  };

  render() {
    return (
      <div className="resume-page">
        {/* mobile resume */}
        <button
          className="bg-blackTrans m-auto mt30 mb30"
          onClick={this.printDocument}
        >
          Download PDF
        </button>
        <section className="main-resume">
          <div className="one-column md-three-columns lg-gap10">
            <div className="general-info mb20">
              <h4 className="name font-condensed">CHUCK HOWARD</h4>
              <div className="title">Designer + Developer</div>
            </div>

            <div className="contact-info mb20">
              <label>CONTACT</label>

              <div className="website">www.chuck-howard.com</div>
              <div className="linkedIn-url">
                www.linkedin.com/in/chuck-howard/
              </div>
            </div>

            <div className="location-info mb20">
              <label>LOCATION</label>
              <div className="city">Los Angeles,</div>
              <div className="state">California</div>
            </div>
          </div>

          <div className="intro mb20 flex-column whole">
            <label>statement</label>
            I'm a digital product designer, creative director and front-end
            developer. I'm seeking a role where I can use the sum of my talents
            to build apps, brands,software, and websites from top to bottom.
          </div>

          <div className="mb20">
            <label>SKILLS</label>
            <div className="flex-row flex-start" style={{ flexWrap: "wrap" }}>
              {skills.map(element => {
                console.log(element.image);
                return (
                  <div
                    key={element.id}
                    className="text-center m5 flex-column flex-center"
                  >
                    <img
                      height={20}
                      src={skillsImages("./" + element.image)}
                      style={{ opacity: ".5" }}
                      alt=""
                    />
                    <label className="mt10">{element.title}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <label>experience</label>
          <div className="experience mb20">
            {/* begin experience-item */}
            <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">Clicktool</h5>
              <div className="job-title">
                Creative Director/Product Designer
              </div>
              <div className="job-duration">Aug 2018 - Current</div>
            </div>

            {/* begin exp item */}
            <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">BTFL</h5>
              <div className="job-title">Designer</div>
              <div className="job-duration">Mar 2017 - Aug 2018</div>
            </div>

            {/* begin exp item */}
            <div className="experience-item whole one-column md-three-columns md-gap10">
              <h5 className="employer">Sullivan Branding</h5>
              <div className="job-title">Art Director/Graphic Designer</div>
              <div className="job-duration">Mar 2016 - Mar 2017</div>
            </div>
          </div>

          <div className="whole one-column md-two-columns">
            <div className="mb20">
              <label>EDUCATION</label>
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="university-skills">univ. logo</div>
                <div className="flex-column">
                  <h5 className="university-name">University of Memphis</h5>
                  <div className="degree-description">
                    Bachelor degree: graphic design
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info mb20">
              <label>AWARDS</label>
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="awards">award icon</div>
                <div className="flex-column">
                  <h5 className="university-name">Gold Addy 2015</h5>
                  <div className="degree-description">description</div>
                </div>
              </div>
            </div>

            <div className="location-info">
              <label>REFERENCES</label>
              <div className="references-info">
                <h5 className="name">name</h5>
                <div className="relationship">relationship</div>
                <div className="phone-number">phone number</div>
                <div className="email">phone number</div>
              </div>
            </div>
          </div>
        </section>

        {/*            */}
        {/* PDF resume */}
        {/*            */}

        <PDFExport
          paperSize={"Letter"}
          fileName="chuck-howard.pdf"
          title=""
          subject=""
          keywords=""
          ref={r => (this.resume = r)}
        >
          <section id="myResume" className="resume hidden md-block printing">
            <div className="one-column md-three-columns lg-gap10">
              <div className="general-info mb20">
                <h4 className="name font-condensed">CHUCK HOWARD</h4>
                <div className="title">Designer + Developer</div>
              </div>

              <div className="contact-info mb20">
                <label>CONTACT</label>

                <div className="website">www.chuck-howard.com</div>
                <div className="linkedIn-url">
                  www.linkedin.com/in/chuck-howard/
                </div>
              </div>

              <div className="location-info mb20">
                <label>LOCATION</label>
                <div className="city">Los Angeles,</div>
                <div className="state">California</div>
              </div>
            </div>

            <div className="intro mb20 flex-column whole">
              <label>statement</label>
              I'm a digital product designer, creative director and front-end
              developer. I'm seeking a role where I can use the sum of my
              talents to build apps, brands,software, and websites from top to
              bottom.
            </div>

            <div className="mb20">
              <label>SKILLS</label>
              <div className="flex-row flex-start" style={{ flexWrap: "wrap" }}>
                {skills.map(element => {
                  console.log(element.image);
                  return (
                    <div
                      key={element.id}
                      className="text-center m5 flex-column flex-center"
                    >
                      <img
                        height={20}
                        src={printImages(
                          "./" + element.image.replace(".svg", ".png")
                        )}
                        style={{ opacity: ".5" }}
                        alt=""
                      />
                      <label className="mt10">{element.title}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <label>experience</label>
            <div className="experience mb20">
              {/* begin experience-item */}
              <div className="experience-item whole one-column md-three-columns md-gap10">
                <h5 className="employer">Clicktool</h5>
                <div className="job-title">
                  Creative Director/Product Designer
                </div>
                <div className="job-duration">Aug 2018 - Current</div>
              </div>

              {/* begin exp item */}
              <div className="experience-item whole">
                <h5 className="employer">BTFL</h5>
                <div className="job-title">Designer</div>
                <div className="job-duration">Mar 2017 - Aug 2018</div>
              </div>
            </div>

            <div className="whole">
              <div className="mb20">
                <label>EDUCATION</label>
                <div className="education-info flex-row">
                  {/* begin 1 education item */}
                  <div className="university-skills">univ. logo</div>
                  <div className="flex-column">
                    <h5 className="university-name">University of Memphis</h5>
                    <div className="degree-description">
                      BFA: Graphic Design
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info mb20">
                <label>AWARDS</label>
                <div className="education-info flex-row">
                  {/* begin 1 education item */}
                  <div className="university-skills">award icon</div>
                  <div className="flex-column">
                    <h5 className="university-name">Gold Addy 2015</h5>
                    <div className="degree-description">description</div>
                  </div>
                </div>
              </div>

              <div className="location-info">
                <label>REFERENCES</label>
                <div className="references-info">
                  <h5 className="name">name</h5>
                  <div className="relationship">relationship</div>
                  <div className="phone-number">phone number</div>
                  <div className="email">phone number</div>
                </div>
              </div>
            </div>
          </section>
        </PDFExport>
      </div>
    );
  }
}

export default Resume;
