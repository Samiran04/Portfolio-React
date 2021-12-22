import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions/auth";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
    };
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPassword = (e) => {
    this.setState({
      confirm_password: e.target.value,
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSignUp = (e) => {
    const { dispatch } = this.props;
    const { email, password, confirm_password, name } = this.state;

    dispatch(createUser(email, password, confirm_password, name));
  };

  render() {
    const { name, email, password, confirm_password } = this.state;
    return (
      <div>
        <div className="main">
          <div className="navbar">
            <div className="icon">
              <div className="logo">
                <b>Moderno</b>
              </div>
            </div>

            <div className="menu">
              <ul>
                <li>
                  <Link to="/">HOME</Link>
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

            <div class="form form2">
              <h2>Signup Here</h2>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Here"
                value={email}
                onChange={this.handleEmail}
              />
              <input
                type="text"
                name="name"
                placeholder="Enter Name Here"
                value={name}
                onChange={this.handleName}
              />
              <input
                type="password"
                name=""
                placeholder="Enter Password Here"
                value={password}
                onChange={this.handlePassword}
              />
              <input
                type="password"
                name=""
                placeholder="Enter Confirm Password Here"
                value={confirm_password}
                onChange={this.handleConfirmPassword}
              />
              <button className="btnn" onClick={this.handleSignUp}>
                <a href="#">Sign Up</a>
              </button>
              <p className="link">
                Already have an account?
                <br />
                <Link to="/sign-in">Login in </Link>here
              </p>
              <p className="liw">Sign up with</p>

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

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(SignUp);
