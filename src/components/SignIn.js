import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="navbar">
            <div className="icon">
              <div className="logo">
                <b>ShowUp</b>
              </div>
            </div>

            <div className="menu">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">SERVICE</a>
                </li>
                <li>
                  <a href="#">DESIGN</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>

            <div className="search">
              <input
                className="srch"
                type="search"
                name=""
                placeholder="Type To text"
              />
              <a href="#">
                <button className="btn">Search</button>
              </a>
            </div>
          </div>

          <div className="content">
            <h1>
              Portfolio Design & <br /> <span>Development</span>
              <br />
              Web Application
            </h1>

            <p className="par">
              ShowUp is a web application where you can build your portfolis
              easily which makes
              <br />
              you look like a professional. These can be use in jobs to showcase
              your skills
              <br /> in a eye pleasing and systematic manner which can make you
              standout
              <br /> from others. You can build each component as you wish in
              free of cost.
            </p>

            <button className="cn">
              <a href="#">JOIN US</a>
            </button>

            <div class="form">
              <h2>Login Here</h2>
              <input type="email" name="email" placeholder="Enter Email Here" />
              <input
                type="password"
                name=""
                placeholder="Enter Password Here"
              />
              <button className="btnn">
                <a href="#">Login</a>
              </button>
              <p className="link">
                Dont't have an account
                <br />
                <Link to="/sign-up">Sign up </Link>here
              </p>
              <p className="liw">Log in with</p>

              <div className="icon">
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
        <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
      </div>
    );
  }
}

export default SignIn;
