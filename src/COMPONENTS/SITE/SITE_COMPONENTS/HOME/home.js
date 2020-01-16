// Home.js
import React from "react";
import "./home.css";
import Laptop from '../../../../IMG/laptop.png'

// just change the name 'chuck' in this import to make it be you instead
import Me from '../../../../IMG/chuck.png'
import Wavy from './HOME_COMPONENTS/Wavy.js'
import Clicktool from '../../../../VIDEO/clicktool_dashboard.mp4'
import ClicktoolLogo from './HOME_COMPONENTS/ClicktoolLogoHorizontal.js'
import ClicktoolCity from './HOME_COMPONENTS/ClicktoolCity.js'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        
        {/* top section */}
        <section className="flex-center">
          <h1 className="absolute text-secondary0 two-thirds">Hi! <br/>I'm Chuck Howard</h1>
          <img className="me fixed whole md-half" src={Me} alt="Mr. Charles" />
        </section>
        
        {/* 'deseloper' */}
        <section className="bg-tertiary0 flex-column flex-center text-center">
          <div className="absolute two-thirds md-half flex-center">
            <Wavy />
          </div>
          <h1 className="absolute">Designer<br/> + <br/>Developer</h1>
        </section>
        
        {/* project section */}
        <section className="bg-secondary0 flex-center flex-column lg-flex-row">
          
          <div className="absolute whole flex-column flex-center">
            <div className="whole md-two-thirds absolute">
              <ClicktoolCity />
            </div>
            <div className="two-thirds mb30 relative" style={{transform: 'translateY(-100%)'}}>
              <ClicktoolLogo/>
            </div>
          </div>

          <div className="laptop-project-container flex-center whole md-two-thirds relative">        
            <img  className='whole absolute' src={Laptop} />
            <div class="relative laptop-project-video-container">
              <video className="laptop-project-video" controls loop src={Clicktool}/>
            </div>
          </div>
        </section>

        <section>
          
        </section>

      </div>
    );
  }
}

export default Home;
