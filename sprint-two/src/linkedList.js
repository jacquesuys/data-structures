var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list._length = 0;

  list.addToTail = function(value) {
    var linkedListNode = new Node(value);
    var currentNode = list.head;

    list.tail = linkedListNode;
    
    if (!currentNode) {
      list.head = linkedListNode;
      list._length++;
      return linkedListNode;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = linkedListNode;

    list._length++;

    return linkedListNode;
  };

  list.removeHead = function() {
    var currentNode = this.head;
    var deletedNode = null;
    if (currentNode) {
      list.head =  currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      list._length--;

      return deletedNode;
    }
  };

  list.contains = function(target) {
  };

  console.log(list);
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
