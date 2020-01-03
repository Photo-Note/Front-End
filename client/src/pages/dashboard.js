import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Header from "../components/header.js";
// import { getPhotoNote } from "../actions/index.js";
// import { connect } from "react-redux";
// import Card from "../components/card.js";

/**
 * TO-DO - Developer comments
 */
export default class Dashboard extends React.Component {
  state = {
    imageURL: "",
    message: ""
  };

  componentDidMount() {
    // this.props.getPhotoNote(this.state);
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("++++++++++++++++++++", state.imageURL);
//   return {
//     imageURL: state.imageURL,
//     message: state.message
//   };
// };

// export default connect(mapStateToProps, { getPhotoNote })(Dashboard);
