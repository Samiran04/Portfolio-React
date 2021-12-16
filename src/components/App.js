import React, { Component } from "react";
import { SignIn, SignUp, Home } from "./index";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/test" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
