import { GET_MEETUPS, GET_MEETUP } from "../actions/types";

const defaultState = {
  meetups: [],
  meetup: {}
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_MEETUPS:
      return {
        ...state,
        meetups: action.payload
      };
    case GET_MEETUP:
      return {
        ...state,
        meetup: action.payload
      };
    default:
      return state;
  }
}
