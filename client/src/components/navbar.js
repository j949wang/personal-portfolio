import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavBar extends Component {
  constructor() {
    super();
    this.scrollHome = this.scrollHome.bind(this);
    this.scrollExperience = this.scrollExperience.bind(this);
  }

  scrollHome() {
    window.scrollTo(0, 0);
  }

  scrollExperience() {
    let jumbotronHeight = document.getElementsByClassName("landingBanner")[0]
      .scrollHeight;
    console.log(jumbotronHeight);
    window.scrollTo(0, jumbotronHeight);
  }

  render() {
    return (
      <Navbar
        className="navigation pt-5 pb-5"
        variant="light"
        expand="md"
        sticky="top"
      >
        <Navbar.Brand href="#home">Need a Logo...</Navbar.Brand>
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
            <Nav.Link className="navlinks navBtn ml-2" href="#resume">
              Resumé
            </Nav.Link>
            <div className="verticalLine"></div>
            <div className="socialContainer">
              <Nav.Link className="navlinks mr-2 socialIcons" href="#linkedin">
                <FontAwesomeIcon className="ml-1" icon={faLinkedin} />
              </Nav.Link>
              <Nav.Link className="navlinks mr-2 socialIcons" href="#github">
                <FontAwesomeIcon className="ml-1" icon={faGithub} />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar; // Don’t forget to use export default!
