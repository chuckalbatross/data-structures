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

treeMethods.contains = function(target) {
  var containsRecurse = function (tree) {
    if (tree.value === target) {
      return true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      if (containsRecurse(tree.children[i])) {
        return true;
      }
    }
    return false;
  };
  return containsRecurse(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - O(n)
 */
