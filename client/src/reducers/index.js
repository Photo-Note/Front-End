import { DUMMY_ACTION } from "../actions";

// This is a dummy action and reducer for boiler plate redux store set-up. This will be updated
// with actual actions during Hackathon.
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DUMMY_ACTION:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
