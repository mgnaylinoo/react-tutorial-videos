import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import BaseRouter from './BaseRouter'

class App extends Component {
  componentDidMount() {
    // axios.get('https://api.github.com/repos/sinpaout/first-github/issues', {
    //   params: {
    //     state: 'all'
    //   }
    // })
    // .then(function (response) {
    //   const issues = response.data.filter(issue => !issue.pull_request)
    //   console.log('response', issues);
    // })
  }

  handleButtonClick = () => {
    axios.post('https://api.github.com/repos/sinpaout/first-github/issues', {
      "title": "Found a bug 2",
      "body": "I'm having a problem with this.",
    },
    {
      headers: {'Authorization': 'token b50b42dc2ca7fea1c34169a805891711c0753571'}
    })
    .then(function (response) {
      console.log('response', response);
    }).catch(err => {
      console.log('err', err);
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
