import { GET_PETFINDER_DOGS } from "./types";
// import axios from "axios";

// export const fetchPetFinderDogs = () => {
//   return dispatch => {
//     fetch(
//       `http://api.petfinder.com/pet.find?format=json&animal=dog&key=cfae35961a8762bd9594e3cff26156d1&location=77377`
//     )
//       .then(resp => resp.json())
//       .then(console.log);
//   };
// };

export const fetchPetFinderDogs = zipCode => {
  return dispatch => {
    fetch("http://localhost:3000/search-petfinder-dogs", {
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
          type: GET_PETFINDER_DOGS,
          payload: results.petfinder.pets.pet
        });
      });
  };
};
// .then(posts => {
//   dispatch({
//     type: GET_PETFINDER_DOGS,
//     payload: posts.data.children
//   });
// });
// export const fetchPetFinderDogs = zip_code => async dispatch => {
//   const res = await axios.get(`http://api.petfinder.com/pet.find?format=json&animal=dog&key=cfae35961a8762bd9594e3cff26156d1&location=77377${zip_code}`);
//   dispatch({
//     type: GET_PETFINDER_DOGS,
//     payload: res.data
//   });
// };
