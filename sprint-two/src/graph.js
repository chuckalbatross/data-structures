//graphTest.js

// Instantiate a new graph
var Graph = function() {
  //this = Object.create(Graph.prototype)
  this.Node = {};
  //return someInstance
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.Node[node] = [{value: node}];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.Node) {
    if (this.Node[key][0].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //Remove edges whose toNode values === node
  if (this.Node[node].length > 1) {
    var deleteEdgesArr = this.Node[node][1].edges;
    for (var i = 0; i < deleteEdgesArr.length; i++) {
      //this.Node[deleteEdgesArr[i]][1].edges.splice(this.Node[deleteEdgesArr[i]][1].edges.indexOf(node), 1);
      this.removeEdge(deleteEdgesArr[i], node);
    }
  }
  //delete target node
  delete this.Node[node]; 
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if either fromNode or toNode doesn't have an edges object (array.length === 1), then return false
  if (this.contains(fromNode) && this.contains(toNode)) {  
    if (this.Node[fromNode].length > 1 && this.Node[toNode].length) {
      return this.Node[fromNode][1].edges.includes(toNode);
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    //if edges:[] doesn't exist
    if (this.Node[fromNode].length === 1) {
      this.Node[fromNode].push({edges: [toNode]});
    } else {
      this.Node[fromNode][1].edges.push(toNode);
    }
    if (this.Node[toNode].length === 1) {
      this.Node[toNode].push({edges: [fromNode]});
    } else {
      this.Node[toNode][1].edges.push(fromNode);
    }
    //else (edges:[]) does exist, push to edges[]
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.Node[fromNode][1].edges.splice(this.Node[fromNode][1].edges.indexOf(toNode), 1);
  this.Node[toNode][1].edges.splice(this.Node[toNode][1].edges.indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.Node) {
    cb(this.Node[key][0].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?


 addNode(): O(1)
 contains(): O(n)
 removeNode(): O(1)
 hasEdge(): O(1) //linear to number of edges a single node has (constant relative to number of nodes in entire graph)
 addEdge(): O(1)
 removeEdge(): O(1)
 forEachNode(): O(n)
 */


/*
 var arr = [0, 1, 2];
 arr.node1 = {value: 'node1'};
 // console.log(arr);
 console.log(arr.node1);
 console.log(arr.node2);
 */

var testGraph = new Graph();
testGraph.addNode(2);
testGraph.addNode(3);
testGraph.addNode(4);
testGraph.addNode(5);
// console.log('Contains 2?', testGraph.contains(2));
// testGraph.removeNode(2);
// console.log('Contains 2?', testGraph.contains(2));
testGraph.addEdge(2, 3);
testGraph.addEdge(2, 5);
testGraph.addEdge(5, 4);
testGraph.addEdge(4, 3);
testGraph.removeEdge(2, 3);

