import {combineReducers} from 'redux'

import {LOAD_REQUEST, LOAD_ERROR, LOAD_SUCCESS} from './actions'

const employees = (state = [], action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return action.employees
    case LOAD_REQUEST:
    case LOAD_ERROR:
      return []
    default:
      return state
  }
}

const accounts = (state = [], action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return action.accounts
    case LOAD_ERROR:
    case LOAD_REQUEST:
      return []
    default:
      return state
  }
}

export default combineReducers({employees, accounts})
