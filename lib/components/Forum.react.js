var Forum = React.createClass({
  displayName: "Forum",

  getInitialState: function () {
    return {
      allAnswers: ForumStore.getAnswers()
    };
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(ForumHeader, null),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(ForumQuestion, null),
        React.createElement("hr", null),
        React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
        React.createElement("hr", null),
        React.createElement(
          "h4",
          null,
          "Add an answer"
        ),
        React.createElement(ForumAddBox, { onAddAnswer: this._onAddAnswer })
      )
    );
  },
  _onAddAnswer: function (answerText) {
    console.log("Adding answer: " + answerText);
    ForumDispatcher.dispatch({
      actionType: "FORUM_ANSWER_ADDED",
      newAnswer: answerText
    });
  },
  _onMarkCorrect: function (id) {
    ForumDispatcher.dispatch({
      actionType: "FORUM_ANSWER_MARKED_CORRECT",
      id: id
    });
  }
});