var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  size: function(){
    return this.counter;
  },
  enqueue: function(value) {
    this.counter++;
    this[this.counter] = value;
  },
  dequeue: function() {
    if (this.counter > 0) {
      var dequeued = this[1];
      this.counter--;
      for (var key in this) {
        this[key-1] = this[key];
      }
      return dequeued;
    }
  }
};


