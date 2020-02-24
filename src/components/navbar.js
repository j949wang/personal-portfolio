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
      <Navbar className="navigation" variant="light" expand="md">
        <Navbar.Brand href="#home">Need a Logo...</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-center">
          <Nav className="ml-auto">
            <Nav.Link className="navlinks" href="#home">
              Home
              <FontAwesomeIcon className="ml-1" icon={faHome} />
            </Nav.Link>
            <Nav.Link className="navlinks" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="navlinks" href="#resume">
              Resumé
            </Nav.Link>
            <Nav.Item className="d-inline-flex ml-1 row justify-content-center">
              <Nav.Link className="navlinks mr-2" href="#linkedin">
                <FontAwesomeIcon className="ml-1" icon={faLinkedin} />
              </Nav.Link>
              <Nav.Link className="navlinks mr-2" href="#github">
                <FontAwesomeIcon className="ml-1" icon={faGithub} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar; // Don’t forget to use export default!
