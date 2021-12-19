import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home_nav">
          <div className="logo-div"></div>
          <div className="nav-details">
            <div>
              <Link to="/sign-in">Sign In</Link>
            </div>
            <div>
              <Link to="/sign-up">Sign Up</Link>
            </div>
          </div>
        </div>
        <div className="gen-details">
          <p>
            Moderno is a portfolio design studio. We
            <br />
            help build meaningful portfolio for
            <br />
            working professional and Students.
          </p>
        </div>
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
