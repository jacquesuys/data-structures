// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodeList) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if ( this.contains(node) ) {
    delete this.nodeList[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if ( this.contains(fromNode) && this.contains(toNode) ) {
    var qualifier = _.any(this.nodeList[fromNode], function(node) {
      return node === toNode;
    });
    if ( qualifier ) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if (this.contains(fromNode) && this.contains(toNode)) {
    this.nodeList[fromNode].push(toNode);
    this.nodeList[toNode].push(fromNode);
  // }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    this.nodeList[fromNode] = [];
    this.nodeList[toNode] = [];
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeList) {
    // debugger;
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
