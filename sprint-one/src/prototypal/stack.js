var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  return someInstance;
};

var stackMethods = {
  size: function() {
    return this.counter;
  },
  push: function(value) {
    this.counter++;
    this[this.counter] = value;
  },
  pop: function() {
    if (this.counter > 0) {
      var popped = this[this.counter];
      delete this[this.counter];
      this.counter--;
      return popped;
    }
  }
};


