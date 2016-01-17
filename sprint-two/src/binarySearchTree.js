var BinarySearchTree = function(value) {
   var binarySearchTree = Object.create(BinarySearchTree.prototype);
   binarySearchTree.value = value;
   binarySearchTree.left = null;
   binarySearchTree.right = null;
   return binarySearchTree;
};


BinarySearchTree.prototype.insert = function(value) {
  if(value < this.value) {
    // left
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    // right
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) / linear time
 * contains: O(n) / linear time
 * depthFirstLog: O(n) / linear time
 */
