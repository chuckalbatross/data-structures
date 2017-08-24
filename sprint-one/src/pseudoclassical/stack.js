var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // this = object.create(Stack.prototype)
  this.storage = {};
};

Stack.prototype = {
  constructor: Stack,
  size: function () {
    return Object.keys(this.storage).length;
  },
  push: function (value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  pop: function () {
    var poppedValue = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return poppedValue;
  }
};

