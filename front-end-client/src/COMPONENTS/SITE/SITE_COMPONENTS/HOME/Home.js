// Home.js
import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./home.css"
import Laptop from "../../../../IMG/laptop.png"
import HomeProjectSection from "./HOME_COMPONENTS/HomeProjectSection";

// import Me from '../../../../IMG/chuck.png'// just change the name 'chuck' in this import to make it be you instead
import Wavy from "./HOME_COMPONENTS/Wavy";

const images = require.context("../../../../IMG/USERS", true);
const styles = {
  userInput: {
    marginBottom: "10px",
    height: "50px",
    width: "300px",
    padding: "var(--buttonPadding)",
    textAlign: "center"
  }
};

class Home extends React.Component {
  state = {
    user: "",
    name: "",
    profile: "",
    userNotFound: false
  }

  componentDidMount() {
    axios.get(`getUser/chuck`).then(data => {
      this.setState(
        {
          profile: data.data
        },
        () => {
          if (!this.state.profile) {
            this.setState({
              userNotFound: true
<<<<<<< HEAD
            });
          }
        }
      );
    });
  }

  handleUserInput = e => {
    this.setState({
      name: e.target.value
    });
  };

  submitUserInput = () => {
    this.setState(
      {
        user: this.state.name.toLowerCase()
      },
      () => {
        axios.get(`getUser/${this.state.user}`).then(data => {
          this.setState(
            {
              profile: data.data
            },
            () => {
              if (!this.state.profile) {
                this.setState({
                  userNotFound: true
                });
              }
            }
          );
        });
      }
    );
  };

  handleUserInputSubmit = e => {
    if (e.keyCode === 13) {
      this.submitUserInput();
    }
  };

  render() {
    if (this.state.profile) console.log(this.state.profile.role.split(","));
    return this.state.profile ? (
      <div className="home">
        {/* <button onClick={this.handleSave}>Save</button> */}
=======
            })
          }
        }
      )
    })
  }

  handleUserInput = e => {
    this.setState({
      name: e.target.value
    })
  }

  submitUserInput = () => {
    this.setState(
      {
        user: this.state.name.toLowerCase()
      },
      () => {
        axios.get(`getUser/${this.state.user}`).then(data => {
          this.setState(
            {
              profile: data.data
            },
            () => {
              if (!this.state.profile) {
                this.setState({
                  userNotFound: true
                })
              }
            }
          )
        })
      }
    )
  }

  handleUserInputSubmit = e => {
    if (e.keyCode === 13) {
      this.submitUserInput()
    }
  }

  render() {
    if (this.state.profile) console.log(this.state.profile.role.split(","))
    return this.state.profile ? (
      <div className="home">
>>>>>>> downloadable-resume
        {/* top section */}
        <section className="flex-center">
          {/* <h1 className="absolute text-black two-thirds">Hi!</h1> */}
          <h1 className="two-thirds text-center m-auto">
            I 'm {this.state.profile.fullName}
          </h1>
          <img
            className="me fixed whole md-half"
            src={images("./" + this.state.profile.picture)}
            alt={this.state.profile.fullName}
          />
        </section>
        {/* 'deseloper' */}
        <section className="home-about-section bg-main flex-column flex-center text-center">
          {/* <div className="absolute whole md-half flex-center hidden lg-flex">
                            <Wavy />
                          </div> */}
          <h1 className="absolute text-shadow-out text-main deseloper">
            {this.state.profile.role.split(",").length > 1
              ? this.state.profile.role.split(",").map((item, i) => {
                  if (i === 0) {
<<<<<<< HEAD
                    return item;
=======
                    return item
>>>>>>> downloadable-resume
                  } else {
                    return (
                      <div>
                        + <br /> {item}
                      </div>
<<<<<<< HEAD
                    );
=======
                    )
>>>>>>> downloadable-resume
                  }
                })
              : this.state.profile.role}
          </h1>
<<<<<<< HEAD
          <div className="absolute two-thirds md-half lg-third m-auto flex-center flex-column">
            <h4>I'm a designer and front-end developer. </h4>
            <h2>
              Designer
              <br /> + <br />
              Developer
            </h2>
            <h4>I can design anything, but I love making apps the most.</h4>
          </div>
        </section>
        <section className="relative bg-main flex-center flex-column lg-flex-row lg-pt30 lg-pb30">
          <HomeProjectSection />
          <Link className="clicktool-project-button" to="/projects/clicktool">
            <button> View Project </button>
          </Link>
=======
          {/* <div className="absolute two-thirds md-half lg-third m-auto flex-center flex-column">
                            <h4>I'm a generalist designer and front-end developer. </h4>
                            <h2>Designer<br/> + <br/>Developer</h2>
                            <h4>I can design anything, but I love making apps the most.</h4>
                          </div> */}
        </section>
        {/* project section */}
        <section className="relative bg-main flex-center flex-column lg-flex-row lg-pt30 lg-pb30">
          <div
            className="absolute whole md-two-thirds flex-column flex-center"
            style={{
              transform: "translateY(-50%)"
            }}
          >
            <div className="whole absolute">
              <ClicktoolCity />
            </div>
            <div
              className="two-thirds mb30 relative"
              style={{
                transform: "translateY(-100%)"
              }}
            >
              <ClicktoolLogo />
            </div>
          </div>
          <div className="laptop-project-container flex-center whole md-half relative">
            <img className="whole absolute" src={Laptop} />
            <div className="relative laptop-project-video-container">
              <video
                className="laptop-project-video"
                controls
                loop
                src={Clicktool}
              />
            </div>
            <Link className="clicktool-project-button" to="/projects/clicktool">
              <button> View Project </button>
            </Link>
          </div>
        </section>
        <section className="bg-main">
          <div className="colors">
            `
            <div
              className="bg-primary0"
              style={{ height: 100, width: 100 }}
            ></div>
            <div
              className="bg-secondary0"
              style={{ height: 100, width: 100 }}
            ></div>
            <div
              className="bg-tertiary0"
              style={{ height: 100, width: 100 }}
            ></div>
            <div
              className="bg-quaternary0"
              style={{ height: 100, width: 100 }}
            ></div>
            `
          </div>
>>>>>>> downloadable-resume
        </section>
      </div>
    ) : (
      <div
        style={{
          minHeight: "calc(100vh - 314px)"
        }}
        className="flex-column flex-center"
      >
        <h1 className="two-thirds text-center m-auto"> Who are you ? </h1>
        <input
          style={styles.userInput}
          type="text"
          value={this.state.name}
          onChange={this.handleUserInput}
          onKeyUp={this.handleUserInputSubmit}
        />
        <p
          style={
            this.state.userNotFound
              ? {
                  color: "red",
                  marginTop: 0
                }
              : {
                  display: "none"
                }
          }
        >
          User not found : (
        </p>
        {this.state.userNotFound ? (
          <Link to="/register">
            <button> Register </button>
          </Link>
        ) : (
          <button onClick={this.submitUserInput}> Submit </button>
        )}
      </div>
<<<<<<< HEAD
    );
  }
}

export default Home;
=======
    )
  }
}

export default Home
>>>>>>> downloadable-resume
