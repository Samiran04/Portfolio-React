import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="navbar">
            <div className="icon">
              <div className="logo">ShowUp</div>
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
              easily which makes you look like a professional. These can
              <br />
              be use in jobs to showcase your skills in a eye pleasing and
              systematic manner which
              <br /> can make you standout from others. You can build each
              component as you wish in free of cost.
            </p>

            <button className="cn">
              <a href="#">JOIN US</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
