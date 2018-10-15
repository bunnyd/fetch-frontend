import { GET_YELP_DOG_PARKS, GET_YELP_DOG_RESTAURANTS } from "../actions/types";

const defaultState = {
  dogParks: [],
  yelpDogParksLoaded: false,
  dogRestaurants: [],
  yelpDogRestaurantsLoaded: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_YELP_DOG_PARKS:
      return {
        ...state,
        dogParks: action.payload,
        yelpDogParksLoaded: true
      };
    case GET_YELP_DOG_RESTAURANTS:
      return {
        ...state,
        dogRestaurants: action.payload,
        yelpDogRestaurantsLoaded: true
      };
    default:
      return state;
  }
}
