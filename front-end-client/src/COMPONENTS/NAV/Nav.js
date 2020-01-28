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
      <nav>
        {/* Nav.js */}
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
            <h4
              style={{
                margin: 0,
                textTransform: "none"
              }}
              className="hidden md-flex font-regular font-weight-bold"
            >
              Chuck
              <br />
              Howard
            </h4>
          </span>
        </Link>
        {/* desktop nav menu */}
        <ul className="hidden lg-flex">
          <li>
            <Link to="/Resume">RESUME</Link>
          </li>
          <li>
            <Link to="/PROJECTSs">PROJECTS</Link>
          </li>
          <li className="mr0">
            <a href="mailto:someone@yoursite.com">
              <button className="contact-button m0">contact</button>
            </a>
          </li>
          {/* <Link to="/contact"><button>Contact</button></Link> */}
        </ul>

        {/* mobile nav */}
        <button
          id="mobile-nav-button"
          className={
            this.state.displaymobileNav
              ? "fixed block lg-hidden"
              : "absolute block lg-hidden"
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
            <img
              src={Logo}
              className="absolute"
              style={{
                height: 120,
                top: "25%",
                transform: " translate(-50% 0)",
                opacity: "50%"
              }}
              alt=""
            />

            <ul
              className="mobile-nav-links flex-column absolute flex-space-around"
              style={{ height: "25%" }}
            >
              <li
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
              </li>
              <li
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${
                      this.state.displaymobileNav === false ? "Close" : "Menu"
                    }`
                  })
                }
              >
                <Link to="/Resume">RESUME</Link>
              </li>
              <li
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${
                      this.state.displaymobileNav === false ? "Close" : "Menu"
                    }`
                  })
                }
              >
                <Link to="/projects/clicktool">PROJECTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
