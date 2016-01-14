var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
};

Queue.prototype.size = function(){
  return this.counter;
};

Queue.prototype.enqueue = function(value) {
  this.counter++;
  this[this.counter] = value;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var dequeued = this[1];
    delete this[1];
    for (var key in this) {
      this[key - 1] = this[key];
    }
    this.counter--;
    return dequeued;
  }
};


