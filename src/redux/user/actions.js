import UserActionTypes from "./action-types";

export function LoginUser(payload) {
  return {
    type: UserActionTypes.LOGIN,
    payload
  }
}

export function LogoutUser() {
  return {
    type: UserActionTypes.LOGIN,
  }
}
