import React, {Component} from 'react'
import styled from 'styled-components'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {searchInput} from 'src/state/input/creators'
import {getSearchInputValue} from 'src/state/input/selectors'

import {ESCAPE_KEYS} from 'src/constants'

class Input extends Component {
  onChange = e => {
    this.props.searchInput(e.target.value)
  }

  shouldBlur = e => {
    if (ESCAPE_KEYS.includes(e.keyCode)) {
      e.target.blur()
    }
  }

  render() {
    return (
      <TextInput
        onChange={this.onChange}
        onKeyDown={this.shouldBlur}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        value={this.props.value}
      />
    )
  }
}

const TextInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.5rem;
  width: 100%;
`

const mapStateToProps = state => ({
  value: getSearchInputValue(state),
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      searchInput,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input)
