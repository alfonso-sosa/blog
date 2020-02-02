import * as actions from "../actions";

export default (state = {
  posts: []
}, action) => {
  switch(action.type) {
    case actions.FETCH_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload]
      };
    default:
      return state
  }
};
