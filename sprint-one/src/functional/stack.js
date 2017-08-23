var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[value] = value;
  };

  someInstance.pop = function() {
    var lastKey = Object.keys(storage)[Object.keys(storage).length - 1];
    var popped = storage[lastKey];
    delete storage[lastKey];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

