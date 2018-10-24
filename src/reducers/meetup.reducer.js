import { GET_MEETUPS, GET_MEETUP } from "../actions/types";

// const defaultState = {
//   meetups: [],
//   meetup: {}
// };

export function meetups(state = [], action) {
  switch (action.type) {
    case GET_MEETUPS:
      return [...action.payload];
    default:
      return state;
  }
}

export function meetup(state = {}, action) {
  switch (action.type) {
    case GET_MEETUP:
      return { ...action.payload };
    default:
      return state;
  }
}
