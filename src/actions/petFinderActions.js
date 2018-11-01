import { GET_PETFINDER_DOGS } from "./types";

export const fetchPetFinderDogs = zipCode => {
  return dispatch => {
    fetch(
      "https://nameless-everglades-31188.herokuapp.com/search-petfinder-dogs",
      {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          zip_code: zipCode
        })
      }
    )
      .then(resp => resp.json())
      .then(results => {
        dispatch({
          type: GET_PETFINDER_DOGS,
          payload: results.petfinder.pets.pet
        });
      });
  };
};
