var Stack = function() {
  this.counter = 0;
};

Stack.prototype.size = function() {
  return this.counter;
};

Stack.prototype.push = function(value) {
  this.counter++;
  this[this.counter] = value;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var popped = this[this.counter];
    delete this[this.counter];
    this.counter--;
    return popped;
  }
};