import * as Action from "../actions";

const initialState = {
  profileName: "Hamza Tariq"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_PROFILE_NAME:
      return {
        ...state,
        profileName: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default profileReducer;
