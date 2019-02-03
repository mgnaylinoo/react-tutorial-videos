import React, { Component } from 'react';

class New extends Component {
  render() {
    return (
      <div className="new-issue container">
        <h2>New issue</h2>
        <form>
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Title" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="Comment"></textarea>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-primary">Submit new issue</button>
          </div>
        </form>
      </div>
    );
  }}

export default New;
