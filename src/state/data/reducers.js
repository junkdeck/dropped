import {combineReducers} from 'redux'

import {LOAD_REQUEST, LOAD_ERROR, LOAD_SUCCESS} from './actions'

const managers = (state = [], action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return action.list
    case LOAD_REQUEST:
    case LOAD_ERROR:
      return []
    default:
      return state
  }
}

export default combineReducers({managers})
