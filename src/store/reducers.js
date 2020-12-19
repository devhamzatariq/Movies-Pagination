import { combineReducers } from "redux";
import homeReducer from "./reducers/home.reducer";
import profileReducer from "./reducers/profile.reducer";
export default combineReducers({
  home: homeReducer,
  profile: profileReducer
});
