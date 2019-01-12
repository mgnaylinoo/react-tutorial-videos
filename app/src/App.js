import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import BaseRouter from './BaseRouter'

class App extends Component {
  componentDidMount() {
    axios.get('https://api.github.com/repos/sinpaout/first-github/issues', {
      params: {
        state: 'all'
      }
    })
    .then(function (response) {
      const issues = response.data.filter(issue => !issue.pull_request)
      console.log('response', issues);
    })
  }

  render() {
    return (
      <div className="App">
        <BaseRouter />
      </div>
    );
  }
}

export default App;
