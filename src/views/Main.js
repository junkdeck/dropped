import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styled from 'styled-components'

import Dropdown from 'src/components/Dropdown'

import {fetchManagers} from 'src/state/data/creators'

class Main extends Component {
  componentDidMount() {
    this.props.fetchManagers()
  }

  render() {
    return (
      <Wrapper>
        <Dropdown />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 2rem;
`

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
