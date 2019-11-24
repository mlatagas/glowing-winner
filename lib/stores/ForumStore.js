var answerData = {
  "1": {
    body: "Isn't that about time travel?",
    correct: false
  },
  "2": {
    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
    correct: false
  },
  "3": {
    body: "React is a synonym for 'respond'",
    correct: false
  }
};

var ForumStore = new EventEmitter();

ForumStore.emitChange = function () {
  this.emit("change");
};

ForumStore.addChangeListener = function (listener) {
  console.log("Adding listener: " + JSON.stringify(listener));

  this.on("change", listener);
};

ForumStore.getAnswers = function () {
  return answerData;
};

ForumStore.addAnswer = function (newAnswer) {
  console.log("FromStore.AddAnswer: adding answer " + newAnswer);
  answerData[Object.keys(answerData).length + 1] = {
    body: newAnswer,
    correct: false
  };
  this.emitChange();
};

ForumStore.markAsCorrect = function (id) {
  for (key in answerData) {
    answerData[key].correct = false;
  }
  answerData[id].correct = true;
  this.emitChange();
};

ForumDispatcher.register(function (action) {
  console.log("Inside register dispatcher..");

  switch (action.actionType) {
    case "FORUM_ANSWER_ADDED":
      {
        console.log("Answer added!");
        ForumStore.addAnswer(action.newAnswer);
        break;
      }

    case "FORUM_ANSWER_MARKED_CORRECT":
      {
        console.log("Answer with id: " + action.id + " marked correct.");
        ForumStore.markAsCorrect(action.id);
        break;
      }
  }
});