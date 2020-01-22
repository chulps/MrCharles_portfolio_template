// Clicktool.js
import React from "react";
import './clicktool.css'
import Geometry from './SVG/ClicktoolLogoGeometry.js'
import Logo from '../../../../../IMG/ClicktoolLogoHorizontal.js'

class Clicktool extends React.Component {
    // state = {
    //   displaymobileNav: false,
    //   menuText: "Menu"
    // };

    componentDidMount(){
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    
    render() {
      return (
          <div className="clicktool">
            
            {/* top section */}
            <section className="relative">
                
                <div className="geometry absolute flex-center whole md-p30">
                    <Geometry />
                </div>

                <div className="sticky-top relative pl30 pr30 pb30">
                    <h6 className="mb10">Project:</h6>
                    <h5>Clicktool</h5>
                    <p className="whole sm-two-thirds md-half lg-third xl-fourth">
                        Clicktool is a marketing analytics app designed for digital marketers. Using our app, users can track clicks, phone calls, conversions, and many other types of metrics that help marketers make better decisions about where to spend their marketing dollars.                        
                    </p>
                </div>

            </section>
            
            {/* roles section */}
            <section className="roles pt30">
                <div className="sticky-top pl30 pr30 pb30">
                    <h6 className="mb10">MY ROLES FOR THIS PROJECT:</h6>
                    <div className="whole sm-half md-two-thirds one-column lg-four-columns gap10">
                        <div>
                            <h5>PRODUCT DESIGNER</h5>
                            <p>Understand business objectives and architect solutions based on direction from the CEO and user research</p>
                        </div>

                        <div>
                            <h5>CREATIVE DIRECTOR</h5>
                            <p>Lead the creation of this from top to bottom while collaborating with other designers, developers, and copywriters.</p>
                        </div>

                        <div>
                            <h5>UI/UX DESIGNER</h5>
                            <p>Create wireframes, prototypes, color schemes, brand guidelines & design systems.</p>
                        </div>
                        <div>
                            <h5>FRONT-END DEVELOPER</h5>
                            <p>Work closely with other developers to achieve the right look and functionality.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* team section */}
            <section className="team p30">
                <div className="sticky-top xl-two-thirds">
                    
                    <h6 className="mb10">the team</h6>
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