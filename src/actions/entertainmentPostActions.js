export function fetchPosts() {
  return dispatch => {
    fetch("https://www.reddit.com/r/WhatsWrongWithYourDog/.json")
      .then(resp => resp.json())
      .then(posts => {
        dispatch({
          type: "GET_REDDIT_POSTS",
          payload: posts.data.children
        });
      });
  };
}
