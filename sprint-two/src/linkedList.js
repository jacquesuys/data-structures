var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list._length = 0;
  var currentNode = list.head;

  list.addToTail = function(value) {
    var linkedListNode = new Node(value);
    currentNode = list.head;

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
    var deletedNode = null;
    currentNode = list.head;
    if (currentNode) {
      list.head =  currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      list._length--;
    }
    return deletedNode.value;
  };

  list.contains = function(target) {
    var doesContain = false;

    var recurser = function(current){
      if (current) {
        if (current.value === target) {
          doesContain = true;
          return;
        } else if (current.next) {
          recurser(current.next);
        }
      }
    };

    recurser(list.head);

    return doesContain;
  };
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
