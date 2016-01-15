var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, currentTree) {
  currentTree = currentTree || this;

  if (currentTree.value === target) {
    return true;
  } else if(this.children) {
    for (var i = 0; i < this.children.length; i++) {
      return treeMethods.contains(target, this.children[i]);
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
