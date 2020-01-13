// Home.js
import React from "react";
import "./home.css";
import Wavy from './HOME_COMPONENTS/Wavy.js'

// just change the name 'chuck' in this import to make it be you instead
import Me from '../../../../IMG/chuck.png'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="site-home-section flex-center">
          <Wavy />
          {/* <h1 className="absolute">It's me, LOL!</h1> */}
          <img className="me fixed whole md-half" src={Me} alt="Mr. Charles" />
        </section>

        <section className="site-home-section">          
          <div>Project 1</div>
        </section>

      </div>
    );
  }
}

export default Home;
