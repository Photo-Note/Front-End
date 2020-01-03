import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import HeaderSection from "./header.js";
import M from "materialize-css";
import Carousel1 from "../assets/Carousel 1.png";
import Carousel2 from "../assets/Carousel 2.png";
import Carousel3 from "../assets/Carousel 3.png";
import Carousel4 from "../assets/Carousel 4.png";
import DFWImage from "../assets/dropFlipWrite.png";
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
        <br />
        <br />
        <div className="container hero-footer">
          <img
            src={DFWImage}
            alt=""
            className="heroFooter-img responsive-img"
          />
        </div>
        <div className="container hero-section">
          <div className="carousel valign-wrapper hero-left">
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel2} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel3} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel4} className="carousel-img" />
            </a>
          </div>
          <div className="col s4 m4 l4 valign-wrapper hero-right">
            <div className="hero-right-content hero-right-text row">
              Try it Now!
              <img
                src={HeroAppStore}
                alt=""
                className="responsive-img heroAppStore-img"
              />
              <a href="#" className="alink">
                Or Get a Text!
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
