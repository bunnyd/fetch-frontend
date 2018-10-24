import { combineReducers } from "redux";
import reddit from "./reddit.reducer";
import yelp from "./yelp.reducer";
import { meetup, meetups } from "./meetup.reducer";
import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  reddit: reddit,
  yelp: yelp,
  meetup,
  meetups,
  authentication,
  alert
});

export default rootReducer;
