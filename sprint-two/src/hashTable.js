

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var tuple = [k, v];
  var overRidden = false;

  for (var i = 0; i < bucket.length; i++) {
      var currentTuple = bucket[i];
      if (currentTuple[0] === k) {
        currentTuple[1] = v;
        overRidden = true;
      }
  }
  if (!overRidden) {
    bucket.push(tuple);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) / linear time
 * retrieve: O(n) / linear time
 * remove: O(n) / linear time
 */
