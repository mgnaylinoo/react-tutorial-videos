import React, { Component } from 'react';
import api from '../../service/api'
import New from './New'

class NewHOC extends Component {
  state = {
  }
  componentDidMount () {
  }

  render() {
    return (
      <New {...this.props} />
    );
  }
}

export default NewHOC