var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.counter = 0;

  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.counter;
  },
  enqueue: function(value) {
    this.counter++;
    this[this.counter] = value;
  },
  dequeue: function() {
    if (this.counter > 0) {
      var dequeued = this[1];
      delete this[1];
      this.counter--;
      for (var key in this) {
        this[key-1] = this[key];
      }
      return dequeued;
    }
  }
};


