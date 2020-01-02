import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../styles/landing.scss";
import logo from "../assets/photonote_logo.svg";

/**
 * TO-DO - Developer comments
 */
export default class header extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, { edge: "right" });
    });
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper header-bg">
          <div className="container">
            <img
              className="responsive-img"
              src={logo}
              width="250"
              height="auto"
              alt="Photonote app logo"
            />
            <a
              href="#test"
              className="sidenav-trigger right"
              data-target="mobile-links"
            >
              <i className="material-icons turbo-text">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="active">
                <a href="#test" className="turbo-text nav-text">
                  How it works
                </a>
              </li>
              <li>
                <a href="#test" className="turbo-text nav-text">
                  Features & Benefits
                </a>
              </li>
              <li>
                <a href="#test" className="turbo-text nav-text">
                  Team
                </a>
              </li>
              <li>
                <a href="#test" className="turbo-text nav-text">
                  My Photos
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav header-bg turbo-text nav-text" id="mobile-links">
          <li className="active">
            <a href="#test" className="yellow-text nav-text">
              How it works
            </a>
          </li>
          <li>
            <a href="#test" className="yellow-text nav-text">
              Features and Benefits
            </a>
          </li>
          <li>
            <a href="#test" className="yellow-text nav-text">
              Team
            </a>
          </li>
          <li>
            <a href="www.google.com" className="yellow-text nav-text">
              My Photos
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
