import React, { Component } from 'react';
import { Form, Field } from "react-final-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class New extends Component {
  handleCreateIssue = async (values) => {
    // await sleep(3000)
    await this.props.onCreate(values)
    console.log('values', values);
  }

  renderTitle = (fieldProps) => {
    return (
      <div>
        <input type="text" {...fieldProps.input} className="form-control" placeholder="Title" />
        {fieldProps.meta.error && fieldProps.meta.touched && 
          <span className="error-color">{fieldProps.meta.error}</span>}
      </div>
    )
  }

  renderComment = (fieldProps) => {
    return (
      <div>
        <textarea {...fieldProps.input} className="form-control" rows="5" placeholder="Comment" />
      </div>
    )
  }

  renderForm = (formProps) => {
    return (
      <form onSubmit={formProps.handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="form-group">
              <Field name="title">{this.renderTitle}</Field>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="form-group">
              <Field name="body">{this.renderComment}</Field>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <button type="submit" className="btn btn-primary"
            disabled={formProps.submitting || !formProps.valid}>
            {formProps.submitting ? 'Creating issue...' : 'Submit new issue'}
          </button>
        </div>
      </form>
    )
  }

  validate = (values) => {
    const errors = {};
    if (!values.title || values.title.trim().length < 1) {
      errors.title = 'Title is required'
    }
    return errors;
  }

  render() {
    return (
      <div className="new-issue container">
        <h2>New issue</h2>
        <Form
          onSubmit={this.handleCreateIssue}
          validate={this.validate}
          render={this.renderForm} />
      </div>
    );
  }}

export default New;
