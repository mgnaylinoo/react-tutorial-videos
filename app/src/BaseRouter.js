import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BaseRouter extends Component {
  render() {
    return (
      <div className="base-router">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
}

export default BaseRouter;
