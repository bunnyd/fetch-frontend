import { GET_YELP_DOG_PARKS, GET_YELP_DOG_RESTAURANTS } from "./types";

export const fetchDogParks = () => {
  return dispatch => {
    fetch("http://localhost:3000/search-dog-park", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        zip_code: 77377
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

export const fetchDogRestaurants = () => {
  return dispatch => {
    fetch("http://localhost:3000/search-dog-restaurants", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        zip_code: 77377
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
