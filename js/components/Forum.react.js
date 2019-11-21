var Forum = React.createClass({
  getInitialState: function() {
    return {
      allAnswers: ForumStore.getAnswers()
    };
  },

  render: function() {
    return (
      <div>
        <ForumHeader></ForumHeader>
        <div className="container">
          <ForumQuestion />
          <hr></hr>
          <ForumAnswers allAnswers={this.state.allAnswers} />
          <hr></hr>
          <h4>Add an answer</h4>
          <ForumAddBox onAddAnswer={this._onAddAnswer} />
        </div>
      </div>
    );
  },
  _onAddAnswer: function(answerText) {
    console.log("Adding answer: " + answerText);
    ForumDispatcher.dispatch({
      actionType: "FORUM_ANSWER_ADDED",
      newAnswer: answerText
    });
  },
  _onMarkCorrect: function(id) {
    ForumDispatcher.dispatch({
      actionType: "FORUM_ANSWER_MARKED_CORRECT",
      id: id
    });
  }
});
