import React from "react";
import "materialize-css/dist/css/materialize.min.css";

//IMPORTED IMAGES
import logo from "../assets/photonote_logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
/**
 * TO-DO - Developer comments
 */
export default class footer extends React.Component {
  state = {
    isNameError: false,
    isEmailError: false,
    nameError: "",
    emailError: ""
  };
  render() {
    return (
      <div className="footer">
        <div id="footertop">
          <img src={logo} id="logo" alt="logo" />
          <div id="socialmedia">
            <img src={facebook} className="social" alt="facebook" />
            <img src={twitter} className="social" alt="twitter" />
          </div>
        </div>
        <div id="footerbottom">
          <div className="footer-contents">
            <form className="footer-sections">
              <h5 className="subscribe">
                Subscribe and See What's Happening at PhotoNote
              </h5>
              <div className="inputs">
                <div className="input-field">
                  <input
                    id="name"
                    type="text"
                    placeholder="name"
                    className="input-element"
                  />
                </div>

                <div className="input-field">
                  <input
                    id="email"
                    type="email"
                    placeholder="email"
                    className="inpute-element"
                  />
                </div>

                <button className="btn-submit" type="submit" name="action">
                  Submit
                </button>
              </div>
            </form>
            <div className="bottomnav row">
              <div className="col s12 m12 l12 center-align">
                <a href="#" className="bottom">
                  About
                </a>
                <a href="#" className="bottom">
                  Contact
                </a>
                <a href="#" className="bottom">
                  Privacy
                </a>
                <a href="#" className="bottom">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
