import React, { Component } from "react";
import avatar from "../images/avatar.png";
import hero from "../images/hero.png";

class Design extends Component {
  render() {
    return (
      <div>
        <div className="design-header">
          <div className="designation">
            Designer, Front-end Developer & Mentor
          </div>
          <div className="breaf">
            I design and code beautifully simple things, and I love what I do.
          </div>
          <div className="avatar">
            <img src={avatar} alt="Avatar" />
          </div>
        </div>

        <div className="hero">
          <img src={hero} alt="Hero" />
        </div>
      </div>
    );
  }
}

export default Design;
