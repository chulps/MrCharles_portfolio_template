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
          {/* <h1 className="absolute text-black two-thirds">Hi!</h1> */}
          <h2 className="two-thirds text-center m-auto">I'm Chuck Howard</h2>
          <img className="me fixed whole md-half" src={Me} alt="Mr. Charles" />
        </section>
        
        {/* 'deseloper' */}
        <section className="home-about-section bg-main flex-column flex-center text-center">
          <div className="absolute whole md-half flex-center hidden lg-flex">
            <Wavy />
          </div>
          <h1 className="absolute text-shadow-out text-main flex lg-hidden">Deseloper</h1>
          <div className="absolute two-thirds md-half lg-third m-auto flex-center flex-column">
            <h4>I'm a generalist designer and front-end developer. </h4>
            <h2>Designer<br/> + <br/>Developer</h2>
            <h4>I can design anything, but I love making apps the most.</h4>
          </div>
        </section>
        
        {/* project section */}
        <section className="relative bg-main flex-center flex-column lg-flex-row lg-pt30 lg-pb30">

          <div className="absolute whole md-two-thirds flex-column flex-center" style={{transform: 'translateY(-50%)'}}>
            <div className="whole absolute">
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
            <button className="clicktool-project-button">View Project</button>
          </div>
        </section>



      </div>
    );
  }
}

export default Home;
