const defaultState = {
  posts: [],
  postsLoaded: false
};

export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_REDDIT_POSTS":
      return {
        ...state,
        posts: action.payload,
        postsLoaded: true
      };
    default:
      return state;
  }
}
