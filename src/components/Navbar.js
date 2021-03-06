import React, { Component } from "react";
import { Link } from "react-router-dom";
import { destroySession } from "../actions/auth";
import { connect } from "react-redux";

class Navbar extends Component {
  handleSignOut = (e) => {
    e.preventDefault();

    this.props.dispatch(destroySession());
  };
  render() {
    const { name } = this.props.auth.user;
    return (
      <div className="navbar-main">
        <div className="left-nav">
          <Link to="/">
            <div className="main-logo"></div>
          </Link>
        </div>

        <div className="right-nav">
          <div className="nav-ele right-padding-45">
            <Link to="#">{name}</Link>
          </div>

          <div className="nav-ele">
            <Link to="/sign-in" onClick={this.handleSignOut}>
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
