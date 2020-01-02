import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import HeaderSection from "./header.js";
import M from "materialize-css";
import Carousel1 from "../assets/Carousel 1.png";
import "../styles/landing.scss";
import HeroAppStore from "../assets/heroAppStore.png";

/**
 * TO-DO - Developer comments
 */
export default class hero extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, { numVisible: 4 });
    });
  }
  render() {
    return (
      <header>
        <HeaderSection />
        <div className="container row">
          <div className="carousel valign-wrapper col s6 m8 l8">
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
          </div>
          <div className="col s6 m4 l4 valign-wrapper hero-right">
            <div className="hero-right-content">
              <span>Try it Now!</span>
              <img src={HeroAppStore} alt="" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
