import * as Action from "../actions";

const initialState = {
  homeName: "hamza"
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_NAME:
      return {
        ...state,
        homeName: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default homeReducer;
