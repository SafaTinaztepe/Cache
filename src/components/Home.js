import React, { Component } from "react";
import "../styles/Home.css";
import Login from "./Login.js"

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }

  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSelection = event => {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {

    return (
      <div className="Home">
      <Login />
      <button class="transferFunds">Send Money!</button>
        <div className="lander">
          <div className="blackOverlay">
            <div className="bgImage">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
