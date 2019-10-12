import {combineReducers} from 'redux'

import {SEARCH_INPUT} from './actions'

const search = (state = '', action) => {
  switch (action.type) {
    case SEARCH_INPUT:
      return action.input
    default:
      return state
  }
}

export default combineReducers({search})
