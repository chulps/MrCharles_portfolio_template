// Home.js
import React from "react";
import "./home.css";
import Me from '../../../../IMG/chuck.png'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="site-home-section">
          <h1 className="absolute">It's me, LOL!</h1>
          <img className="fixed whole md-half" src={Me} alt="Mr. Charles" />
        </section>

        <section className="site-home-section">          
          <div>Project 1</div>
        </section>

      </div>
    );
  }
}

export default Home;
