import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null
}

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload }
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null }
    default:
      return state;
  }
}
