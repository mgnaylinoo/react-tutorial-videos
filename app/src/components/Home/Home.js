import React, { Component } from 'react';

class Home extends Component {
  render() {
    const issues = this.props.issues.map((issue) => {
      return (
        <tr key={issue.number}>
          <td>{issue.number}</td>
          <td>{issue.state}</td>
          <td>{issue.title}</td>
          <td>{issue.body}</td>
        </tr>
      )
    })

    return (
      <div className="home">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>State</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {issues}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
