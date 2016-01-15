var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];
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
  } else if (currentTree.children && currentTree.children.length > 0) {
    for (var i = 0; i < currentTree.children.length; i++) {
      if (treeMethods.contains(target, currentTree.children[i])) {
        return true;
      }
    }
  } 
  return false;
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 * treeMethods.addChild() is a constant time
 * treeMethods.contains() is a linear time
 */
