// ClicktoolTopSection.js
import React from "react";

class ClicktoolChallengesSection extends React.Component {
  render() {
    return (
      <section className="challenges pt30">
        <div className="sticky-top relative pl30 pr30 pb30">
          <h3 className="mb5">CHALLENGES</h3>
          <div>
            <h5>BUSINESS OBJECTIVES</h5>
            <p className="whole sm-four-fifths md-half lg-third xl-fourth">
              The plan for this app is to create an all-in-one subscription
              marketing platform for digital marketers. Users track clicks,
              conversions, phone calls, and many other data points across
              several traffic sources such as Facebook and Google ads. Marketers
              can use the information they gather to make informed decisions
              about where and how to spend their marketing efforts. Users can
              also purchase marketing assets such as domain names, phone
              numbers, landing pages, etc.
            </p>
            <p>The company has three divisions</p>
            <ul>
              <li>Clicktool: The Marketing Platform</li>
              <li>Clicktool Master Class: The Educational platform</li>
              <li>Clicktool Agency: The Marketing Agency</li>
            </ul>
          </div>
          <div>
            <h5>DESIGN CHALLENGES</h5>
            <p className="whole sm-four-fifths md-half lg-third xl-fourth"></p>
          </div>
        </div>
      </section>
    );
  }
}

export default ClicktoolChallengesSection;
