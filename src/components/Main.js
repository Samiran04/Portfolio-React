import React, { Component } from "react";
import { Link } from "react-router-dom";
import { destroySession } from "../actions/auth";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class Main extends Component {
  handleSignOut = (e) => {
    e.preventDefault();

    this.props.dispatch(destroySession());
  };
  render() {
    const { isLoggedIn } = this.props.auth;

    //const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (!isLoggedIn) {
      return <Navigate to="/sign-in" />;
    }

    //console.log("HERE", this.props);

    return (
      <div className="main">
        <div>
          <button onClick={this.handleSignOut}>Sign Out</button>
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

export default connect(mapStateToProps)(Main);
