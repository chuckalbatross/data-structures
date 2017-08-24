var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype = {
  constructor: Queue,
  size: function () {
    return Object.keys(this.storage).length;
  },
  enqueue: function (value) {
    this.storage[value] = value;
  },
  dequeue: function () {
    var dequeuedVal = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return dequeuedVal;
  }
};

