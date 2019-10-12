import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import data from './data/reducers'
import input from './input/reducers'

const middleware = [thunk]

const rootReducer = combineReducers({
  data,
  input,
})

export const store = createStore(rootReducer, applyMiddleware(...middleware))
