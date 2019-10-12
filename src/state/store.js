import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import data from './data/reducers'

const middleware = [thunk]

const rootReducer = combineReducers({
  data,
})

export const store = createStore(rootReducer, applyMiddleware(...middleware))
