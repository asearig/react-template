import {
  USER_SET_USER,
  USER_SET_AUTH,
  USER_SET_LOADING,
  USER_SET_ERROR,
} from "../types/actions/user"

export const setCurrentUser = ( user, secret ) => {
  if(secret === "secret"){
    return dispatch => {
      dispatch(setUser(user))
      dispatch(setAuth(true))
    }
  }
  else {
    return dispatch => {
      dispatch(setError(true))
    }
  }
}

export const setUser = (data) => ({
  type: USER_SET_USER,
  data
})

export const setAuth = (data) => ({
  type: USER_SET_AUTH,
  data
})

export const setLoading = (loading = true) => ({
  type: USER_SET_LOADING,
  loading
})

export const setError = (data) => ({
  type: USER_SET_ERROR,
  data
})
