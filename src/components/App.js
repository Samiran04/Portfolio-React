import React, { Component } from "react";
import { SignIn, SignUp, Home, Main } from "./index";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { createSessionSuccess } from "../actions/auth";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt_decode(token);

      this.props.dispatch(
        createSessionSuccess({
          name: user.name,
          _id: user._id,
          email: user.email,
          password: user.password,
        })
      );
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/main" element={Main} />
          </Routes>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
