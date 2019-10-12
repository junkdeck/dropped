import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Input from 'src/components/Input'

import {fetchManagers} from 'src/state/data/creators'

class Main extends Component {
  componentDidMount() {
    this.props.fetchManagers()
  }

  render() {
    return (
      <div>
        <Input />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchManagers,
    },
    dispatch,
  ),
})

export default connect(
  null,
  mapDispatchToProps,
)(Main)
