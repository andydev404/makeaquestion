import React, { Component } from 'react';

class FormHeader extends Component {
  constructor(props) {
    super(props);
    this.submitform = this.submitform.bind(this);
    this.state = {
      error: undefined
    };
  }
  submitform(e) {
    e.preventDefault();
    const question = {
      firstName: e.target.elements.firstName.value.trim(),
      lastName: e.target.elements.lastName.value.trim(),
      question: e.target.elements.question.value.trim()
    };
    const error = this.props.handleQuestions(question);
    this.setState(() => {
      return { error }
    });
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
          <form onSubmit={this.submitform}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" name="firstName"/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" name="lastName"/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Question</label>
                  <input type="text" className="form-control" name="question"/>
                </div>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-outline-dark">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormHeader;
