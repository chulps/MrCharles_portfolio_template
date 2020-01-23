// Register.js
import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./register.css"

const styles = {
  userInput: {
    marginBottom: "10px",
    height: "50px",
    width: "300px",
    padding: "10px",
    fontSize: "24px",
    fontFamily: "cursive",
    textAlign: "center"
  }
}

class Register extends React.Component {
  state = {
    fullName: "",
    role: "",
    userName: "",
    picutre: "placehold.jpg"
  }

  handleSave = () => {
    axios
      .post("/save", {
        userName: this.state.fullName.split(" ")[0].toLowerCase(),
        fullName: this.state.fullName,
        role: this.state.role,
        picture: `${this.state.fullName.split(" ")[0].toLowerCase()}.png`
      })
      .then(data => {
        console.log(data)
      })
  }

  handleUserInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // submitUserInput = () => {
  //   this.setState(
  //     {
  //       user: this.state.name.toLowerCase()
  //     },
  //     () => {
  //       this.setState(
  //         {
  //           profile: USERS.find(user => {
  //             return user.id === this.state.user
  //           })
  //         },
  //         () => {
  //           if (!this.state.profile) {
  //             this.setState({
  //               userNotFound: true
  //             })
  //           }
  //         }
  //       )
  //     }
  //   )
  // }

  // handleUserInputSubmit = e => {
  //   if (e.keyCode === 13) {
  //     this.submitUserInput()
  //   }
  // }

  render() {
    return (
      <div
        style={{ minHeight: "calc(100vh - 314px)" }}
        className="flex-column flex-center"
      >
        <h1 className="two-thirds text-center m-auto">
          Welcome! Let's learn about you
        </h1>

        <section className="flex-column flex-center">
          <h2 className="whole text-center m-auto">What's your name?</h2>
          <input
            name="fullName"
            style={styles.userInput}
            type="text"
            value={this.state.fullName}
            onChange={this.handleUserInput}
          />
        </section>

        <section className="flex-column flex-center disabled">
          <h2 className="whole text-center m-auto">Add a picture</h2>
          {/* <input
            style={styles.userInput}
            type="text"
            value={this.state.fullName}
            onChange={this.handleUserInput}
          /> */}
        </section>

        <section className="flex-column flex-center">
          <h2 className="whole text-center m-auto">What's your role?</h2>
          <input
            name="role"
            style={styles.userInput}
            type="text"
            value={this.state.role}
            onChange={this.handleUserInput}
          />
        </section>

        {/* <section className="flex-column flex-center">
          <h2 className="whole text-center m-auto">What's your name?</h2>
          <input
            name="fullName"
            style={styles.userInput}
            type="text"
            value={this.state.fullName}
            onChange={this.handleUserInput}
          />
        </section> */}

        <button onClick={this.handleSave}>Submit</button>
      </div>
    )
  }
}

export default Register
