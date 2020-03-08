import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        className="navigation pt-5 pb-5"
        sticky="top"
        variant="light"
        expand="md">
        <Navbar.Brand href="#home">Need a Logo...</Navbar.Brand>
        <Navbar.Toggle
          className="navToggleBtn"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navlinks navBtn" href="#home">
              Home
              <FontAwesomeIcon className="ml-1 home-icon" icon={faHome} />
            </Nav.Link>
            <Nav.Link className="navlinks navBtn" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="navlinks navBtn" href="#resume">
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
