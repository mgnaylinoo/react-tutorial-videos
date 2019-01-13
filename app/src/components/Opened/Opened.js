import React, { Component } from 'react';

class Opened extends Component {
  render() {
    const issues = this.props.issues.map((issue) => {
      return (
        <tr key={issue.number}>
          <td>{issue.number}</td>
          <td>{issue.title}</td>
          <td>{issue.body}</td>
          <td>
            <button className="btn btn-primary" onClick={() => this.props.close(issue.number)}>
              Close
            </button>
          </td>
        </tr>
      )
    })

    return (
      <div className="home">
        <h2>Opened</h2>
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

export default Opened;
