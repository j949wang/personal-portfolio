import React from "react";
import { Component } from "react";
// import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Welcome from "./components/welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introducing: true,
      animation: true
    };
    this.welcomeAnimation = this.welcomeAnimation.bind(this);
  }

  welcomeAnimation() {
    setTimeout(() => {
      this.setState({
        animation: false
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        introducing: false
      });
    }, 4000);
  }

  render() {
    return (
      <div className="App">
        {this.state.introducing ? null : <NavBar />}
        {this.state.introducing ? (
          <Welcome
            parentState={this.state.animation}
            intro={this.welcomeAnimation}
          />
        ) : null}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
