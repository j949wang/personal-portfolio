import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Logo from "../img/brandlogo.png";
import Resume from "../documents/Resume2021 FullStack.pdf"

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      scrolling: false,
    };
    this.scrollHome = this.scrollHome.bind(this);
    this.scrollExperience = this.scrollExperience.bind(this);
  }

  scrollHome() {
    window.scrollTo(0, 0);
  }

  scrollExperience() {
    let jumbotronHeight = document.getElementsByClassName("landingBanner")[0]
      .scrollHeight;
    // console.log(jumbotronHeight);
    window.scrollTo(0, jumbotronHeight);
  }


  // componentDidMount() {
  //   const navView = document.getElementById("contentNav");
  //   window.onscroll = function () {
  //     if (window.pageYOffset === 0) {
  //       navView.classList.remove("nav-not-at-top");
  //     } else if (
  //       !navView.classList.contains("nav-not-at-top") &&
  //       window.pageYOffset !== 0
  //     ) {
  //       navView.classList.add("nav-not-at-top");
  //     }
  //   };
  // }



  render() {
    return (
      <Navbar
        id="contentNav"
        className="navigation pt-5 pb-5"
        variant="light"
        expand="md"
        onLoad={this.changeOpacity}
        sticky="top"
      >
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle
          className="navToggleBtn"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="navlinks navBtn ml-2"
              onClick={this.scrollHome}
              href="#home"
            >
              Home
              <FontAwesomeIcon className="ml-1 home-icon" icon={faHome} />
            </Nav.Link>
            <Nav.Link
              className="navlinks navBtn ml-2"
              onClick={this.scrollExperience}
              href="#"
            >
              Experience
            </Nav.Link>
            <Nav.Link className="navlinks navBtn ml-2" href={Resume}>
              Resumé
            </Nav.Link>
            <div className="verticalLine"></div>
            <div className="socialContainer">
              <Nav.Link className="navlinks mr-2 socialIcons" href="https://www.linkedin.com/in/jiaxi-jacky-wang">
                <FontAwesomeIcon className="ml-1" icon={faLinkedin} />
              </Nav.Link>
              <Nav.Link className="navlinks mr-2 socialIcons" href="https://github.com/j949wang">
                <FontAwesomeIcon className="ml-1" icon={faGithub} />
              </Nav.Link>
              <Nav.Link className="navlinks mr-2 socialIcons" href="mailto:jiaxiwang99@gmail.com">
                <FontAwesomeIcon className="ml-1" icon={faEnvelope} />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar; // Don’t forget to use export default!
