var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      var newHeadNode = Node(value);
      newHeadNode.next = list.head.next;
      list.head = newHeadNode;
    }
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  list.contains = function(target) {
    var traverseNodesRecurse = function(Node) {
      if (Node.value === target) {
        return true;
      }
      if (Node !== list.tail) {
        return traverseNodesRecurse(Node.next);
      }
      return false;
    };
    return traverseNodesRecurse(list.head);
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
//addToTail(value): O(1)
//removeHead(): O(1)
//contains(value): O(n)

var testLinkedList = LinkedList();
testLinkedList.addToTail('a');
testLinkedList.addToTail('b');
testLinkedList.addToTail('c');
// var found = testLinkedList.contains('b');
// console.log(found);
testLinkedList.addToHead('y');
console.log(testLinkedList.head.value);
testLinkedList.addToHead('z');
console.log(testLinkedList.head.value);








