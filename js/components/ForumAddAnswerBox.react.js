var ForumAddBox = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },

  _addAnswer: function() {
    this.props.onAddAnswer();
  },

  _onChange: function(event) {
    console.log("publishing event: " + event.target.value);
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    return (
      <div>
        <textarea
          id="addAnswer"
          className="col-md-6 col-xs-8"
          onChange={this._onChange}
        ></textarea>
        &nbsp;
        <input
          type="button"
          className="btn btn-primary"
          value="Add"
          onClick={this._addAnswer}
        />
      </div>
    );
  }
});
