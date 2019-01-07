import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BaseRouter from './BaseRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BaseRouter />
      </div>
    );
  }
}

export default App;
