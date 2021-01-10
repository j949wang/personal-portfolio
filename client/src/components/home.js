import React from "react";
import { Component } from "react";
import Experience from "./experience";
import Landing from "./landing";
import Title from "./title";
// import Intro from "./intro";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Landing />
        <Title text={"Experience"}/>
        <Experience />
      </div>
    );
  }
}

export default Home;
