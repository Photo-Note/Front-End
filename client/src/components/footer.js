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
          <div className="row">
            <form className="col sub s12 l7">
              <h5 className="subscribe col l4">
                Subscribe and See What's Happening at PhotoNote
              </h5>
              <div className="inputs">
                <div className="row">
                  <div className="input-field col l10">
                    <input id="name" type="text" placeholder="name" />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col l10">
                    <input id="email" type="email" placeholder="email" />
                  </div>
                  <button
                    className="btn waves-effect waves-light col l10"
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
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
    );
  }
}
