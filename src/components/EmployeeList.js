import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import ListItem from 'src/components/ListItem'

import {getFilteredEmployeeList} from 'src/state/data/selectors'

class EmployeeList extends Component {
  render() {
    return (
      <List>
        {this.props.list.map(employee => (
          <ListItem user={employee} key={employee.id} />
        ))}
      </List>
    )
  }
}

const List = styled.ul`
  overflow: hidden;

  list-style: none;

  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 4px;
`

const mapStateToProps = state => ({
  list: getFilteredEmployeeList(state),
})

export default connect(mapStateToProps)(EmployeeList)
