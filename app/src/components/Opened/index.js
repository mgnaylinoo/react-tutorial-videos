import React, { Component } from 'react';
import api from '../../service/api'
import Opened from './Opened'

class OpenedHOC extends Component {
  state = {
    issues: [],
    isLoaded: false
  }
  componentDidMount () {
    this.loadList()
  }

  handleClose = (number) => {
    api.patch(`repos/sinpaout/first-github/issues/${number}`, {state: 'closed'}).then((result) => {
      this.loadList()
    })
  }

  loadList = () => {
    api.get('repos/sinpaout/first-github/issues', {
      params: {
        state: 'open'
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
      <Opened {...this.props} issues={this.state.issues} close={this.handleClose} />
    );
  }
}

export default OpenedHOC