import { DUMMY_ACTION, GET_PHOTONOTE } from "../actions";

// This is a dummy action and reducer for boiler plate redux store set-up. This will be updated
// with actual actions during Hackathon.
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTONOTE:
      return {
        ...state,
        photoNotes: action.payload.photoNotes,
        filteredPhotoNotes: action.payload.photoNotes
      };
    default:
      return state;
  }
};

export default reducer;
