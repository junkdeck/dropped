import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styled from 'styled-components'

import ListItem from 'src/components/ListItem'

import {searchInput} from 'src/state/input/creators'
import {getFilteredEmployeeList} from 'src/state/data/selectors'

class EmployeeList extends Component {
  onClick = value => {
    this.props.searchInput(value)
  }

  render() {
    return (
      <List>
        {this.props.list.length ? (
          this.props.list.map(employee => (
            <ListItem
              user={employee}
              key={employee.id}
              onClick={this.onClick}
            />
          ))
        ) : (
          <Empty>No results...</Empty>
        )}
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

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;

  font-family: sans-serif;
  font-style: oblique;

  color: #888;

  border-bottom: 1px solid #ccc;
`

const mapStateToProps = state => ({
  list: getFilteredEmployeeList(state),
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
)(EmployeeList)
