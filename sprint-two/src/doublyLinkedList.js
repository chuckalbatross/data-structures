var DoublyLinkedList = function() {
  var doublyLinkedList = {};
  doublyLinkedList.head = null;
  doublyLinkedList.tail = null;

  doublyLinkedList.addToHead = function(value) {
    //check if doublyLinkedList is empty
    if (doublyLinkedList.head === null) {
      //point head to new node, point tail to new node (set node.next to null and node.prev to null)
      doublyLinkedList.head = Node(value);
      doublyLinkedList.tail = doublyLinkedList.head;
    } else {
    //else (doublyLinkedList isn't empty)
      doublyLinkedList.head.prev = Node(value);
      doublyLinkedList.head.prev.next = doublyLinkedList.head;
      doublyLinkedList.head = doublyLinkedList.head.prev;
    }
  };

  return doublyLinkedList;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
}