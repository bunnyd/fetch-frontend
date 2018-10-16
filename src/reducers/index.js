import { combineReducers } from "redux";
import reddit from "./reddit.reducer";
import yelp from "./yelp.reducer";
import meetup from "./meetup.reducer";
import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  reddit: reddit,
  yelp: yelp,
  meetup: meetup,
  authentication,
  alert
});

export default rootReducer;
