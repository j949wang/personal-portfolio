import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Title extends Component {
  componentDidMount() {
    const experience = document.getElementsByClassName("titleDescription")[0]
    const navView = document.getElementById("contentNav");
    const cards = document.getElementsByClassName("cardContainer");

    const isFullySeen = el => el &&
    typeof el.getBoundingClientRect === 'function' &&
    el.getBoundingClientRect()['bottom'] + window.scrollY <= 
      window.innerHeight + window.scrollY && 
    el.getBoundingClientRect()['top'] + window.scrollY <= 
    window.innerHeight + window.scrollY;

    const isPartiallySeen = el => el &&
    typeof el.getBoundingClientRect === 'function' &&
    el.getBoundingClientRect()['top'] + window.scrollY + 50<= 
    window.innerHeight + window.scrollY;

    if (isFullySeen(experience)) {
      experience.classList.add("isVisible")
    }
    
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        navView.classList.remove("nav-not-at-top");
      } else if (
        !navView.classList.contains("nav-not-at-top") &&
        window.pageYOffset !== 0
      ) {
        navView.classList.add("nav-not-at-top");
      } 
      if (isFullySeen(experience)) {
        experience.classList.add("isVisible")
      } else if (experience.classList.contains("isVisible")){
        experience.classList.remove("isVisible")
      }

      for (var i = 0; i < cards.length; i++) {
        if (isPartiallySeen(cards[i])) {
          cards[i].classList.add("isVisible");
        } else if (cards[i].classList.contains("isVisible")) {
          cards[i].classList.remove("isVisible");
        }
      }
    }

  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <Container id="experience" className="sectionContainer" fluid>
        <Row className="sectionTitle">{this.props.text}</Row>
        <Row className="sectionTitle titleDescription">Throughout my undergraduate studies, I've had the opportunity to work with some fantastic
        companies as apart of my internship placements. Here are some of my experiences at each one (ongoing).</Row>
    
      </Container>
    );
  }
}

export default Title;
