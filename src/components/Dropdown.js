import React, {Component} from 'react'
import styled from 'styled-components'

import Input from 'src/components/Input'
import EmployeeList from 'src/components/EmployeeList'

import {ESCAPE_KEYS} from 'src/constants'

class Dropdown extends Component {
  state = {
    showList: false,
  }

  onFocus = () => {
    console.log('focus')
    this.setState({showList: true})
  }

  onBlur = () => {
    console.log('blur')
    this.setState({showList: false})
  }

  handleEsc = e => {
    if (this.state.showList && ESCAPE_KEYS.includes(e.keyCode)) {
      this.setState({showList: false})
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc, false)
  }

  render() {
    console.log(this.state.showList)
    return (
      <DropdownWrapper>
        <Input onFocus={this.onFocus} onBlur={this.onBlur} />
        <CollapseWrapper
          style={{
            maxHeight: this.state.showList ? '30rem' : '0',
          }}
        >
          <EmployeeList />
        </CollapseWrapper>
      </DropdownWrapper>
    )
  }
}

const DropdownWrapper = styled.div`
  position: relative;

  width: 100%;
`

const CollapseWrapper = styled.div`
  position: absolute;
  width: 100%;

  overflow-y: scroll;

  transition: 300ms ease-in-out;
`

export default Dropdown
