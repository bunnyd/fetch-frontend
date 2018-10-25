import { GET_PETFINDER_DOGS } from "../actions/types";

const defaultState = {
  petFinderDogs: [],
  petFinderDogsLoaded: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_PETFINDER_DOGS:
      return {
        ...state,
        petFinderDogs: action.payload,
        petFinderDogsLoaded: true
      };
    default:
      return state;
  }
}
