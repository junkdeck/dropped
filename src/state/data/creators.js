import {LOAD_REQUEST, LOAD_ERROR, LOAD_SUCCESS} from './actions'

export const fetchManagers = () => dispatch => {
  console.log('fetch manager list')
  dispatch({type: LOAD_REQUEST})
}
