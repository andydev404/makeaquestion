class QuestionsApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.title = "Questions App";
    this.state = {
      questionsList: []
    };
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

  render() {
    return (
      <div>
        <Header title={this.title} />
        <FormHeader handleQuestions={this.handleQuestions} />
        <Questions handleRemove={this.handleRemove} questionsList={this.state.questionsList} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">{this.props.title}</span>
        </div>
      </nav>
    );
  }
}

class FormHeader extends React.Component {
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

class Questions extends React.Component {
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
            </tr>
          </thead>
          <tbody>
            {
              this.props.questionsList.map((question, index) => {
                return <Question key={index} number={index} questionsList={question} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    return (
      <tr>
        <th>{this.props.number + 1}</th>
        <td>{this.props.questionsList.firstName}</td>
        <td>{this.props.questionsList.lastName}</td>
        <td>{this.props.questionsList.question}?</td>
      </tr>
    );
  }
}

ReactDOM.render(<QuestionsApp />, document.getElementById('root'));
