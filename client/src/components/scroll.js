import React, { Component } from "react";

class Scroll extends Component {
  constructor() {
    super();
    this.scrollExperience = this.scrollExperience.bind(this);
  }

  scrollExperience() {
    let jumbotronHeight = document.getElementsByClassName("landingBanner")[0]
      .scrollHeight;
    console.log(jumbotronHeight);
    window.scrollTo(0, jumbotronHeight);
  }

  render() {
    return (
      <section id="section05" className="demo">
        <button onClick={this.scrollExperience}>
          <span></span>
        </button>
      </section>
    );
  }
}

export default Scroll;
