import React, { Component } from "react";
import Ibm from "../spec/IBM.json";
import Escrypt from "../spec/Escrypt.json";
import HDCanada from "../spec/HDCanada.json";
import PCC from "../spec/PCC.json"
import CaLogo from "../img/CA_Glass_Logo_no_bg.png";
import HDLogo from "../img/homedepot_logo.png";
import ScmsLogo from "../img/Scms_logo.png";
import PCCLogo from "../img/pcc_logo_edit.png"
import Card from "./card";

class Experience extends Component {
  render() {
    return (
      <div id="experienceContainer">
        <Card imageSrc={PCCLogo} alignment="right" link="pcc" info={PCC}/>
        <Card imageSrc={CaLogo} alignment="left" info={Ibm} />
        <Card imageSrc={ScmsLogo} alignment="right" info={Escrypt} />
        <Card imageSrc={HDLogo} alignment="left" info={HDCanada} />
      </div>
    );
  }
}

export default Experience;
