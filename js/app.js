React.render(
  React.createElement(Forum, null),
  document.getElementById("forum")
);

var myEmmitter = new EventEmitter();

myEmmitter.on("STARTED_THE_APP", function() {
  console.log("started the app");
});

myEmmitter.on("STARTED_THE_APP", function() {
  console.log("started the app #1");
});

myEmmitter.emit("STARTED_THE_APP");

ForumDispatcher.register(function(action) {
  console.log("received an action");
  console.log(action);
});
