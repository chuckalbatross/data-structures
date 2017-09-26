describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  //should add newNode (with value) to front of list when .addToHead(value) is called
  it('should add newNode (with value) to front of list when .addToHead(value) is called', function() {
    //add to head when list is empty
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    //add to head when list isn't empty
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.value).to.equal(6);
  });

});
