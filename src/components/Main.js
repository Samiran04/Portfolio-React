import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Navbar, CreateNew, Outlet } from "./index";

class Main extends Component {
  render() {
    const { isLoggedIn } = this.props.auth;

    //const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (!isLoggedIn) {
      return <Navigate to="/sign-in" />;
    }

    return (
      <div className="main-home">
        <Navbar />
        <div className="components">
          <CreateNew />
          <Outlet />
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
