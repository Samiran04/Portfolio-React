import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="logo-div"></div>
        <div className="prof"></div>
        <div className="prof-hide">Professionals</div>
        <div className="stud"></div>
        <div className="stud-hide">Students</div>
        <div className="roles"></div>
        <div className="roles-hide">Different Backgrounds</div>
      </div>
    );
  }
}

export default Home;
