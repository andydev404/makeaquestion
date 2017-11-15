'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionsApp = function (_React$Component) {
  _inherits(QuestionsApp, _React$Component);

  function QuestionsApp(props) {
    _classCallCheck(this, QuestionsApp);

    var _this = _possibleConstructorReturn(this, (QuestionsApp.__proto__ || Object.getPrototypeOf(QuestionsApp)).call(this, props));

    _this.handleQuestions = _this.handleQuestions.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    _this.handleRemoveQuestion = _this.handleRemoveQuestion.bind(_this);
    _this.title = "Questions App";
    _this.state = {
      questionsList: []
    };
    return _this;
  }

  _createClass(QuestionsApp, [{
    key: 'handleQuestions',
    value: function handleQuestions(question) {
      if (question.firstName === '' || question.lastName === '' || question.question === '') {
        return 'All values are required';
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.questionsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.question == question.question) {
            return 'This question already exists';
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setState(function (prevState) {
        return {
          questionsList: prevState.questionsList.concat(question)
        };
      });
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove() {
      this.setState(function () {
        return {
          questionsList: []
        };
      });
    }
  }, {
    key: 'handleRemoveQuestion',
    value: function handleRemoveQuestion(questionId) {
      console.log(questionId);
      this.setState(function (prevState) {
        return {
          questionsList: prevState.questionsList.filter(function (item, index) {
            return questionId !== index;
          })
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.title }),
        React.createElement(FormHeader, { handleQuestions: this.handleQuestions }),
        React.createElement(Questions, { handleRemove: this.handleRemove, handleRemoveQuestion: this.handleRemoveQuestion, questionsList: this.state.questionsList })
      );
    }
  }]);

  return QuestionsApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'nav',
        { className: 'navbar navbar-dark bg-dark' },
        React.createElement(
          'div',
          { className: 'container' },
          React.createElement(
            'span',
            { className: 'navbar-brand mb-0 h1' },
            this.props.title
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var FormHeader = function (_React$Component3) {
  _inherits(FormHeader, _React$Component3);

  function FormHeader(props) {
    _classCallCheck(this, FormHeader);

    var _this3 = _possibleConstructorReturn(this, (FormHeader.__proto__ || Object.getPrototypeOf(FormHeader)).call(this, props));

    _this3.submitform = _this3.submitform.bind(_this3);
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(FormHeader, [{
    key: 'submitform',
    value: function submitform(e) {
      e.preventDefault();
      var question = {
        firstName: e.target.elements.firstName.value.trim(),
        lastName: e.target.elements.lastName.value.trim(),
        question: e.target.elements.question.value.trim()
      };
      var error = this.props.handleQuestions(question);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'jumbotron jumbotron-fluid' },
        React.createElement(
          'div',
          { className: 'container' },
          this.state.error && React.createElement(
            'div',
            { className: 'alert alert-danger' },
            this.state.error
          ),
          React.createElement(
            'form',
            { onSubmit: this.submitform },
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement(
                'div',
                { className: 'col-md-4' },
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'First Name'
                  ),
                  React.createElement('input', { type: 'text', className: 'form-control', name: 'firstName' })
                )
              ),
              React.createElement(
                'div',
                { className: 'col-md-4' },
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Last Name'
                  ),
                  React.createElement('input', { type: 'text', className: 'form-control', name: 'lastName' })
                )
              ),
              React.createElement(
                'div',
                { className: 'col-md-4' },
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Question'
                  ),
                  React.createElement('input', { type: 'text', className: 'form-control', name: 'question' })
                )
              ),
              React.createElement(
                'div',
                { className: 'col-md-12' },
                React.createElement(
                  'button',
                  { type: 'submit', className: 'btn btn-outline-dark' },
                  'Submit'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FormHeader;
}(React.Component);

var Questions = function (_React$Component4) {
  _inherits(Questions, _React$Component4);

  function Questions() {
    _classCallCheck(this, Questions);

    return _possibleConstructorReturn(this, (Questions.__proto__ || Object.getPrototypeOf(Questions)).apply(this, arguments));
  }

  _createClass(Questions, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'button',
          { type: 'button', onClick: this.props.handleRemove, className: 'btn btn-outline-danger mb-4' },
          'Remove All'
        ),
        React.createElement(
          'table',
          { className: 'table' },
          React.createElement(
            'thead',
            { className: 'thead-dark' },
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                { scope: 'col' },
                '#'
              ),
              React.createElement(
                'th',
                { scope: 'col' },
                'First Name'
              ),
              React.createElement(
                'th',
                { scope: 'col' },
                'Last Name'
              ),
              React.createElement(
                'th',
                { scope: 'col' },
                'Question'
              ),
              React.createElement(
                'th',
                { scope: 'col' },
                'Options'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.props.questionsList.map(function (question, index) {
              return React.createElement(Question, { key: index, number: index, handleRemoveQuestion: _this5.props.handleRemoveQuestion, questionsList: question });
            })
          )
        )
      );
    }
  }]);

  return Questions;
}(React.Component);

var Question = function (_React$Component5) {
  _inherits(Question, _React$Component5);

  function Question(props) {
    _classCallCheck(this, Question);

    var _this6 = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this, props));

    _this6.handleRemoveItem = _this6.handleRemoveItem.bind(_this6);
    return _this6;
  }

  _createClass(Question, [{
    key: 'handleRemoveItem',
    value: function handleRemoveItem() {
      this.props.handleRemoveQuestion(this.props.number);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          this.props.number + 1
        ),
        React.createElement(
          'td',
          null,
          this.props.questionsList.firstName
        ),
        React.createElement(
          'td',
          null,
          this.props.questionsList.lastName
        ),
        React.createElement(
          'td',
          null,
          this.props.questionsList.question,
          '?'
        ),
        React.createElement(
          'td',
          null,
          React.createElement(
            'button',
            { type: 'button', onClick: this.handleRemoveItem, className: 'btn btn-outline-danger' },
            'Remove'
          )
        )
      );
    }
  }]);

  return Question;
}(React.Component);

ReactDOM.render(React.createElement(QuestionsApp, null), document.getElementById('root'));
