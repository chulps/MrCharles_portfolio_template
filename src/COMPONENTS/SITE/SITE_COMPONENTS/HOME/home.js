import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="site-home-section">
          <h1>Lol</h1>
        </section>

        <section className="site-home-section">          
          <div style={{background: "var(--primary0)", height: 100, width: 100}}>hello</div>
          <div style={{background: "var(--secondary0)", height: 100, width: 100}}>hello</div>
          <div style={{background: "var(--tertiary0)", height: 100, width: 100}}>hello</div>
          <div style={{background: "var(--quaternary0)", height: 100, width: 100}}>hello</div>
        </section>

      </div>
    );
  }
}

export default Home;
