import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';

class BaseRouter extends Component {
  render() {
    return (
      <div className="base-router">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/opened" component={Opened} />
            <Route path="/closed" component={Closed} />
          </div>
        </Router>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Opened() {
  return (
    <div>
      <h2>Opened</h2>
    </div>
  );
}

function Closed() {
  return (
    <div>
      <h2>Closed</h2>
    </div>
  );
}

export default BaseRouter;
