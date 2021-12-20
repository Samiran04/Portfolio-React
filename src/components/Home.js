import React, { Component } from "react";
import { Link } from "react-router-dom";
import facebook_logo from "../images/facebook.png";
import insta_logo from "../images/insta.jpg";
import twitter_logo from "../images/twitter.png";
import pinterest_logo from "../images/pinterest.png";

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
        <div className="join-div">
          <p>Work with us</p>
        </div>
        <div className="footer">
          <div className="footer-in">
            <div className="footer-summary">
              Working with talented and driven people is our passion;
              <br /> we would like to build something great together.
            </div>
            <div className="footer-details">
              <div className="footer-fields">
                <h6>Address</h6>
                <div className="line"></div>
                <p>
                  500 E 4th Street Suite 445
                  <br />
                  Austin, TX 78701
                </p>
              </div>

              <div className="footer-fields">
                <h6>Contact</h6>
                <div className="line"></div>
                <p>
                  +1 512 987 9147
                  <br />
                  hello@stevewolf.co
                </p>
              </div>

              <div className="footer-fields">
                <h6>Social</h6>
                <div className="line"></div>
                <div className="footer-social">
                  <div className="logos">
                    <img src={facebook_logo} />
                  </div>

                  <div className="logos">
                    <img src={twitter_logo} />
                  </div>

                  <div className="logos">
                    <img src={insta_logo} />
                  </div>

                  <div className="logos">
                    <img src={pinterest_logo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
