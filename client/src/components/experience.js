import React, { Component } from "react";
import Ibm from "../spec/IBM.json";
import Escrypt from "../spec/Escrypt.json";
import HDCanada from "../spec/HDCanada.json";
import CaLogo from "../img/CA_Glass_Logo_no_bg.png";
import ScmsLogo from "../img/Scms_logo.png";
import Card from "./card";

class Experience extends Component {
  render() {
    return (
      <div>
        <Card imageSrc={CaLogo} alignment="left" info={Ibm} />
        <Card imageSrc={ScmsLogo} alignment="right" info={Escrypt} />
        <Card imageSrc={CaLogo} alignment="left" info={HDCanada} />
      </div>
    );
  }
}

export default Experience;
