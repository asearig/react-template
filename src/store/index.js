import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { routerMiddleware } from "react-router-redux"
import { connectRouter } from 'connected-react-router'
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"
import { camelCase } from "lodash"

// REDUCERS
let reducers = {}
let defaults = {}
const reducersReq = require.context("../reducers", true, /^(.*\.(js$))[^.]*$/im)
reducersReq.keys().forEach(key => {
  const reducerName = camelCase(key.match(/.\/([\w-]+).js/)[1])
  reducers[reducerName] = reducersReq(key).default
  defaults[reducerName] = reducersReq(key)[`${reducerName}ReducerDefaultState`]
})

export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers
  }),
  initialState,
  composedEnhancers
)

export default store
