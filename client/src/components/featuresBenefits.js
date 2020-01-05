import React from "react";
import "materialize-css/dist/css/materialize.min.css";

// IMPORTED IMAGES
import FeaturesFlipBackImage from "../assets/Features_Flip_Back_Image.png";
import FeaturesFlipBackText from "../assets/Features_Flip_Back_Text.png";
import FeaturesFlipFrontImage from "../assets/Features_Flip_Front_Image.png";
import FeaturesFlipTextFront from "../assets/Features_Flip_text_Front.png";
import FeaturesDrop1 from "../assets/Features_Drop_1.png";
import FeaturesDrop2 from "../assets/Features_Drop_2.png";
import FeaturesGallery from "../assets/Features_Gallery.png";
import M from "materialize-css";

/**
 * TO-DO - Developer comments
 */
export default class featuresBenefits extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems, {});
    });
  }
  render() {
    return (
      // FEATURES AND BENEFITS SECTION
      <section className="container section center-align">
        <div id="featuresbenefits" />
        <br />
        <br />
        <br />
        <br />

        <h2>Features & Benefits</h2>
        {/* ROW 1 */}
        <div className="row">
          <div className="col s12 m7 l5 push-m2">
            {/* CARDS */}
            <div className="card card-update">
              <img
                src={FeaturesFlipBackImage}
                alt="flip it"
                className="responsive-img phones materialboxed"
              />
              <img
                src={FeaturesFlipBackText}
                alt="flip it"
                className="responsive-img phones materialboxed"
              />
              <h3>Flip It</h3>
            </div>
            <div className="card card-update">
              <img
                src={FeaturesFlipFrontImage}
                alt="glue it 1"
                className="responsive-img phones materialboxed"
              />
              <img
                src={FeaturesFlipTextFront}
                alt="glue it 2"
                className="responsive-img phones materialboxed"
              />
              <h3>Glue it</h3>
            </div>
          </div>
          {/* ROW 2 */}
          <div className="col s12 m7 l5 push-m2 offset-l1">
            <div className="card card-update">
              <div>
                <img
                  src={FeaturesDrop1}
                  alt="drop it 1"
                  className="responsive-img phones materialboxed"
                />
              </div>
              <img
                src={FeaturesDrop2}
                alt=" drop it 2"
                className="responsive-img phones materialboxed"
              />
              <h3>Drop It</h3>
            </div>
            <div className="card card-update">
              <img
                src={FeaturesGallery}
                alt="enjoy it"
                className="responsive-img phones materialboxed"
              />
              <h3>Enjoy It</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
