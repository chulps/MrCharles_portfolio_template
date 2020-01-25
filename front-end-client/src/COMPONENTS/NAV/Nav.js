// Nav.js
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../../IMG/CHULPS_LOGO_ANIMATION_instagram.gif";
import LogoWhite from "../../IMG/CHULPS_LOGO_ANIMATION_WHITE_NO_BG_portfolio.gif";

class Nav extends React.Component {
  state = {
    displaymobileNav: false,
    menuText: "Menu"
  };

  render() {
    return (
      // Nav.js

      <nav>
        {/* wrapper for the logo and logo text, hidden on small screens */}
        <Link to="/">
          <span className="logoWrapper">
            <div style={{ width: "4em", height: "4em" }}>
              <img
                className="logo"
                src={Logo}
                alt="Mr. Charles"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h5
              style={{ margin: 0 }}
              className="hidden md-flex font-condensed font-weight-regular"
            >
              Chuck Howard
            </h5>
          </span>
        </Link>
        {/* desktop nav menu */}
        <ul className="hidden md-flex">
          <li>
            <Link to="/about">RESUME</Link>
          </li>
          <li>
            <Link to="/works">WORK</Link>
          </li>
          {/* <Link to="/contact"><button>Contact</button></Link> */}
        </ul>

        {/* mobile nav */}
        <button
          id="mobile-nav-button"
          className={
            this.state.displaymobileNav
              ? "fixed block md-hidden"
              : "absolute block md-hidden"
          }
          onClick={() =>
            this.setState({
              displaymobileNav: !this.state.displaymobileNav,
              menuText: `${
                this.state.displaymobileNav === false ? "Close" : "Menu"
              }`
            })
          }
        >
          {this.state.menuText}
        </button>

        <div
          id="mobile-nav-links"
          className={
            this.state.displaymobileNav
              ? "mobileNav mobileNav-show"
              : "mobileNav mobileNav-hide"
          }
        >
          <div
            className="overlay md-hidden"
            onClick={() =>
              this.setState({
                displaymobileNav: !this.state.displaymobileNav,
                menuText: `${
                  this.state.displaymobileNav === false ? "Close" : "Menu"
                }`
              })
            }
          >
            <img src={LogoWhite} className="absolute" alt="" />

            <div
              className="mobile-nav-links flex-column absolute flex-space-around"
              style={{ height: "50%" }}
            >
              <div
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${
                      this.state.displaymobileNav === false ? "Close" : "Menu"
                    }`
                  })
                }
              >
                <Link to="/">Home</Link>
              </div>
              <div
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${
                      this.state.displaymobileNav === false ? "Close" : "Menu"
                    }`
                  })
                }
              >
                <Link to="/about">RESUME</Link>
              </div>
              <div
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${
                      this.state.displaymobileNav === false ? "Close" : "Menu"
                    }`
                  })
                }
              >
                <Link to="/clicktool">WORK</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
