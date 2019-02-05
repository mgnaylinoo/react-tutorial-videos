import React, { Component } from 'react';
import api from '../../service/api'
import New from './New'

class NewHOC extends Component {
  state = {
  }
  componentDidMount () {
  }

  handleCreateIssue = (params) => {
    return api.post(`repos/sinpaout/first-github/issues`, params)
  }

  render() {
    return (
      <New {...this.props} onCreate={this.handleCreateIssue} />
    );
  }
}

export default NewHOC