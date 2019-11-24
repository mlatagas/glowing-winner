function Dispatcher() {
  this._lastID = 0;
  this.callbacks = {};
}

Dispatcher.prototype.register = function(callback) {
  console.log("registering callback: " + JSON.stringify(callback));

  var id = "CID_" + this._lastID++;
  this.callbacks[id] = callback;
  return id;
};

Dispatcher.prototype.dispatch = function(action) {
  console.log("Dispatching action: " + JSON.stringify(action));
  for (var id in this._callbacks) {
    this._callbacks[id](action);
  }
};
