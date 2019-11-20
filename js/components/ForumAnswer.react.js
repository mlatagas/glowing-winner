var ForumAnswer = React.createClass({
  propTypes: {
    answer: React.PropTypes.object.isRequired,
    onMarkCorrect: React.PropTypes.func.isRequired
  },

  _markCorrect: function() {
    this.props.onMarkCorrect(this.props.id);
  },

  render: function() {
    var answer = this.props.answer;

    return (
      <div className="panel panel-default">
        <div className="panel-body">{answer.body}</div>
        <div className="pull-right">
          <small>
            <a href="#" onMarkCorrect={this._markCorrect}>
              Mark as correct
            </a>
          </small>
        </div>
      </div>
    );
  }
});
