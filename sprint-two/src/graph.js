

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
  this.counter = 0;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  this.nodeList[node] = [];
  this.counter++;

  console.log(this.nodeList);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodeList) {
    // console.log(key);
    if (key === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for (var key in this.nodeList) {
  //   if (this.nodeList[key] === node) {
  //     delete this.nodeList[key];
  //   }
  // }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if (this.nodeList[fromNode].edge && this.nodeList[fromNode].edge === toNode) {
  //   if (this.nodeList[toNode].edge && this.nodeList[toNode].edge === fromNode) {
  //     return true;
  //   } 
  // }
  // return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // this.nodeList[fromNode].edge = toNode;
  // this.nodeList[toNode].edge = fromNode;
  // console.log(this.nodeList);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


