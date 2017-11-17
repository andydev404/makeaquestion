import React, { Component } from 'react';
import Question from './Question';

class Questions extends Component {
  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.props.handleRemove} className="btn btn-outline-danger mb-4">Remove All</button>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Question</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.questionsList.map((question, index) => {
                return <Question key={index} number={index} handleRemoveQuestion={this.props.handleRemoveQuestion} questionsList={question} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Questions;
