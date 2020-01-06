import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="site-home-section">
          <h1>Lol</h1>
        </div>

        <div className="site-home-section">
          home section
        </div>

        <div style={{background: "var(--primary0)", height: 100, width: 100}}>hello</div>
        <div style={{background: "var(--secondary0)", height: 100, width: 100}}>hello</div>
        <div style={{background: "var(--tertiary0)", height: 100, width: 100}}>hello</div>
        <div style={{background: "var(--quaternary0)", height: 100, width: 100}}>hello</div>
        <div className="site-home-section">section</div>
      </div>
    );
  }
}

export default Home;
