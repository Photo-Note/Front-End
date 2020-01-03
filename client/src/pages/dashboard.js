import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from "../components/header.js";
import { getPhotoNote } from "../actions/index.js";
import { connect } from "react-redux";
import Card from "../components/card.js";

/**
 * TO-DO - Developer comments
 */
class Dashboard extends React.Component {
  state = {
    photoNotes: []
  };

  componentDidMount() {
    console.log("IN CDM");
    this.props.getPhotoNote(this.state);
  }
  render() {
    return (
      <div>
        <Header />
        {/* <Card imageVal={this.props.imageURL} /> */}
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
    photoNotes: state.photoNotes
  };
};

export default connect(mapStateToProps, { getPhotoNote })(Dashboard);
