// about.js
import React from "react";
import "./about.css";

class About extends React.Component {
  render() {

    console.log(window.location.href);

    return (
      <div className="about">
        
        {/* mobile resume */}
        <section className="mobileResume md-hidden pr30 pb30 pl30">
        <div className="flex-column flex-space-between">
            <div className="general-info mb20">
              <h4 className="name">CHUCK HOWARD</h4>
              <div className="title">Designer + Developer</div>
            </div>

            <div className="contact-info mb20">
                <label>CONTACT</label> 
                <div className="email">chuckoward@gmail.com</div>
                <div className="phone">+1 (901) 275-66428</div>
                <div className="website">www.chuck-howard.com</div>
                <div className="linkedIn-url">www.linkedin.com/in/chuck-howard/</div>
            </div>

            <div className="location-info mb20">
              <label>LOCATION</label>
                <div className="city">Los Angeles</div>
                <div className="state">California</div>
            </div>
          </div>

          <div className="intro mb20">
            Hello, I'm Chuck, I'm a designer, developer, and generally very handy when you're trying to make something;
            Especially if you're making an app! I'm looking for a new role where I lead the design of digital products from top to bottom.
          </div>
          
          <div className="mb20">
            <label>SKILLS</label>
            <div className="skills-section">
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
              {/* map skills logos here from the skills folder*/}
            </div>
          </div>

          <div className="experience mb20">
            <label>experience</label>

            {/* begin experience-item */}
            <div className="experience-item whole">
              <h5 className="employer">Clicktool</h5>
              <div className="job-title">Creative Director/Product Designer</div>
              <div className="job-duration">Aug 2018 - Current</div>
            </div>
          </div>

          <div className="whole">     
            <div className="mb20">
              <label>EDUCATION</label> 
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="university-logo">univ. logo</div>
                <div className="flex-column">
                  <h5 className="university-name">University of Memphis</h5>
                  <div className="degree-description">Bachelor degree: graphic design</div>
                </div>
              </div>
            </div>

            <div className="contact-info mb20">
              <label>AWARDS</label> 
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="university-logo">award icon</div>
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

        {/* desktop resume */}
        <section className="resume hidden md-block">
          
          <div className="whole flex-row flex-space-between">
            <div className="general-info">
              <h4 className="name">CHUCK HOWARD</h4>
              <div className="title">Designer + Developer</div>
            </div>

            <div className="contact-info">
                <label>CONTACT</label> 
                <div className="email">chuckoward@gmail.com</div>
                <div className="phone">+1 (901) 275-66428</div>
                <div className="website">www.chuck-howard.com</div>
                <div className="linkedIn-url">www.linkedin.com/in/chuck-howard/</div>
            </div>

            <div className="location-info">
              <label>LOCATION</label>
                <div className="city">Los Angeles</div>
                <div className="state">California</div>
            </div>
          </div>

          <div className="intro mt20 mb20">
            Hello, I'm Chuck, I'm a designer, developer, and generally very handy when you're trying to make something;
            Especially if you're making an app! I'm looking for a new role where I lead the design of digital products from top to bottom.
          </div>
          
          <div className="mb20">
            <label>SKILLS</label>
            <div className="skills-section">
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
            <div className="skill flex-center">skill</div>
              {/* map skills logos here from the skills folder*/}
            </div>
          </div>

          <div className="experience mb20">
            <label>experience</label>

            {/* begin experience-item */}
            <div className="experience-item whole three-columns gap20">
              <div className="employer">Clicktool</div>
              <div className="job-title">Creative Director/Product Designer</div>
              <div className="job-duration">Aug 2018 - Current</div>
            </div>
          </div>

          <div className="whole three-columns gap20">
            
            <div>
              <label>EDUCATION</label> 
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="university-logo">university logo</div>
                <div className="flex-column">
                  <h5 className="university-name">University of Memphis</h5>
                  <div className="degree-description">Bachelor degree: graphic design</div>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <label>AWARDS</label> 
              <div className="education-info flex-row">
                {/* begin 1 education item */}
                <div className="university-logo">award icon</div>
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
      </div>
    );
  }
}

export default About;
