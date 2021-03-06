import React from "react";
import { Component } from "react";
// import { Route } from "react-router-dom";
// import Experience from "./components/experience";
import Footer from "./components/footer";
// import Landing from "./components/landing";
import NavBar from "./components/navbar";
// import Title from "./components/title";
import Home from "./components/home";
import Welcome from "./components/welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introducing: true,
      animation: true,
    };
    this.welcomeAnimation = this.welcomeAnimation.bind(this);
  }

  welcomeAnimation() {
    setTimeout(() => {
      this.setState({
        animation: false,
      });
    }, 3000); // set to 3000

    setTimeout(() => {
      this.setState({
        introducing: false,
      });
    }, 4000); //Set to 4000
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
        {this.state.introducing ? null : <Home />}
        {/* {this.state.introducing ? null : <Landing />}
        {this.state.introducing ? null : <Title />}
        {this.state.introducing ? null : <Experience />} */}
        {this.state.introducing ? null : <Footer />}
      </div>
    );
  }
}

export default App;
