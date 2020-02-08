import React from "react";
import "./social.css";
// import social from "./social.json";
import Behance from "./svg/behance.js";
import Codepen from "./svg/codepen-icon.js";
import Github from "./svg/github-icon-1.js";
import JSFiddle from "./svg/jsfiddle.js";
import Pinterest from "./svg/pinterest-1";
import StackOverflow from "./svg/stack-overflow";
import LinkedIn from "./svg/linkedIn.js";
const Social = () => {
  return (
    <div className="social p10">
      <div className="flex-space-between flex-column">
        {/* {social.map(element => {
            return (
              <div
                key={element.id}
                href={element.href}
                className="mt30 inline ml10 mr10 md-block md-ml0 md-mr0"
              >
                <a className="flex-center" href={element.href} target="blank">
                  <img
                    className="whole m20 md-m0"
                    style={{ height: 40, width: 40 }}
                    src={element.image}
                    target="blank"
                    alt=""
                  />
                </a>
              </div>
            );
          })} */}
        <div className="social-wrapper">
          <a target="_blank" href="https://www.behance.net/chuckhoward">
            <Behance />
          </a>
        </div>
        <div className="social-wrapper">
          <a target="_blank" href="https://codepen.io/chulps/">
            <Codepen />
          </a>
        </div>
        <div className="social-wrapper">
          <a target="_blank" href="https://github.com/chulps">
            <Github />
          </a>
        </div>
        <div className="social-wrapper">
          <a target="_blank" href="https://jsfiddle.net/user/chulps/fiddles/">
            <JSFiddle />
          </a>
        </div>
        <div className="social-wrapper">
          <a target="_blank" href="https://www.pinterest.com/chuckoward/">
            <Pinterest />
          </a>
        </div>
        <div className="social-wrapper">
          <a
            target="_blank"
            href="https://stackoverflow.com/users/2146031/chulps"
          >
            <StackOverflow />
          </a>
        </div>
        <div className="social-wrapper">
          <a target="_blank" href="https://www.linkedin.com/in/chuck-howard/">
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
