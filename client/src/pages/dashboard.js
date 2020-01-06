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

  async componentDidMount() {
    await this.props.getPhotoNote(this.state);
    console.log(
      "-------------RENDER FUNCTION IN CMD" + this.state.filteredPhotoNotes
    );
    console.log("-------------RENDER FUNCTION IN CMD" + this.state.photoNotes);
  }
  componentDidUpdate(prevProps) {
    console.log("--------------------prev", prevProps);
    if (this.props.photoNotes !== prevProps.photoNotes) {
      this.setState({
        ...this.state,
        photoNotes: this.props.photoNotes,
        filteredPhotoNotes: this.props.filteredPhotoNotes
      });
    }
  }

  selectTabHandler = tab => {
    this.setState(prevState => {
      const filteredPhotoNotes = prevState.photoNotes.filter(photoNote => {
        return photoNote.tab.includes(tab);
      });
      if (!(filteredPhotoNotes.length === 0)) {
        return {
          selected: tab,
          filteredPhotoNotes
        };
      } else {
        return {
          selected: tab,
          filteredPhotoNotes: this.state.photoNotes
        };
      }
    });
  };
  render() {
    console.log("-------------RENDER FUNCTION" + this.props.filteredPhotoNotes);
    console.log("-------------RENDER FUNCTION" + this.props.photoNotes);
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
          <Cards cards={this.state.filteredPhotoNotes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("++++++++++++++++++++", state.photoNotes);
  console.log("++++++++++++++++++++", state.filteredPhotoNotes);
  // return {
  //   imageURL: state.imageURL,
  //   message: state.message
  // };
  return {
    ...state,
    photoNotes: state.photoNotes,
    filteredPhotoNotes: state.filteredPhotoNotes
  };
};

export default connect(mapStateToProps, { getPhotoNote })(Dashboard);
