import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from "../components/header.js";
import { getPhotoNote } from "../actions/index.js";
import { connect } from "react-redux";
import Card from "../components/card.js";
import Cards from "../components/cards.js";
import "../styles/dashboard.scss";
import Tabs from "../components/tabs.js";

/**
 * TO-DO - Developer comments
 */
class Dashboard extends React.Component {
  state = {
    selected: "All",
    tabs: ["All", "My Drops", "My Flips", "My Glues"],
    photoNotes: [],
    filteredPhotoNotes: []
  };

  componentDidMount() {
    console.log("IN CDM");
    this.props.getPhotoNote(this.state);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="tabs-container">
          <Tabs
            tabs={this.state.tabs}
            selectedTab={this.state.selected}
            onClick={this.selectTabHandler}
          />
        </div>
        <div className="container cards-container">
          <Cards cards={this.state.photoNotes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("++++++++++++++++++++", state.photoNotes);
  // return {
  //   imageURL: state.imageURL,
  //   message: state.message
  // };
  return {
    ...state,
    photoNotes: state.photoNotes,
    filteredPhotoNotes: state.photoNotes
  };
};

export default connect(mapStateToProps, { getPhotoNote })(Dashboard);
