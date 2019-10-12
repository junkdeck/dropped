import React, {Component} from 'react'
import {Provider} from 'react-redux'

import Main from 'src/views/Main'

import {store} from 'src/state/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App
