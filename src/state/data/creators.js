import axios from 'axios'

import {LOAD_REQUEST, LOAD_ERROR, LOAD_SUCCESS} from './actions'

import {LIST_URL} from 'src/constants'

export const fetchManagers = () => dispatch => {
  dispatch({type: LOAD_REQUEST})

  axios
    .get(LIST_URL)
    .then(res => {
      console.log(res)
      dispatch({
        type: LOAD_SUCCESS,
        employees: res.data.data,
        accounts: res.data.included,
      })
    })
    .catch(err => {
      console.log(Object.entries(err))
      dispatch({type: LOAD_ERROR})
    })
}
