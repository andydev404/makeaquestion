import React, { Component } from 'react';
import FormHeader from './formHeader';
import Questions from './Questions';
import Question from './Question';
import Header from './Header';

class QuestionsApp extends Component {
  constructor(props) {
    super(props);
    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.title = "Questions App";
    this.state = {
      questionsList: []
    };
  }

  componentDidMount() {
    try {
      let json = localStorage.getItem('options');
      let questionsList = JSON.parse(json);

      if (json) {
        this.setState(() => ({questionsList}))
      }
    } catch (error) {
      alert(error)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.questionsList.length != this.state.questionsList.length) {
      localStorage.setItem('options', JSON.stringify(this.state.questionsList));
    }
  }

  handleQuestions(question) {
    if (question.firstName === '' || question.lastName === '' || question.question === '') {
      return 'All values are required'
    }

    for(let item of this.state.questionsList) {
      if (item.question == question.question) {
        return 'This question already exists';
      }
    }

    this.setState((prevState) => {
      return {
        questionsList: prevState.questionsList.concat(question)
      }
    })
  }

  handleRemove() {
    this.setState(() => {
      return {
        questionsList: []
      }
    })
  }

  handleRemoveQuestion(questionId) {
    this.setState((prevState) => ({
      questionsList: prevState.questionsList.filter((item, index) => questionId !== index)
    }))
  }

  render() {
    return (
      <div>
        <Header title={this.title} />
        <FormHeader handleQuestions={this.handleQuestions} />
        <Questions handleRemove={this.handleRemove} handleRemoveQuestion={this.handleRemoveQuestion} questionsList={this.state.questionsList} />
      </div>
    );
  }
}

export default QuestionsApp;
