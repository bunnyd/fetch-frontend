import { combineReducers } from "redux";
import reddit from "./reddit.reducer";
import yelp from "./yelp.reducer";
import meetup from "./meetup.reducer";

const rootReducer = combineReducers({
  reddit: reddit,
  yelp: yelp,
  meetup: meetup
});

export default rootReducer;
