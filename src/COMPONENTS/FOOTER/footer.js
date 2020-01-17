// Footer.js
import React from "react";
import "./footer.css";
import Logo from "../../IMG/CHULPS_LOGO_ANIMATION_WHITE_NO_BG_portfolio.gif"

class Home extends React.Component {
  render() {
    return (
      <footer className="footer relative flex-center">
        <div class="flex-column flex-center">
          <img class="logo" src={Logo} alt="Mr. Charles Logo" />
          <h6>©Chuck Howard 2020</h6>
        </div>
      </footer>
    );
  }
}

export default Home;
