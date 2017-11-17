import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleRemoveItem() {
    this.props.handleRemoveQuestion(this.props.number);
  }
  render() {
    return (
      <tr>
        <th>{this.props.number + 1}</th>
        <td>{this.props.questionsList.firstName}</td>
        <td>{this.props.questionsList.lastName}</td>
        <td>{this.props.questionsList.question}?</td>
        <td><button type="button" onClick={this.handleRemoveItem} className="btn btn-outline-danger">Remove</button></td>
      </tr>
    );
  }
}

export default Question;
