import React, { Component } from 'react';
import Closed from './Closed'
import api from '../../service/api'

class ClosedHOC extends Component {
  state = {
    issues: [],
    isLoaded: false
  }

  componentDidMount () {
    this.loadList()
  }

  handleReopen = (number) => {
    api.patch(`repos/sinpaout/first-github/issues/${number}`, {state: 'open'}).then((result) => {
      this.loadList()
    })
  }

  loadList = () => {
    api.get('repos/sinpaout/first-github/issues', {
      params: {
        state: 'closed'
      }
    }).then(result => {
      const issues = result.data.filter(issue => !issue.pull_request)

      this.setState({issues: issues, isLoaded: true})
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return (<div>Loading...</div>)
    }
    return (
      <Closed {...this.props} issues={this.state.issues} reopen={this.handleReopen} />
    );
  }
}

export default ClosedHOC