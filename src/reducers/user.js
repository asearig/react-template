import { USER_SET_USER } from "../types/actions/user"
import { USER_SET_AUTH } from "../types/actions/user"
import { USER_SET_ERROR } from "../types/actions/user"

const userState = {
  name: '',
  authenticated: false,
  error: false
}

const User = (state = userState, action) => {
  switch (action.type) {
    case USER_SET_USER:
        return {
          ...state,
          name: action.data
        }
    case USER_SET_AUTH:
        return {
          ...state,
          authenticated: action.data
        }
    case USER_SET_ERROR:
        return {
          ...state,
          error: action.data
        }
    default:
      return state
  }
}

export default User