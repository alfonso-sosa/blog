import * as actions from "../actions";

export default (state={
  users: []
}, action) => {
  switch (action.type) {
    case actions.FETCH_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}