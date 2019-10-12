import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Input from 'src/components/Input'
import ListItem from 'src/components/ListItem'

import {fetchManagers} from 'src/state/data/creators'
import {getFormattedEmployeeList} from 'src/state/data/selectors'

class Main extends Component {
  state = {
    input: '',
  }

  onChange = e => {
    this.setState({input: e.target.value})
  }

  componentDidMount() {
    this.props.fetchManagers()
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        <Input value={this.state.input} onChange={this.onChange} />

        {this.props.list
          .filter(x => x.name.includes(this.state.input))
          .map(x => (
            <ListItem user={x} key={x.name} />
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: getFormattedEmployeeList(state),
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchManagers,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
