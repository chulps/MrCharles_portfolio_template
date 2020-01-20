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
    
    render() {
      return (
          <div className="clicktool">
            <section className="flex-center">
                <div className="geometry m-auto absolute" style={{width: '100vh'}}>
                    <Geometry />
                </div>
                <div>

                </div>
                <p className="relative three-fourths md-half lg-third">"Since August of 2018 I've been working at Clicktool. Originally I was hired as an illustrator working with two other developers. I eventually became Creative Director & Lead Product Designer."</p>
            </section>
            <section>
                something
            </section>
          </div>
      );
    }
  }
  
  export default Clicktool;