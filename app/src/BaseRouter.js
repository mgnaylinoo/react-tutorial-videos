import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home'
import Opened from './components/Opened'
import Closed from './components/Closed'
import New from './components/New'

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
            <Route path="/new" component={New} />
          </div>
        </Router>
      </div>
    );
  }
}

export default BaseRouter;
