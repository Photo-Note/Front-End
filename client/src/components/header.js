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
      var instances = M.Sidenav.init(elems, {});
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
            />
          </div>
        </nav>
      </div>
    );
  }
}
