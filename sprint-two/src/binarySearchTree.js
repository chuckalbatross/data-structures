var BinarySearchTree = function(value) {
  var someInstance = Object.create(binarySearchTreeMethods);
  someInstance.value = value;
  // someInstance.left = BinarySearchTree();
  // someInstance.right = BinarySearchTree();
  return someInstance;
};


var binarySearchTreeMethods = {
  insert: function(value) {
    //if node already exist in BST, then exit out of function
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = BinarySearchTree(value);
      }
    } else {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = BinarySearchTree(value);
      }
    }
  },
  contains: function(value) {
    var result = false;

    var containsRecursive = function(node) {
      if (node.value === value) {
        result = true;
      } 
      if (node.left) {
        containsRecursive(node.left);
      } 
      if (node.right) {
        containsRecursive(node.right);
      }
    }

    containsRecursive(this);
    return result;
  },
  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
    return;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var testBST = BinarySearchTree(5);
testBST.insert(2);
testBST.insert(3);
testBST.insert(7);
testBST.contains(7);
testBST.contains(8);

var array = [];
var func = function(value) { array.push(value); };
testBST.depthFirstLog(func);