// Nav.js
import React from "react";
import { Link } from 'react-router-dom';
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
          <span className="logoWrapper">
            <img
            className="logo"
            src={Logo}
            alt="Mr. Charles"/>
            <h5 
            style={{margin: 0}}
            className="hidden md-flex">
                Chuck Howard</h5>
          </span>

        {/* desktop nav menu */}
        <ul className="hidden md-flex">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/works">Other Works</Link></li>
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
              menuText: `${this.state.displaymobileNav === false ? "Close":"Menu"}`
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
          <div className="overlay md-hidden"              
              onClick={() =>
                this.setState({
                  displaymobileNav: !this.state.displaymobileNav,
                  menuText: `${this.state.displaymobileNav === false ? "Close":"Menu"}`
                })
              }>
            <img src={LogoWhite} className="absolute" alt="" />
            
            <div className="mobile-nav-links flex-column absolute flex-space-around" style={{height: '50%'}}>
              <div
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${this.state.displaymobileNav === false ? "Close":"Menu"}`
                  })
                }>
                <Link to="/">Home</Link>
              </div>
              <div
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${this.state.displaymobileNav === false ? "Close":"Menu"}`
                  })
                }><Link to="/about">About</Link></div>
              <div
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${this.state.displaymobileNav === false ? "Close":"Menu"}`
                  })
                }><Link to="/clicktool">Clicktool</Link></div>
              <div
                onClick={() =>
                  this.setState({
                    displaymobileNav: !this.state.displaymobileNav,
                    menuText: `${this.state.displaymobileNav === false ? "Close":"Menu"}`
                  })
                }><Link to="/works">Other Works</Link></div>
            {/* <button
              onClick={() =>
                this.setState({
                  displaymobileNav: !this.state.displaymobileNav,
                  menuText: `${this.state.displaymobileNav === false ? "Close":"Menu"}`
                })
              }>
              <Link to="/contact">Contact</Link></button> */}
              </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;