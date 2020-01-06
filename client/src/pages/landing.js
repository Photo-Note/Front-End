import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Hero from "../components/hero.js";
import HowItWorks from "../components/howItWorks.js";
import InAction from "../components/inAction.js";
import Team from "../components/team.js";
import FeaturesBenefits from "../components/featuresBenefits.js";
import Footer from "../components/footer.js";
import ComingSoon from "../components/comingSoon.js";

/**
 * TO-DO - Developer comments
 */
export default class Landing extends React.Component {
  state = {
    isDashboard: false
  };
  render() {
    return (
      <div>
        <Hero isDashboard={this.state.isDashboard} />
        <HowItWorks />
        <InAction />
        <FeaturesBenefits />
        <ComingSoon />
        <Team />
        <Footer />
      </div>
    );
  }
}
