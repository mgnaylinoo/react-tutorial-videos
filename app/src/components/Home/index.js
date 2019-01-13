import React, { Component } from 'react';
import Home from './Home'
import api from '../../service/api'

class HomeHOC extends Component {
  state = {
    issues: [],
    isLoaded: false
  }
  componentDidMount () {
    api.get('repos/sinpaout/first-github/issues', {
      params: {
        state: 'all'
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
      <Home {...this.props} issues={this.state.issues} />
    );
  }
}

export default HomeHOC