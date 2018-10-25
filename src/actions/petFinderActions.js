import { GET_PETFINDER_DOGS } from "./types";

export const fetchPetFinderDogs = () => {
  return dispatch => {
    fetch("https://www.reddit.com/r/WhatsWrongWithYourDog/.json")
      .then(resp => resp.json())
      .then(posts => {
        dispatch({
          type: GET_PETFINDER_DOGS,
          payload: posts.data.children
        });
      });
  };
};
