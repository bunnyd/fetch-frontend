import { combineReducers } from "redux";
import reddit from "./reddit.reducer";

const rootReducer = combineReducers({
  reddit: reddit
});

export default rootReducer;
