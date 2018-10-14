import { GET_REDDIT_POSTS } from "./types";

export const fetchPosts = () => {
  return dispatch => {
    fetch("https://www.reddit.com/r/WhatsWrongWithYourDog/.json")
      .then(resp => resp.json())
      .then(posts => {
        dispatch({
          type: GET_REDDIT_POSTS,
          payload: posts.data.children
        });
      });
  };
};

// import axios from "axios";
//
// export const fetchPosts = () => async dispatch => {
//   const res = await axios.get(
//     "https://www.reddit.com/r/WhatsWrongWithYourDog/.json"
//   );
//   // debugger;
//   dispatch({
//     type: GET_REDDIT_POSTS,
//     payload: res.data.data.children
//   });
// };
