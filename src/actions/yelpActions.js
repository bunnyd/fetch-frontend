import { GET_YELP_DOG_PARKS, GET_YELP_DOG_RESTAURANTS } from "./types";

export const fetchDogParks = zipCode => {
  return dispatch => {
    // fetch("https://nameless-everglades-31188.herokuapp.com/search-dog-park", {
    fetch("http://localhost:3000/search-dog-park", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        zip_code: zipCode
      })
    })
      .then(resp => resp.json())
      .then(results => {
        dispatch({
          type: GET_YELP_DOG_PARKS,
          payload: results.businesses
        });
      });
  };
};

export const fetchDogRestaurants = zipCode => {
  // debugger;
  return dispatch => {
    // fetch(
    //   "https://nameless-everglades-31188.herokuapp.com/search-dog-restaurants",
    fetch("http://localhost:3000/search-dog-restaurants", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        zip_code: zipCode
      })
    })
      .then(resp => resp.json())
      .then(results => {
        dispatch({
          type: GET_YELP_DOG_RESTAURANTS,
          payload: results.businesses
        });
      });
  };
};
