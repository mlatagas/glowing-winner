var ForumQuestion = React.createClass({
  displayName: "ForumQuestion",

  render: function () {
    retun(React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "What is React and Flux?"
      ),
      React.createElement(
        "p",
        null,
        "I dont understand React or Flux. Can someone help me?"
      )
    ));
  }
});