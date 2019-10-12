import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Input from 'src/components/Input'
import ListItem from 'src/components/ListItem'

import {fetchManagers} from 'src/state/data/creators'
import {searchInput} from 'src/state/input/creators'
import {getFilteredEmployeeList} from 'src/state/data/selectors'

class Main extends Component {
  componentDidMount() {
    this.props.fetchManagers()
  }

  render() {
    return (
      <div>
        <Input />

        {this.props.list.map(x => (
          <ListItem user={x} key={x.name} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: getFilteredEmployeeList(state),
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchManagers,
      searchInput,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
