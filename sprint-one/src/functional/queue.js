var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value;
  };

  someInstance.dequeue = function() {
    var oldestProp = Object.keys(storage)[0];
    var dequeued = storage[oldestProp];
    delete storage[oldestProp];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
