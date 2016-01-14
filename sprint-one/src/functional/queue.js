var Queue = function() {
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    someInstance[counter] = value;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      var dequeued = someInstance[1];
      counter--;
      for (var key in someInstance) {
        someInstance[key-1] = someInstance[key];
      }
      delete someInstance[0];
      return dequeued;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
