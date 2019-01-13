import React, { Component } from 'react';

class Closed extends Component {
  render() {
    const issues = this.props.issues.map((issue) => {
      return (
        <tr key={issue.number}>
          <td>{issue.number}</td>
          <td>{issue.title}</td>
          <td>{issue.body}</td>
          <td>
            <button className="btn btn-primary" onClick={() => this.props.reopen(issue.number)}>
              Reopen
            </button>
          </td>
        </tr>
      )
    })

    return (
      <div className="home">
        <h2>Closed issues</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {issues}
          </tbody>
        </table>
      </div>
    );
  }}

export default Closed;
