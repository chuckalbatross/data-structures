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
treeMethods.removeChild = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      this.children.splice(i, 1);
    }
  }
  for (var j = 0; j < this.children.length; j++) {
    this.children[j].removeChild(target);
  }
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
var testTree = Tree('Parent');
testTree.addChild('Susie');
testTree.addChild('Brad');
testTree.children[0].addChild('Cherry');
testTree.children[0].children[0].addChild('Toby');
testTree.removeChild('Cherry');
console.log(testTree.contains('Toby'));
/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - O(n)
 */