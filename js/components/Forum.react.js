var Forum = React.createClass({
  getInitialState: function() {
    return {
      allAnswers: {
        "1": {
          body: "Isn't that about time travel?",
          correct: false
        },
        "2": {
          body:
            "React and Flux are a tool and methodologies for building the front end of web applications.",
          correct: false
        },
        "3": {
          body: "React is a synonym for 'respond'",
          correct: false
        }
      }
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
          <ForumAddBox />
        </div>
      </div>
    );
  }
});
